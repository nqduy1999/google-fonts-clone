import { Box, SxProps, TextField, TextFieldProps } from '@mui/material';
import React, { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';

type Props = TextFieldProps & { wrapperSx?: SxProps };

const defaultSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  color: '#5f6368',
  fontSize: '20px'
};

const Input: FC<Props> = ({ wrapperSx, type, ...props }) => {
  return (
    <Box sx={wrapperSx ? { ...wrapperSx, ...defaultSx } : { ...defaultSx }}>
      {type === 'search' ? (
        <SearchIcon
          sx={{
            transform: 'scale(1.25)'
          }}
        />
      ) : (
        ''
      )}
      <TextField sx={{ border: 'none' }} {...props} />
    </Box>
  );
};

export default Input;
