import { Suspense } from 'react';

import { Gallery } from '@/components/Gallery';
import { getCollection } from '../actions';
import { ICollection } from '@/types/types';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const page = Number(searchParams?.page) || 1;

  const { data, success } = await getCollection({ page, query });

  const formattedData =
    success &&
    data &&
    data.length &&
    data.map((photo: ICollection) => {
      return photo.cover_photo;
    });

  return (
    <div className="grid grid-rows-[20px_1fr_20px] ] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] w-full">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Gallery photos={formattedData} success={success} />
        </Suspense>
      </main>
    </div>
  );
}
