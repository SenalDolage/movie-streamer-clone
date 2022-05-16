import { Show } from '../../interfaces'
import { ShowThumbnail } from '../show-thumbnail/show-thumbnail'

type ShowsCollectionProps = {
    shows: Show[];
    title: string;
}

export const ShowsCollection = ({ shows, title }: ShowsCollectionProps) => {
    return (
        <section className="collection relative flex flex-col space-y-2 py-10 px-8 max-w-screen-xl mx-auto">
            <h2 className="text-base font-semibold uppercase">{title}</h2>
            <div className="collection-content flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
                {shows.map((result) => (
                    <ShowThumbnail key={result?.id} show={result} />
                ))}
            </div>
        </section>
    )
}