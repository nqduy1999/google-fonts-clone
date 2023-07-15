import { SelectItem } from '@/components/select';

export const FONT_SIZES = [8, 12, 14, 20, 24, 32, 40, 64, 96, 120, 184, 280];

export const FONT_SIZE_SELECT = () => {
  const newArr: SelectItem[] = [];
  for (let i = 1; i <= 300; i++) {
    newArr.push({
      value: i,
      label: i + 'px',
    });
  }
  return newArr;
};
