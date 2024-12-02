import styles from '@/app/common.module.css';

import { Suspense } from 'react';

import { getPhoto } from '@/app/actions';
import { PhotoDetails } from '@/components/photoDetails/PhotoDetails';
import { Error } from '@/components/error/Error';
import { GoBack } from '@/components/goBack/GoBack';
import { Loading } from '@/components/loading/Loading';

interface PageProps {
  params: IParams;
}

type IParams = Promise<{ photoId: string }>;

export default async function Page({ params }: PageProps) {
  const { photoId } = await params;

  const { data, success } = await getPhoto({ id: photoId });

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <GoBack />
        <Suspense fallback={<Loading />}>
          {success && !data?.length ? (
            <PhotoDetails photoData={data} />
          ) : (
            <Error />
          )}
        </Suspense>
      </main>
    </div>
  );
}
