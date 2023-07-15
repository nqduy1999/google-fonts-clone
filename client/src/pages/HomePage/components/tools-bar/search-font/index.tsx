import Input from '@/components/input';
import { Box } from '@mui/material';
import React from 'react';

const SearchFont = () => {
  return (
    <Box
      sx={{
        borderRight: 1,
        borderColor: '#dadce0',
      }}
      p={1.15}
      marginLeft={2.5}
      width={'100%'}
      minWidth={180}
    >
      <Input
        type="search"
        placeholder="Search Font"
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

export default SearchFont;
