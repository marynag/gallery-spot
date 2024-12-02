'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { FaArrowLeft } from 'react-icons/fa';

import styles from './goBack.module.css';

export const GoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className={styles.goBackContainer}>
      <FaArrowLeft onClick={handleGoBack} size={'30'} />
    </div>
  );
};
