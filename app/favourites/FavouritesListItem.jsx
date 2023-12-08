'use client';

import Link from 'next/link';

import Flag from 'react-world-flags';
import {
  TbBrandBooking,
  TbWorldLatitude,
  TbWorldLongitude,
} from 'react-icons/tb';

export default function FavouritesListItem({
  country_code,
  name,
  latitude,
  longitude,
  admin1,
}) {
  return (
    <li className="flex items-center justify-between gap-x-6 px-2 py-5 duration-300 hover:shadow-lg">
      <Link
        href={`/favourites/${name}?lat=${latitude}&long=${longitude}`}
        className="flex min-w-0 grow items-center gap-8"
      >
        <Flag
          as="image"
          code={country_code}
          className="w-16 flex-none rounded"
        />
        <div className="min-w-0 basis-48">
          <p className="text-sm font-semibold leading-6">{name}</p>
          <p className="mt-1 truncate text-xs leading-5 text-slate-600">
            {admin1}
          </p>
        </div>
        <div className="hidden shrink-0 grow sm:flex sm:flex-col sm:items-center">
          <p className="flex items-center gap-2 text-sm leading-6">
            <TbWorldLatitude className="stroke-slate-500" />
            <span>{latitude}&deg;</span>
          </p>
          <p className="flex items-center gap-2 text-sm leading-6">
            <TbWorldLongitude className="stroke-slate-500" />
            <span>{longitude}&deg;</span>
          </p>
        </div>
      </Link>

      <a
        href={`https://www.booking.com/searchresults.html?ss=${name}`}
        target="_blank"
      >
        <TbBrandBooking className="fill-booking stroke-white" size={48} />
      </a>
    </li>
  );
}
