'use client';

import React, { useState } from 'react';

import { IGallery } from '@/types/types';
import { FilterBar } from './FilterBar';
import { PhotoView } from './PhotoView';
import { Pagination } from './Pagination';

type Props = {
  photos: IGallery[];
};

export const Gallery = async ({ photos }: Props) => {
  const [isMinColumnsAmount, setMinColumnsAmount] = useState(true);

  const handleColumnsAmount = () => {
    setMinColumnsAmount(!isMinColumnsAmount);
  };

  return (
    <>
      <FilterBar
        toggleChecked={isMinColumnsAmount}
        toggleOnChange={handleColumnsAmount}
      />
      <PhotoView photos={photos} isMinColumnsAmount={isMinColumnsAmount} />
      <Pagination />
    </>
  );
};
