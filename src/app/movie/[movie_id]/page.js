import { getMovieDetail } from '@/services/movies'
import { convertRuntime, formatDate } from '@/lib/date'
import Score from '@/components/elements/Score'
import { calculateScore } from '@/lib/score'

const media_url = process.env.TMDB_MEDIA_URL

export default async function Page({ params }) {
  const movie_id = params.movie_id
  const detail = await getMovieDetail(`movie/${movie_id}`)

  return (
    <div>
      <div className="w-full h-screen relative">
        <div className="absolute lg:block md:block hidden z-10 inset-0 bg-black opacity-50"></div>
        <img
          src={media_url + detail.backdrop_path}
          className="h-full w-full object-cover object-center"
        />
        <div className="z-20 absolute h-full items-center bottom-0 top-0 px-36 flex gap-12 w-full">
          <img
            src={media_url + detail.poster_path}
            className="w-3/12 rounded-lg shadow-md"
          />
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <div className="flex gap-4 items-center">
                <svg
                  class="w-6 h-6 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="text-paragraph font-semibold">
                  {detail.vote_average.toFixed(1)} / 10
                </span>
              </div>
              <p className="text-paragraph">|</p>
              <p className="text-paragraph font-semibold">
                {convertRuntime(detail.runtime)}
              </p>
              <p className="text-paragraph">|</p>
              <p className="text-paragraph font-semibold">
                At Theater {formatDate(detail.release_date, 'D MMM YYYY')}
              </p>
            </div>
            <h1 className="text-paragraph text-4xl font-bold">
              {detail.title}
            </h1>
            <p className="text-lg text-paragraph italic">"{detail.tagline}"</p>
            <p className="text-paragraph">{detail.overview}</p>
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Score
                  isAbsolute={false}
                  score={calculateScore(detail.vote_average)}
                />
                <p className="text-paragraph font-semibold">
                  User
                  <br />
                  Score
                </p>
              </div>
              <button className="flex justify-center items-center rounded-full hover:bg-primary duration-150 transition-colors text-paragraph font-semibold bg-background p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-list"
                >
                  <line x1="8" x2="21" y1="6" y2="6" />
                  <line x1="8" x2="21" y1="12" y2="12" />
                  <line x1="8" x2="21" y1="18" y2="18" />
                  <line x1="3" x2="3.01" y1="6" y2="6" />
                  <line x1="3" x2="3.01" y1="12" y2="12" />
                  <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>
              </button>
              <button className="flex justify-center items-center rounded-full hover:bg-primary duration-150 transition-colors text-paragraph font-semibold bg-background p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-bookmark-plus"
                >
                  <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
                  <line x1="12" x2="12" y1="7" y2="13" />
                  <line x1="15" x2="9" y1="10" y2="10" />
                </svg>
              </button>
              <button className="flex justify-center items-center rounded-full hover:bg-primary duration-150 transition-colors text-paragraph font-semibold bg-background p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex gap-4">
              {detail.genres.map((genre) => {
                return (
                  <div className="bg-zinc-800 bg-opacity-70 text-paragraph px-2 py-1 rounded-md">
                    {genre.name}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
