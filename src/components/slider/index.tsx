import { Slider as SliderMUI, SliderProps } from '@mui/material';
import React, { FC } from 'react';

type Props = SliderProps;

const Slider: FC<Props> = ({ ...props }) => {
  return <SliderMUI {...props} />;
};

export default Slider;
