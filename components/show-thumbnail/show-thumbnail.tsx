import Image from "next/image"
import { useRouter } from "next/router";

import { Show } from "../../interfaces"

type ShowThumbnailProps = {
    show: Show;
}

export const ShowThumbnail = ({ show }: ShowThumbnailProps) => {
    const BASE_URL = `https://image.tmdb.org/t/p/w500`;
    const router = useRouter();

    return (
        <div
            className="movie-thumbnail flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-2 border-white border-opacity-10 hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
            onClick={() => router.push(`/show/${show.id}`)}
        >
            <Image
                src={
                    `${BASE_URL}${show.backdrop_path || show.poster_path}` ||
                    `${BASE_URL}${show.poster_path}`
                }
                width={330}
                height={210}
                objectFit="cover"
                className="rounded-lg"
            />
        </div>
    )
}