import MasterLayout from '../layouts/master-layout'
import { HeroSlider, BrandLogos, MoviesCollection, ShowsCollection } from '../components'
import { getSession } from 'next-auth/react'

const IndexPage = ({
  popularMovies,
  popularShows,
  topRatedMovies,
  topRatedShows,
}) => {
  return (
    <MasterLayout headerTitle="Movie Streamer Clone | Home">
      <HeroSlider />
      <BrandLogos />
      <MoviesCollection movies={popularMovies} title="Popular Movies" />
      <ShowsCollection shows={popularShows} title="Popular Shows" />
      <MoviesCollection movies={topRatedMovies} title="Top Rated Movies" />
      <ShowsCollection shows={topRatedShows} title="Top Rated Shows" />
    </MasterLayout>
  )
}

export default IndexPage

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const tmdbBaseUrl = process.env.TMDB_API_BASE_URL;
  const tmdbKey = process.env.TMDB_API_KEY;

  const [popularMoviesRes, popularShowRes, topRatedMoviesRes, topRatedShowsRes] = await Promise.all([
    fetch(`${tmdbBaseUrl}/movie/popular?api_key=${tmdbKey}&language=en-US&page=1
    `),
    fetch(
      `${tmdbBaseUrl}/tv/popular?api_key=${tmdbKey}&language=en-US&page=1`
    ),
    fetch(
      `${tmdbBaseUrl}/movie/top_rated?api_key=${tmdbKey}&language=en-US&page=1`
    ),
    fetch(
      `${tmdbBaseUrl}/tv/top_rated?api_key=${tmdbKey}&language=en-US&page=1`
    ),
  ]);

  const [popularMovies, popularShows, topRatedMovies, topRatedShows] =
    await Promise.all([
      popularMoviesRes.json(),
      popularShowRes.json(),
      topRatedMoviesRes.json(),
      topRatedShowsRes.json(),
    ]);

  if (!session) {
    return {
      redirect: {
        destination: `/welcome`,
        permanent: false
      }
    }
  }

  return {
    props: {
      popularMovies: popularMovies.results,
      popularShows: popularShows.results,
      topRatedMovies: topRatedMovies.results,
      topRatedShows: topRatedShows.results,
    },
  };
}