import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaPalette, FaHeart, FaUser } from 'react-icons/fa';
import styles from './PhotoDetails.module.css';

import { IPhoto } from '@/types/types';
import Link from 'next/link';
import { formatTimestamp } from '../utlis';

type PhotoDetailsProps = {
  photoData: IPhoto;
};

export const PhotoDetails = ({ photoData }: PhotoDetailsProps) => {
  const details = [
    {
      icon: <FaCalendarAlt />,
      title: 'Published at',
      value: formatTimestamp(photoData.created_at),
    },
    {
      icon: <FaPalette />,
      title: 'Color',
      value: photoData.color,
    },

    {
      icon: <FaHeart />,
      title: 'Likes',
      value: photoData.likes,
    },
    {
      icon: <FaUser />,
      title: 'published by',
      value: photoData.user.name,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={photoData.urls.small}
          alt={photoData.description ?? ''}
          width={photoData.width}
          height={photoData.height}
          loading="lazy"
        />
      </div>
      <div className={styles.detailsContainer}>
        <p>{photoData.description}</p>
        <div>
          {details.map((detail, index) => (
            <div key={index} className={styles.detailItem}>
              <span>{detail.icon}</span>
              <span>{detail.title}</span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.tagsContainer}>
          {photoData?.tags &&
            photoData?.tags.length &&
            photoData?.tags.map((tag, index) => (
              <Link href={`/collection?query=${tag.title}`} key={index}>
                <div className={styles.tag}>{tag.title}</div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
