import React, { useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Pagination = () => {
  const [isFirstPage, setIsFirstPage] = useState(true);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = searchParams.get('page');
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (page === '1') {
      setIsFirstPage(true);
    } else if (isFirstPage && page !== '1') {
      setIsFirstPage(false);
    }
  }, [page, isFirstPage]);

  function handleMoveForward() {
    const newPage = page ? String(Number(page) + 1) : '2';

    params.set('page', newPage);
    replace(`${pathname}?${params.toString()}`);
  }

  const handleMoveBack = () => {
    const newPage = page ? String(Number(page) - 1) : '1';

    params.set('page', newPage);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex w-full justify-center gap-10 py-10">
      <button
        onClick={handleMoveBack}
        className={`flex items-center justify-center px-4 h-10 text-base font-medium  bg-indigo-600 border border-indigo-700 rounded-lg
        ${
          isFirstPage
            ? 'cursor-not-allowed bg-indigo-400'
            : 'hover:bg-indigo-500'
        }`}
        disabled={isFirstPage}
      >
        <FaArrowLeft color={'white'} />
      </button>

      <button
        onClick={handleMoveForward}
        className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-indigo-600 border border-indigo-700 rounded-lg hover:bg-indigo-500 hover:text-gray-700
        "
      >
        <FaArrowRight color={'white'} />
      </button>
    </div>
  );
};
