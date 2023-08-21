import Products from '@/component/product/Products'
import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav'
import React from 'react'

export default function Index({ products }) {
     
    return (
        <div className="container mx-auto">
            <div className="  container mx-auto flex flex-wrap gap-5 justify-center items-center py-6">
                {
                    products.map(product => <Products key={product._id} product={product} />)
                }
            </div>
        </div>
    )
} 

export const getServerSideProps = async (context) => {
    const { adtobuild } = context.query
    try {
        if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
            return {
                props: { products: [] },
            };
        }
        const res = await fetch(process.env.URL + '/api/products?categoryName=' + adtobuild);
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
Index.getLayout = function (page) {
    return <div className="min-h-screen flex flex-col justify-between ">
        <RootNav />
        <div className="flex-grow  h-full  hero-overlay">
            {page}
        </div>
        <RootFooter />
    </div>
}