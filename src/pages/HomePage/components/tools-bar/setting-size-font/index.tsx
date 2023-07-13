import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { FONT_SIZES, FONT_SIZE_SELECT } from './const';
import Select, { SelectItem } from '@/components/select';
import Slider from '@/components/slider';

const SettingFontSize = () => {
  const [fontSizes, setFontSize] = useState<SelectItem[]>([]);

  const [value, setValue] = useState<number>(8);

  const onChangeFont = (e: any) => {
    setValue(e.target.value);
  };

  const onMapperFontSizes = () => {
    const newFontSizes = FONT_SIZE_SELECT().filter((fontSize) =>
      FONT_SIZES.includes(fontSize.value as number),
    );
    setFontSize(newFontSizes);
  };

  useEffect(() => {
    onMapperFontSizes();
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      width={'100%'}
      p={1.15}
      sx={{
        height: '50px',
        borderRight: 1,
        borderColor: '#dadce0',
      }}
      minWidth={180}
    >
      <Select
        onFocus={() => onMapperFontSizes()}
        items={fontSizes}
        value={value}
        onChange={onChangeFont}
        sx={{
          '& fieldset': {
            border: 'none',
          },
        }}
      />
      <Slider
        onFocus={() => setFontSize(FONT_SIZE_SELECT())}
        onChange={onChangeFont}
        defaultValue={FONT_SIZES[0]}
        step={1}
        max={300}
      ></Slider>
    </Box>
  );
};

export default SettingFontSize;
