
import Hero from '@/component/Home/Hero'
import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav' 
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <Hero/>
      <div className="hero-overlay">asdfasdf</div>
    </main>
  )
}
Home.getLayout = function (page) {
  return <>
    <RootNav />
    {page}
    <RootFooter/>
  </>
}