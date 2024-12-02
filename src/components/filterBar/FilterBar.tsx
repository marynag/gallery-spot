import React from 'react';
import { Toggle } from '../toogle/Toggle';
import SearchInput from '../searchInput/SearchInput';
import styles from './filterBar.module.css';

type FilterBarProps = {
  toggleChecked: boolean;
  toggleOnChange: () => void;
};

export const FilterBar = ({
  toggleChecked,
  toggleOnChange,
}: FilterBarProps) => {
  return (
    <div className={styles.filterBar}>
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
