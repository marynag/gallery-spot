import React, { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

import { useDebounce } from '../hooks/useDebounce';

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
    } else {
      current.delete('query');
    }

    const search = current.toString();
    const query = search ? `?${search}` : '';

    router.push(`${window.location.pathname}${query}`);
  }, [debouncedSearchQuery, searchParams, router]);

  useEffect(() => {
    updateSearchParams();
  }, [debouncedSearchQuery, updateSearchParams]);

  const deleteSearchQuery = () => {
    setSearchQuery('');
  };

  return (
    <div
      className={`md:w-2/5 w-full py-1 px-4 border border-gray-300 rounded-lg flex items-center gap-4`}
    >
      <FaSearch />
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="focus:outline-none w-full md:text-base text-lg"
      />
      <RxCross2
        onClick={deleteSearchQuery}
        className={`cursor-pointer text-gray-500 hover:text-gray-700 h-6 w-6 hove:text-gray-700`}
      />
    </div>
  );
};

export default SearchInput;
