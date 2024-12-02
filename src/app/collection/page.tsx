import styles from '@/app/common.module.css';

import { Suspense } from 'react';

import { getCollection } from '../actions';
import { ICollection } from '@/types/types';
import { Gallery } from '@/components/gallery/Gallery';
import { Loading } from '@/components/loading/Loading';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;

  const { data, success, pages } = await getCollection({ page, query });

  const formattedData =
    success &&
    data &&
    data.length &&
    data.map((photo: ICollection) => {
      return photo.cover_photo;
    });

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <Suspense fallback={<Loading />}>
          <Gallery photos={formattedData} success={success} pages={pages} />
        </Suspense>
      </main>
    </div>
  );
}
