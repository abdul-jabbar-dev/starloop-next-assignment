import Products from '@/component/product/Products'
import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav'
import React from 'react'

export default function index({ products }) {
    console.log(products)
    return (
       <div className="hero-overlay">
            <div className="  container mx-auto flex flex-wrap gap-5 justify-center items-center py-6">
                {
                    products.map(product => <Products key={product._id} product={product} />)
                }
            </div>
       </div>
    )
}

index.getLayout = function (page) {
    return <>
        <RootNav />
        {page}
        <RootFooter />
    </>
}
export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/products')
    const products = await res.json()

    return {
        props: {
            products,
        },
    }
}