import { Grid } from '@mui/material';
import React from 'react';
import { GridSystemProps } from './interface';

const GridSystem: React.FC<GridSystemProps> = ({
  dataSource,
  container = true,
  direction,
  ...other
}) => {
  return (
    <Grid container={container} direction={direction} {...other}>
      {dataSource.map((children, key) => (
        <Grid item key={key} {...children.other}>
          {children.component}
        </Grid>
      ))}
    </Grid>
  );
};

export default GridSystem;
