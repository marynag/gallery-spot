'use client';

import React, { useState } from 'react';

import { FilterBar } from './FilterBar';
import { PhotoView } from './PhotoView';
import { Pagination } from './Pagination';
import { IPhoto } from '@/types/types';
import { Error } from './Error';

type Props = {
  photos: IPhoto[];
  success: boolean;
};

export const Gallery = ({ photos, success }: Props) => {
  const [isMinColumnsAmount, setMinColumnsAmount] = useState(true);

  const handleColumnsAmount = () => {
    setMinColumnsAmount(!isMinColumnsAmount);
  };

  const errorMessage =
    photos.length === 0 ? 'No photos found' : 'Ops... Something went wrong';

  return (
    <>
      <FilterBar
        toggleChecked={isMinColumnsAmount}
        toggleOnChange={handleColumnsAmount}
      />
      {success && photos.length ? (
        <PhotoView photos={photos} isMinColumnsAmount={isMinColumnsAmount} />
      ) : (
        <Error text={errorMessage} />
      )}

      <Pagination />
    </>
  );
};
