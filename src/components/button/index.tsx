import { Button as ButtonMUI, ButtonProps } from '@mui/material';
import React, { FC, ReactNode } from 'react';

interface IButtonProps extends ButtonProps {
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return <ButtonMUI {...props}>{children}</ButtonMUI>;
};

export default Button;
