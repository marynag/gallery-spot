import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './photoView.module.css';

import { IPhoto } from '@/types/types';

type PhotoViewProps = {
  photos: IPhoto[];
  isMinColumnsAmount: boolean;
};

export const PhotoView = ({ photos, isMinColumnsAmount }: PhotoViewProps) => {
  return (
    <div
      className={styles.photoContainer}
      style={{ columns: isMinColumnsAmount ? 3 : 5 }}
    >
      {photos.map((photo, index) => (
        <div key={index} className={styles.photoItem}>
          <Link href={`/photo/${photo.id}`}>
            <Image
              className={styles.photoImage}
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
