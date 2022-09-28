// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import { ColorType } from '@/types/ColorType';

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
});

const getRandomHexColor = () => {
  let colorString = '#';

  const characters = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];

  for (let i = 0; i < 6; i++) {
    colorString += characters[Math.floor(Math.random() * characters.length)];
  }

  return colorString;
};

const getInvertedColor = (hex: string) => {
  const padZero = (str: string) => {
    const LENGTH = 2;
    const zeros = new Array(LENGTH).join('0');
    return (zeros + str).slice(-LENGTH);
  };

  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  // invert color components
  const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
};

const hexToRgb = (hex: string) => {
  const defaultValue = { r: 25, g: 255, b: 255 };
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : defaultValue;
};

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ColorType>,
) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  const color = getRandomHexColor();
  const invertedColor = getInvertedColor(color);
  const { r, g, b } = hexToRgb(color);

  res.status(200).json({
    normal: color,
    inverted: invertedColor,
    rgb: `${r}, ${g}, ${b}`,
  });
}
