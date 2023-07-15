import { Select } from '@/components';
import { CATEGORIES } from './const';
import React from 'react';

const SelectCategories = () => {
  return <Select items={CATEGORIES} multiple value={[CATEGORIES[0].value]} />;
};

export default SelectCategories;
