import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MasterLayout from '../layouts/master-layout'
import { Slider, BrandLogos } from '../components'

const IndexPage = () => {
  const router = useRouter()
  const { data: session } = useSession();

  useEffect(() => {
    if (!session?.user) {
      router.push('/welcome')
    }
  }, [session])

  return (
    <MasterLayout>
      <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
        <Slider />
        <BrandLogos />
      </main>
    </MasterLayout>
  )
}

export default IndexPage
