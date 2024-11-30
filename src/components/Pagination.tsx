import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

interface PaginationProps {
  pages: number | undefined;
}

export const Pagination = ({ pages }: PaginationProps) => {
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = searchParams.get('page');
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    if (page === '1' || !page) {
      setIsFirstPage(true);
    } else if (isFirstPage && page !== '1') {
      setIsFirstPage(false);
    }

    if (pages) {
      if (page === String(pages)) {
        setIsLastPage(true);
      } else if (isLastPage && page !== String(pages)) {
        setIsLastPage(false);
      }
    }
  }, [page, isFirstPage, isLastPage, pages]);

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
    <div className="flex w-full justify-center gap-10 ">
      <button
        onClick={handleMoveBack}
        className={`flex items-center justify-center px-4 h-10 text-base font-medium  border border-indigo-700 rounded-lg
        ${
          isFirstPage
            ? 'cursor-not-allowed bg-indigo-400'
            : 'hover:bg-indigo-500 bg-indigo-600'
        }`}
        disabled={isFirstPage}
      >
        <FaArrowLeft color={'white'} />
      </button>

      <button
        onClick={handleMoveForward}
        className={`flex items-center justify-center px-4 h-10 text-base font-medium  border border-indigo-700 rounded-lg
          ${
            isLastPage
              ? 'cursor-not-allowed bg-indigo-400'
              : 'hover:bg-indigo-500 bg-indigo-600'
          }`}
        disabled={isLastPage}
      >
        <FaArrowRight color={'white'} />
      </button>
    </div>
  );
};
