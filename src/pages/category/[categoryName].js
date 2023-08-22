import Products from '@/component/product/Products'
import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav'
import React from 'react'

export default function Index({ product }) { 

  return (
    <div className="container mx-auto">
      <div className="  container mx-auto flex flex-wrap gap-5 justify-center items-center py-6">
        {
          product.map(product => <Products key={product._id} product={product} />)
        }
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  try {
    // if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
    //   return {
    //     props: {
    //       products: []
    //     },
    //   };
    // }
    const res = await fetch(process.env.URL + `/api/products?categoryName=` + params.categoryName);
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

    // if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
    //   return { paths: [], fallback: false };
    // }
    const res = await fetch(process.env.URL + '/api/products');
    const products = await res.json();

    const paths = products.map(product => ({
      params: {
        categoryName: (product.category).toLowerCase(),
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