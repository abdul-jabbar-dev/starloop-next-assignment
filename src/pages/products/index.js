import Products from '@/component/product/Products'
import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav'
import Head from 'next/head';
export default function index({ products }) {
    return (
        <div className="hero-overlay">
            <Head>
                <title>Products</title>
            </Head>
            <div className="  container mx-auto flex flex-wrap gap-5 justify-center items-center py-6">
                {
                    products.map(product => <Products key={product._id} product={product} />)
                }
            </div>
        </div>
    )
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

index.getLayout = function (page) {
    return <>
        <RootNav />
        {page}
        <RootFooter />
    </>
}