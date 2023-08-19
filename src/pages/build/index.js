import RootFooter from '@/component/sheared/RootFooter'
import RootNav from '@/component/sheared/RootNav'
import React from 'react'

export default function index() {
  return (
      <div className="hero-overlay">index</div>
  )
}
index.getLayout = function (page) {
    return <>
        <RootNav />
        {page}
        <RootFooter />
    </>
}