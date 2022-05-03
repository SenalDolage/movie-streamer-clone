import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import {
    HomeIcon,
    SearchIcon,
    PlusIcon,
    StarIcon,
} from "@heroicons/react/solid";

type Props = {
    title?: string
}

export const Header = ({ title = 'Movie Streamer Clone' }: Props) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <header className="sticky bg-primary w-full h-20 top-0 left-0 z-10 flex items-center px-10 md:px-12 ">
            <Image
                src="/images/logo.svg"
                className="cursor-pointer"
                width={80}
                height={80}
            />

            <div className="nav-wrap">
                <nav className="hidden ml-10 md:flex items-center space-x-6">
                    <Link href="/">
                        <a className="header-link group">
                            <HomeIcon className="h-4" />
                            <span className="span">Home</span>
                        </a>
                    </Link>

                    <Link href="/a">
                        <a className="header-link group">
                            <SearchIcon className="h-4" />
                            <span className="span">Search</span>
                        </a>
                    </Link>

                    <Link href="/aa">
                        <a className="header-link group">
                            <PlusIcon className="h-4" />
                            <span className="span">Watchlist</span>
                        </a>
                    </Link>

                    <Link href="/aa">
                        <a className="header-link group">
                            <StarIcon className="h-4" />
                            <span className="span">Originals</span>
                        </a>
                    </Link>

                    <Link href="/de">
                        <a className="header-link group">
                            <img src="/images/movie-icon.svg" alt="" className="h-5" />
                            <span className="span">Movies</span>
                        </a>
                    </Link>

                    <Link href="/de">
                        <a className="header-link group">
                            <img src="/images/series-icon.svg" alt="" className="h-5" />
                            <span className="span">Series</span>
                        </a>
                    </Link>
                </nav>
            </div>

            <div className="login-wrap">
                <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-primary transition duration-200">Login</button>
            </div>
        </header>
    </>
)
