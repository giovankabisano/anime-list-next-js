import Head from 'next/head'
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import Image from 'next/image';
import animeDetail from '../api/animeDetail';
import { useQuery } from '@apollo/client';
import { useMemo } from 'react';

/**
 * The detail page to see the anime information
 */
export default function Anime() {
  const router = useRouter();
  const animeId = router.query.anime;

  const { data } = useQuery(animeDetail, {
    variables: {
      id: animeId,
    },
    skip: !animeId,
    fetchPolicy: 'cache-first'
  });

  console.log(data)
  const pageData = useMemo(() => data?.Media, [data]);

  return (
    <>
      <div class='flex w-full h-500'>
        <img
          src={pageData?.bannerImage}
          alt={pageData?.title?.userPreferred}
        />
      </div>
      <div class="relative flex min-h-screen flex-col mt-2 overflow-hidden bg-gray-50">
        <div class="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 mx-auto w-4/6 sm:rounded-lg sm:px-10">
          <div>
            <h2 className='m-2'>{pageData?.title?.userPreferred}</h2>
            <p>{pageData?.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
