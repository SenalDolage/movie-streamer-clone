import { ReactNode } from 'react'
import { Header, Footer } from '../components'

type Props = {
    children?: ReactNode
}

const MasterLayout = ({ children }: Props) => (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
)

export default MasterLayout
