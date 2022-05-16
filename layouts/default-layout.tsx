import { ReactNode } from 'react'
import { Header } from '../components'

type Props = {
    children?: ReactNode;
    headerTitle?: string;
}

const DefaultLayout = ({ children, headerTitle }: Props) => (
    <div>
        <Header title={headerTitle} />
        {children}
    </div>
)

export default DefaultLayout
