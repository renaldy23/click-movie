import { formatDate } from '@/lib/date';
import Link from 'next/link';

const media_url = process.env.TMDB_MEDIA_URL

const PopularMovieCard = ({movie}) => {
    return (
        <div className="h-full relative flex">
            <div className='absolute lg:block md:block hidden z-10 inset-0 bg-black opacity-50'></div>
            <img
                src={media_url + movie.backdrop_path}
                className="h-full w-full object-cover object-center"
            />
            <div className="z-20 absolute h-full bottom-0 top-0 px-36 flex items-start justify-center flex-col gap-4 w-1/2 ">
                <div className="flex justify-evenly gap-4 divide-x-2">
                    <div className='flex gap-4 items-center'>
                        <svg class="w-6 h-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span className='text-paragraph font-semibold'>{movie.vote_average} / 10</span>
                    </div>
                    <div>
                        <p className='text-paragraph pl-4'>On Theater at <span className='font-semibold'>{formatDate(movie.release_date, "D MMM YYYY")}</span></p>
                    </div>
                </div>
                <h1 className="text-left text-5xl font-bold text-paragraph">{movie.title}</h1>
                <p className='text-paragraph font-semibold text-left'>{movie.overview}</p>
                <Link href={`/movie/${movie.id}`} className='bg-zinc-600 bg-opacity-75 px-4 py-2 rounded-md'>
                    <span className="flex gap-2">
                        <svg class="w-6 h-6 text-paragraph" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9h2v5m-2 0h4M9.408 5.5h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span className='text-paragraph'>More Info</span>
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default PopularMovieCard;
