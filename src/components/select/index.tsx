import { MenuItem, Select as SelectMUI, SelectProps } from '@mui/material';
import React, { ReactNode } from 'react';
import { FC } from 'react';

export interface SelectItem {
  value: string | number;
  label: string | ReactNode;
}

interface ISelectProps extends SelectProps {
  items: SelectItem[];
}
/**
 *
 * @param items: Items of Select
 * @returns Custom Select
 */

const Select: FC<ISelectProps> = ({ items, ...props }) => {
  return (
    <SelectMUI
      {...props}
      sx={{
        borderRadius: '24px',
        ...props.sx,
      }}
    >
      {items?.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
      {props.multiple ? <MenuItem key={'resetAll'}>Reset</MenuItem> : null}
    </SelectMUI>
  );
};

export default Select;
