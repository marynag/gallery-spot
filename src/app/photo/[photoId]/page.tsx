import { Suspense } from 'react';

import { getPhoto } from '@/app/actions';
import { PhotoDetails } from '@/components/PhotoDetails';
import { Error } from '@/components/Error';

interface PageProps {
  params: IParams;
}

type IParams = Promise<{ photoId: string }>;

export default async function Page({ params }: PageProps) {
  const { photoId } = await params;

  const { data, success } = await getPhoto({ id: photoId });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] ] items-center justify-items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full">
      <main className="flex flex-col gap-8 row-start-2 items-center  w-full">
        <Suspense fallback={<div>Loading...</div>}>
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