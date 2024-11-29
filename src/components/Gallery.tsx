'use client';
import React, { useState } from 'react';
import { IGallery } from '@/types/types';

import { PhotoView } from './PhotoView';

type Props = {
  photos: IGallery[];
};

export const Gallery = async ({ photos }: Props) => {
  const [isMinColumnsAmount, setMinColumnsAmount] = useState(true);

  return (
    <>
      <PhotoView photos={photos} isMinColumnsAmount={isMinColumnsAmount} />
    </>
  );
};
