'use client';

import React, { useState } from 'react';

import { FilterBar } from './FilterBar';
import { PhotoView } from './PhotoView';
import { Pagination } from './Pagination';
import { IPhoto } from '@/types/types';

type Props = {
  photos: IPhoto[];
};

export const Gallery = ({ photos }: Props) => {
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
