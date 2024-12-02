import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './pagination.module.css';

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
    <div className={styles.paginationContainer}>
      <button
        onClick={handleMoveBack}
        className={styles.button}
        disabled={isFirstPage}
      >
        <FaArrowLeft color={'white'} />
      </button>

      <button
        onClick={handleMoveForward}
        className={styles.button}
        disabled={isLastPage}
      >
        <FaArrowRight color={'white'} />
      </button>
    </div>
  );
};
