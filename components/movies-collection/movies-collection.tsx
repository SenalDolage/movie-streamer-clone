import { Movie } from '../../interfaces';
import { MovieThumbnail } from '../movie-thumbnail/movie-thumbnail'

type MoviesCollectionProps = {
    movies: Movie[];
    title: string;
}

export const MoviesCollection = ({ movies, title }: MoviesCollectionProps) => {
    return (
        <section className="collection relative flex flex-col space-y-2 py-10 px-8 max-w-screen-xl mx-auto">
            <h2 className="text-base font-semibold uppercase">{title}</h2>
            <div className="collection-content flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
                {movies.map((result) => (
                    <MovieThumbnail key={result.id} movie={result} />
                ))}
            </div>
        </section>
    )
}