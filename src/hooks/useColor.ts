import { useEffect, useState } from 'react';
import { ColorType } from '@/types/ColorType';

const defaultColor = {
  normal: '#ffffff',
  inverted: '#000000',
  rgb: '255,255,255',
};

const useColor = () => {
  const [color, setColors] = useState<ColorType>(defaultColor);

  useEffect(() => {
    const getColor = async () => {
      try {
        const response = await fetch('/api/colors');
        const data: ColorType = await response.json();

        setColors(data);
      } catch (e) {
        console.log(e);
      }
    };

    getColor();
  }, []);

  return color;
};

export default useColor;
