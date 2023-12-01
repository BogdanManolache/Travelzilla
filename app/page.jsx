import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="hero-image relative h-full w-full bg-cover bg-center ">
      <div className="absolute left-1/2 top-28 w-1/2 -translate-x-1/2 text-center md:top-14">
        <h1 className=" text-5xl font-bold leading-tight text-slate-50">
          Find the perfect destination and go!
        </h1>
      </div>
      <Link
        href="/search"
        className="absolute bottom-0 left-1/2 mb-4 -translate-x-1/2 border-2 border-slate-50 bg-transparent px-4 py-2 text-sm font-bold uppercase tracking-wide text-slate-50 duration-300 hover:bg-slate-50 hover:text-slate-800"
      >
        Search Now
      </Link>
    </div>
  );
}
