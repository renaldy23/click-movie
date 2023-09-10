import NowPlaying from '@/components/layouts/NowPlaying'
import PopularMovie from '@/components/layouts/PopularMovie'
import Link from 'next/link'

export default function Page() {
  return (
    <main className="flex h-screen flex-col gap-8 justify-between">
      <PopularMovie />
      <section id="popular_movie" className="px-36 pb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-paragraph text-2xl font-bold mb-4">
            Top 10 Movie Now Playing
          </h1>
          <Link href={`movie/nowplaying`}>
            <p className="text-paragraph flex items-center">
              Discover More{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </p>
          </Link>
        </div>
        <NowPlaying />
      </section>
    </main>
  )
}
