import { Suspense } from 'react';

import { Gallery } from '@/components/Gallery';
import { getPhotos } from './actions';
import { Loading } from '@/components/Loading';

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
    <div className="grid grid-rows-[20px_1fr_20px] ] justify-items-center min-h-screen p-8 pb-20 md:gap-16  sm:p-20 font-[family-name:var(--font-geist-sans)] w-full">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <Suspense fallback={<Loading />}>
          <Gallery photos={data ?? []} success={success} pages={pages} />
        </Suspense>
      </main>
    </div>
  );
}
