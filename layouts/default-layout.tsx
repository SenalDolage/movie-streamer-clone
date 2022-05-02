import { ReactNode } from 'react'
import { Header, Footer } from '../components'

type Props = {
    children?: ReactNode
}

const DefaultLayout = ({ children }: Props) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
)

export default DefaultLayout
