import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import MasterLayout from '../layouts/master-layout'
import { Slider, BrandLogos, MoviesCollection, ShowsCollection } from '../components'

const IndexPage = ({
  popularMovies,
  popularShows,
  topRatedMovies,
  topRatedShows,
}) => {
  const router = useRouter()
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user) {
      router.push('/welcome')
    }
  }, [session])

  return (
    <MasterLayout>
      <main className="relative min-h-screen pb-6 after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <BrandLogos />
        <MoviesCollection movies={popularMovies} title="Popular Movies" />
        <ShowsCollection shows={popularShows} title="Popular Shows" />
        <MoviesCollection movies={topRatedMovies} title="Top Rated Movies" />
        <ShowsCollection shows={topRatedShows} title="Top Rated Shows" />
      </main>
    </MasterLayout>
  )
}

export default IndexPage

export async function getServerSideProps() {
  const tmdbKey = process.env.TMDB_API_KEY;

  const [popularMoviesRes, popularShowRes, topRatedMoviesRes, topRatedShowsRes] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdbKey}&language=en-US&page=1
    `),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${tmdbKey}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=1`
    ),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${tmdbKey}&language=en-US&page=1`
    ),
  ]);

  const [popularMovies, popularShows, topRatedMovies, topRatedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowRes.json(),
      topRatedMoviesRes.json(),
      topRatedShowsRes.json(),
    ]);

  return {
    props: {
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      topRatedMovies: topRatedMovies.results,
      topRatedShows: topRatedShows.results,
    },
  };
}