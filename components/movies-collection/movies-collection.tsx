type MoviesCollectionProps = {
    movies: [];
    title: string;
}

export const MoviesCollection = ({ movies, title }: MoviesCollectionProps) => {
    return (
        <section className="relative flex flex-col space-y-2 my-10 px-8 max-w-screen-xl mx-auto">
            <h2 className="font-semibold">{title}</h2>
            <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
                {/* {results.map((result) => (
            <MovieThumbnail key={result.id} result={result} />
          ))} */}
            </div>
        </section>
    )
}