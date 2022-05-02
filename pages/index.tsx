import Link from 'next/link'
import MasterLayout from '../layouts/master-layout'

const IndexPage = () => (
  <MasterLayout>
    <h1>Hello Next.js 👋 !!!</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </MasterLayout>
)

export default IndexPage
