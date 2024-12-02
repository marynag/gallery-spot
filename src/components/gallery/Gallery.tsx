'use client';

import React, { useState } from 'react';

import { PhotoView } from '../photoView/PhotoView';
import { Pagination } from '../pagination/Pagination';
import { IPhoto } from '@/types/types';
import { Error } from '../error/Error';
import { FilterBar } from '../filterBar/FilterBar';

type Props = {
  photos: IPhoto[];
  success: boolean;
  pages: number | undefined;
};

export const Gallery = ({ photos, success, pages }: Props) => {
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
        <>
          <PhotoView photos={photos} isMinColumnsAmount={isMinColumnsAmount} />{' '}
          <Pagination pages={pages} />
        </>
      ) : (
        <Error text={errorMessage} />
      )}
    </>
  );
};
