import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import {
    HomeIcon,
    SearchIcon,
    PlusIcon,
    StarIcon,
} from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react"

type Props = {
    title?: string
}

export const Header = ({ title = 'Movie Streamer Clone' }: Props) => {
    const { data: session } = useSession();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <header className="sticky bg-primary w-full top-0 left-0 z-10 ">
                <div className="header-inner max-w-screen-2xl mx-auto flex items-center justify-between px-8 xl:px-0">
                    <div className="logo">
                        <a href="/">
                            <Image
                                src="/images/logo.svg"
                                className="cursor-pointer"
                                width={80}
                                height={80}
                            />
                        </a>
                    </div>

                    {session ?
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
                        : ''}

                    <div className="login-wrap">
                        {session ?
                            <>
                                <div className="flex items-center space-x-6">
                                    <span>
                                        Hello {session.user.name}!
                                    </span>
                                    {session.user.image ?
                                        <img
                                            src={session.user.image}
                                            alt="user"
                                            className="h-12 w-12 rounded-full object-cover"
                                        />
                                        : ''
                                    }
                                    <button className="uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-primary transition duration-200" onClick={() => signOut()}>Log Out</button>
                                </div>
                            </>
                            :
                            <>
                                <button className="uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-primary transition duration-200" onClick={() => signIn()}>Login</button>
                            </>
                        }
                    </div>
                </div>
            </header>
        </>
    )
}
