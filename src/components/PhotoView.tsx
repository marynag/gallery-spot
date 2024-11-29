import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IPhoto } from '@/types/types';

type PhotoViewProps = {
  photos: IPhoto[];
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
          <Link href={`/photo/${photo.id}`}>
            <Image
              className="w-full h-auto object-covers cursor-pointer transition ease-in-out delay-150   hover:scale-105 duration-200"
              src={photo.urls.small}
              alt={photo.description ?? ''}
              width={photo.width}
              height={photo.height}
              loading="lazy"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
