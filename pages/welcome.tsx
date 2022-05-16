import Image from "next/image";

import DefaultLayout from '../layouts/default-layout'

const WelcomePage = () => (
    <DefaultLayout headerTitle="Movie Streamer Clone | Login">
        <div className="relative min-h-[calc(100vh-72px)]">
            <Image
                src="/images/hero-background.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="flex justify-center items-center">
            <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">
                <Image
                    src="/images/cta-logo-one.svg"
                    width="600"
                    height="150"
                    objectFit="contain"
                />
                <div className="uppercase text-xl  font-extrabold py-4 px-6 w-full text-center">
                    Get all there
                </div>
                <p className="text-xs text-center ">
                    Get Premier Access to Raya and the Last Dragon for an additional fee
                    with a Disney+ subscription. As of 03/26/21, the price of Disney+
                    and The Disney Bundle will increase by $
                </p>
                <Image
                    src="/images/cta-logo-two.png"
                    width="600"
                    height="70"
                    objectFit="contain"
                />
            </div>
        </div>
    </DefaultLayout>
)


export default WelcomePage
