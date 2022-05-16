import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";

type HeaderProps = {
    title?: string
}

export const Header = ({ title = 'Movie Streamer Clone' }: HeaderProps) => {
    const { data: session } = useSession();
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push('/welcome')
    }

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="This is a Movie Streamer Clone which is similar to Disney, built using NextJS, TypeScript and TailwindCSS by Senal Dolage"></meta>
            </Head>

            <header className="sticky bg-primary w-full top-0 left-0 z-10 ">
                <div className="header-inner max-w-screen-xl mx-auto flex items-center justify-between px-8 py-5 md:py-0 flex-wrap md:flex-nowrap">
                    <div className="logo w-full text-center md:w-auto">
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

                                <Link href="/">
                                    <a className="header-link group">
                                        <img src="/images/movie-icon.svg" alt="" className="h-5" />
                                        <span className="span">Movies</span>
                                    </a>
                                </Link>

                                <Link href="/">
                                    <a className="header-link group">
                                        <img src="/images/series-icon.svg" alt="" className="h-5" />
                                        <span className="span">Series</span>
                                    </a>
                                </Link>
                            </nav>
                        </div>
                        : ''}

                    <div className="login-wrap w-full md:w-auto">
                        {session ?
                            <div className="flex items-center justify-center space-x-6">
                                <span>
                                    Hello {session.user.name}!
                                </span>
                                {session.user.image ?
                                    <img
                                        src={session.user.image}
                                        alt="user"
                                        className="h-12 w-12 rounded-full object-cover hidden lg:inline-block"
                                    />
                                    : ''
                                }
                                <button className="uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-primary transition duration-200" onClick={() => handleSignOut()}>
                                    Log Out
                                </button>
                            </div>
                            :
                            <button className="uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-primary transition duration-200" onClick={() => signIn()}>
                                Login
                            </button>
                        }
                    </div>
                </div>
            </header>
        </>
    )
}
