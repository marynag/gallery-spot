import { Suspense } from 'react';

import { getPhoto } from '@/app/actions';
import { PhotoDetails } from '@/components/PhotoDetails';
import { Error } from '@/components/Error';
import { GoBack } from '@/components/GoBack';
import { Loading } from '@/components/Loading';

interface PageProps {
  params: IParams;
}

type IParams = Promise<{ photoId: string }>;

export default async function Page({ params }: PageProps) {
  const { photoId } = await params;

  const { data, success } = await getPhoto({ id: photoId });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] ] justify-items-center min-h-screen p-8 pb-20 md:gap-16  sm:p-20 font-[family-name:var(--font-geist-sans)] w-full">
      <main className="flex flex-col gap-8 row-start-2 items-center  w-full">
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
