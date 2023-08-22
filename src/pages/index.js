
import Hero from '@/component/Home/Hero'
import ListProduct from '@/component/Home/ListProduct'
import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav' 
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  return (
    <main className={`${inter.className}`}>
      <Hero/>
      <br/>
      <ListProduct products={products} />
    </main>
  )
}
Home.getLayout = function (page) {
  return <>
    <RootNav />
    {page}
    <RootFooter />
  </>
}


export async function getStaticProps() {
  try { 
    // if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
    //     return {
    //         props: { products: [] },
    //     };
    // }
    const res = await fetch(process.env.URL + `/api/products`);
    const products = await res.json();
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: { products: [] },
    };
  }
}