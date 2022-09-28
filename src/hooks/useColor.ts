import { useEffect, useState } from 'react';
import { ColorType } from '@/types/ColorType';
import { fetchColor } from '@/services/colorService';

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
        const colorData = await fetchColor();

        setColors(colorData);
      } catch (e) {
        console.log(e);
      }
    };

    getColor();
  }, []);

  return color;
};

export default useColor;
