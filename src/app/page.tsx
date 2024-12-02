import styles from '@/app/common.module.css';

import { Suspense } from 'react';

import { Gallery } from '@/components/gallery/Gallery';
import { getPhotos } from './actions';
import { Loading } from '@/components/loading/Loading';

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;

  const { data, success, pages } = await getPhotos({ page, query });

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <Suspense fallback={<Loading />}>
          <Gallery photos={data ?? []} success={success} pages={pages} />
        </Suspense>
      </main>
    </div>
  );
}
