import { Box } from '@mui/material';
import React, { useState } from 'react';
// import { PREVIEW_TEXTS } from './const';
import Select from '@/components/select';
import Input from '@/components/input';
import { PREVIEW_TEXTS } from './const';

const PreviewFont = () => {
  const [value, setValue] = useState<string>(PREVIEW_TEXTS[0].value as string);

  const onChangePreview = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      width={'100%'}
      height={'100%'}
      sx={{
        borderRight: 1,
        borderColor: '#dadce0',
        height: '50px',
      }}
      minWidth={180}
    >
      <Select
        items={PREVIEW_TEXTS}
        value={value}
        sx={{
          '& fieldset': {
            border: 'none',
          },
        }}
        onChange={onChangePreview}
      />
      <Input
        type="text"
        placeholder="Type Something"
        variant="outlined"
        sx={{
          '& fieldset': {
            border: 'none',
          },
        }}
        inputProps={{
          style: {
            padding: 4,
          },
        }}
      />
    </Box>
  );
};

export default PreviewFont;
