import { ReactNode } from 'react'

import { Header, Footer } from '../components'

type Props = {
    children?: ReactNode;
    headerTitle?: string;
}

const MasterLayout = ({ children, headerTitle }: Props) => (
    <div className="master-layout">
        <Header title={headerTitle} />
        <main className="relative after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
            {children}
        </main>
        <Footer />
    </div>
)

export default MasterLayout
