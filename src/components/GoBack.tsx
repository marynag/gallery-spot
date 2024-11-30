'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { FaArrowLeft } from 'react-icons/fa';

export const GoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="absolute top-3 left-5 md:top-20 md:left-20 h-6 w-6">
      <FaArrowLeft onClick={handleGoBack} size={'30'} />
    </div>
  );
};
