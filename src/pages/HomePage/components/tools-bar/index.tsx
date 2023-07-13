import { Box } from '@mui/material';
import React, { FC } from 'react';
import SettingFontSize from './setting-size-font';
import PreviewFont from './preview-font';
import SearchFont from './search-font';
import { Button } from '@/components';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface IToolBarHome {}

const ToolBarHome: FC<IToolBarHome> = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      borderRadius={10}
      border={1}
      borderColor={'#dadce0'}
      height={50}
    >
      <SearchFont />
      <PreviewFont />
      <SettingFontSize />
      <Button>
        <RestartAltIcon
          sx={{
            transform: 'scale(1.5)',
          }}
        />
      </Button>
    </Box>
  );
};

export default ToolBarHome;
