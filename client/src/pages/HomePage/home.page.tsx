import MainLayout from '@/layouts/MainLayout';
import { Box } from '@mui/material';
import React from 'react';
import ToolBarHome from './components/tools-bar';
import FilterBar from './components/filter-bar';

export default function Home() {
  return (
    <MainLayout title="Browse Fonts">
      <Box px={8} py={2}>
        <Box display="flex" flexDirection="column" gap={3}>
          <ToolBarHome />
          <FilterBar />
        </Box>
      </Box>
    </MainLayout>
  );
}
