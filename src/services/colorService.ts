import { ColorType } from '@/types/ColorType';

const API_ROUTE = '/api';

const fetchColor = async () => {
  const response = await fetch(`${API_ROUTE}/color`);
  const data: ColorType = await response.json();

  return data;
};

export { fetchColor };
