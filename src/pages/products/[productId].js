import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav'
import Image from 'next/image'
import React from 'react'

export default function productDetail({ product }) {
  console.log(product)
  return (
    <div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row gap-x-8">
          <Image alt={product.productName} src={product.image} width="600" height="500" className="max-w-sm rounded-lg  shadow-md shadow-gray-500 " />
          <div>
            <h1 className="text-5xl font-bold">{product.productName}</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:3000/api/products/' + params.productId)
  const product = await res.json()
  return {
    props: {
      product,
    },
  }
}
export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const mypro = await res.json()
  const paths = mypro.map(iproduct => ({
    params: {
      productId: iproduct._id
    }
  }))
  return {
    paths,
    fallback: false
  }
}
productDetail.getLayout = function (page) {
  return <div className="min-h-screen flex flex-col justify-between ">
    <RootNav />
    <div className="flex-grow  h-full  hero-overlay">
      {page}
    </div>
    <RootFooter />
  </div>
}