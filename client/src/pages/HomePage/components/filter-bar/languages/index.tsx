import { Select } from '@/components';
import React from 'react';
import { CATEGORIES } from '../categories/const';

const SelectLaguages = () => {
  return <Select items={CATEGORIES} value={CATEGORIES[0].value} />;
};

export default SelectLaguages;
