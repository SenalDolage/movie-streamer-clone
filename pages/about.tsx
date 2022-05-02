import Link from 'next/link'
import MasterLayout from '../layouts/master-layout'

const AboutPage = () => (
  <MasterLayout>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </MasterLayout>
)

export default AboutPage
