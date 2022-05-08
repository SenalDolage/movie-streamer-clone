import { ReactNode } from 'react'
import { Header } from '../components'

type Props = {
    children?: ReactNode
}

const DefaultLayout = ({ children }: Props) => (
    <div>
        <Header />
        {children}
    </div>
)

export default DefaultLayout
