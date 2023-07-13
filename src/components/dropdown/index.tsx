import { Box, SxProps } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
/**
 * Dropdown with custom children
 */

interface IDropdown {
  children: ReactNode;
  title: string;
  wrapperSx?: SxProps;
}
const Dropdown: FC<IDropdown> = ({ children, title, wrapperSx }) => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  const onSelectIsDropdown = () => {
    setIsDropdown(true);
  };

  return (
    <Box
      px={1.5}
      py={0.75}
      position="relative"
      sx={wrapperSx ? { ...wrapperSx } : {}}
      onClick={() => onSelectIsDropdown()}
    >
      <Box>{title}</Box>
      <Box position="absolute" maxHeight={200} p={3}>
        {children}
      </Box>
      {isDropdown ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
    </Box>
  );
};

export default Dropdown;
