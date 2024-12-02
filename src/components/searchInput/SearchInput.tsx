import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

import styles from './searchInput.module.css';

import { useDebounce } from '../../hooks/useDebounce';

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search photos and illustrations',
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get('query') || '';

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const debouncedSearchQuery = useDebounce(searchQuery);

  const updateSearchParams = useCallback(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    if (debouncedSearchQuery) {
      current.set('query', debouncedSearchQuery);
      current.delete('page');
    } else {
      current.delete('query');
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${window.location.pathname}${query}`);
  }, [debouncedSearchQuery, searchParams, router]);

  useEffect(() => {
    if (debouncedSearchQuery !== initialQuery) {
      updateSearchParams();
    }
  }, [debouncedSearchQuery, initialQuery, updateSearchParams]);

  const deleteSearchQuery = () => {
    setSearchQuery('');
  };

  return (
    <div className={styles.searchContainer}>
      <FaSearch />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
      <RxCross2 onClick={deleteSearchQuery} className={styles.crossIcon} />
    </div>
  );
};

export default SearchInput;
