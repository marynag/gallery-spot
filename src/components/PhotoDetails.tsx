import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaPalette, FaHeart, FaUser } from 'react-icons/fa';

import { IPhoto } from '@/types/types';
import Link from 'next/link';
import { formatTimestamp } from './utlis';

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
    <div className="flex flex-col md:flex-row items-center gap-6 border rounded-xl md:p-10 p-6 shadow-xl">
      <div className="xl:w-1/2 w-2/3 flex justify-center">
        <Image
          className="w-auto  object-cover cursor-pointer rounded-lg max-w-full"
          src={photoData.urls.small}
          alt={photoData.description ?? ''}
          width={photoData.width}
          height={photoData.height}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col md:justify-start md:px-0 px-4 justify-center">
        <p>{photoData.description}</p>
        <div>
          {details.map((detail, index) => (
            <div key={index} className="flex gap-2 items-center">
              <span>{detail.icon}</span>
              <span>{detail.title}</span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
        <div className="w-full flex gap-3 flex-wrap justify-center mt-6">
          {photoData?.tags &&
            photoData?.tags.length &&
            photoData?.tags.map((tag, index) => (
              <Link href={`/collection?query=${tag.title}`}>
                <div
                  key={index}
                  className="bg-gray-200 rounded-md px-3 py-1 hover:bg-slate-300 cursor-pointer"
                >
                  {tag.title}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};
