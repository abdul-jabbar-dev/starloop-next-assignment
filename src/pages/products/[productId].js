import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav'
import { addToBuild } from '@/state/feature/builder/pcBuilder'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

export default function Index({ product }) {
  const dispatch = useDispatch()
  const { push } = useRouter()
  const {data} = useSession()
  return (
    <div>
      <Head>
        <title>{product.productName}</title>
      </Head>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row gap-x-8">
          <Image alt={product.productName} src={product.image} width="600" height="500" className="max-w-sm rounded-lg  shadow-md shadow-gray-500 " />
          <div>
            <h1 className="text-5xl font-bold">{product.productName}</h1>
            <hr className="my-2" />
            <div className="border-indigo-900" >
              <div className="flex gap-x-16">
                <span className=" font-semibold">
                  Category: {product.category}
                  <br />
                  Rating: {product['individual Rating']}
                </span>
                <span className=" font-semibold">
                  Price: {product.price}
                  <br />
                  Stock: {product['status']}
                </span>
              </div>
              <div className="my-3">
                {
                  Object.keys(product.keyFeatures).map(i => <li key={i} className="flex items-center gap-x-2 text-base "><img width="18" src="https://img.icons8.com/fluency-systems-regular/48/000000/ok--v1.png" alt="ok--v1" />{i} : {product.keyFeatures[i]}</li>)
                }
              </div>
            </div>
            <p className="py-6">{product.description}</p>
           { data?<button onClick={() => {
              if (!data) {
                push('/login')
              }
              dispatch(addToBuild(product))
              push('/build')
            }} className="btn btn-primary">Add to build</button>: <Link href={'/login'} className='text-center btn my-2 text-neutral'> Login First</Link>}
          </div>
        </div>

      </div>
    </div>
  )
}
export async function getStaticProps({ params }) {
  try {
    if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
      return {
        props: {
          products: []
        },
      };
    }
    const res = await fetch(process.env.URL + `/api/products/${params.productId}`);
    const product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export const getStaticPaths = async () => {
  try {

    if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
      return { paths: [], fallback: false };
    }
    const res = await fetch(process.env.URL + '/api/products');
    const products = await res.json();

    const paths = products.map(product => ({
      params: {
        productId: product._id,
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [], fallback: false
    };
  }
};

Index.getLayout = function (page) {
  return <div className="min-h-screen flex flex-col justify-between ">
    <RootNav />
    <div className="flex-grow  h-full  hero-overlay">
      {page}
    </div>
    <RootFooter />
  </div>
}