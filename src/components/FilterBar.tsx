import React from 'react';

import SearchInput from './SearchInput';
import { Toggle } from './Toggle';

type FilterBarProps = {
  toggleChecked: boolean;
  toggleOnChange: () => void;
};

export const FilterBar = ({
  toggleChecked,
  toggleOnChange,
}: FilterBarProps) => {
  return (
    <div className="w-full flex justify-between">
      <SearchInput />
      <Toggle
        checked={toggleChecked}
        onChange={toggleOnChange}
        label="Columns per page"
        firstOption="5 columns"
        secondOption="3 columns"
      />
    </div>
  );
};
