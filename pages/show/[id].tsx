import { getSession } from 'next-auth/react';
import Image from "next/image"
import { useState } from 'react';
import { PlusIcon, XIcon } from "@heroicons/react/solid";
import ReactPlayer from "react-player/lazy";

import { Show } from '../../interfaces';
import MasterLayout from '../../layouts/master-layout'

type ShowDetailPageProps = {
    show: Show
}

const ShowDetailPage = ({ show }: ShowDetailPageProps) => {
    const BASE_URL = `https://image.tmdb.org/t/p/w500`;
    const [showPlayer, setShowPlayer] = useState(false);

    const index = show.videos.results.findIndex(
        (element) => element.type === "Trailer"
    );

    return (
        <MasterLayout headerTitle={show.title}>
            <div className="relative">
                <div className="relative min-h-[calc(100vh-70px)]">
                    <Image
                        src={
                            `${BASE_URL}${show.backdrop_path || show.poster_path}`
                        }
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50 max-w-screen-xl mx-auto px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        {show.title || show.original_name}
                    </h1>
                    <div className="flex items-center space-x-3 md:space-x-5">
                        <button className="text-primary text-xs md:text-base bg-white text-black flex items-center justify-center py-2.5 px-6 rounded opacity-60" disabled>
                            <img
                                src="/images/play-icon-black.svg"
                                alt=""
                                className="h-6 md:h-8"
                            />
                            <span className="uppercase font-medium tracking-wide">
                                Play
                            </span>
                        </button>

                        {show.videos?.results[index]?.key ?
                            <button
                                className="text-xs md:text-base bg-black/30 text-white border border-white flex items-center justify-center py-2.5 px-6 rounded transition-colors duration-100 ease-in hover:bg-primary hover:border-primary"
                                onClick={() => setShowPlayer(true)}
                            >
                                <img
                                    src="/images/play-icon-white.svg"
                                    alt=""
                                    className="h-6 md:h-8"
                                />
                                <span className="uppercase font-medium tracking-wide">
                                    Trailer
                                </span>
                            </button>
                            :
                            ''
                        }

                        <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                            <PlusIcon className="h-6" />
                        </div>

                        <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                            <img src="/images/group-icon.svg" alt="" />
                        </div>
                    </div>

                    <p className="text-xs md:text-sm">
                        {show.release_date || show.first_air_date} •{" "}
                        {Math.floor(show.runtime / 60)}h {show.runtime % 60}m •{" "}
                        {show.genres.map((genre) => genre.name + " ")}{" "}
                    </p>
                    <h4 className="text-sm md:text-lg max-w-4xl">{show.overview}</h4>
                </div>

                {/* Bg Overlay */}
                {showPlayer && (
                    <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
                )}

                <div
                    className={`absolute left-2/4 top-2/4 w-full max-w-3xl mx-auto px-3 rounded overflow-hidden transition duration-1000 ${showPlayer ? "opacity-100 z-50 block" : "opacity-0 hidden"}`}
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    <div className="bg-black text-[#f9f9f9] mb-2">
                        <div
                            className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg ml-auto bg-primary"
                            onClick={() => setShowPlayer(false)}
                        >
                            <XIcon className="h-5" />
                        </div>
                    </div>
                    <div className="relative pt-[56.25%]">
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${show.videos?.results[index]?.key}`}
                            width="100%"
                            height="100%"
                            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
                            controls={true}
                            playing={showPlayer}
                        />
                    </div>
                </div>
            </div>
        </MasterLayout>
    )
}

export default ShowDetailPage

export async function getServerSideProps(context) {
    const session = await getSession(context);
    const { id } = context.query;
    const tmdbBaseUrl = process.env.TMDB_API_BASE_URL;
    const tmdbKey = process.env.TMDB_API_KEY;

    const request = await fetch(`${tmdbBaseUrl}/tv/${id}?api_key=${tmdbKey}&language=en-US&append_to_response=videos,images`).then(response => response.json());

    return {
        props: {
            session,
            show: request
        }
    }
}
