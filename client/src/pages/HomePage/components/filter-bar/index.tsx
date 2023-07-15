import { Select } from '@/components';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import SelectCategories from './categories';
import SelectLaguages from './languages';

const FilterBar = () => {
  return (
    <Box display="flex" alignItems="center" gap={3}>
      <SelectCategories />
      <SelectLaguages />
      <FormControlLabel
        control={<Checkbox />}
        label="Show only variable fonts"
      />
    </Box>
  );
};

export default FilterBar;
