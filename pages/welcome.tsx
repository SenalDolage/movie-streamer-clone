import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import DefaultLayout from '../layouts/default-layout'

const WelcomePage = () => {
    return (
        <DefaultLayout>
            <h1>Welcome!</h1>
        </DefaultLayout>
    )
}

export default WelcomePage
