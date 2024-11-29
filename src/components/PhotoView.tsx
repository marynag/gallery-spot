import React from 'react';
import Image from 'next/image';

import { IGallery } from '@/types/types';

type PhotoViewProps = {
  photos: IGallery[];
  isMinColumnsAmount: boolean;
};

export const PhotoView = ({ photos, isMinColumnsAmount }: PhotoViewProps) => {
  return (
    <div
      className="gap-4 self-center"
      style={{ columns: isMinColumnsAmount ? 3 : 5 }}
    >
      {photos.map((photo, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <Image
            className="w-full h-auto object-covers"
            src={photo.urls.small}
            alt={photo.description ?? ''}
            width={photo.width}
            height={photo.height}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};
