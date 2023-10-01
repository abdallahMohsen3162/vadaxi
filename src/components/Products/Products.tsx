"use client"
import React from 'react'
import Product from './Product'
export default function Products() {
  const arr = [1,2,3,4,5];
  for(let i=0;i<10;i++) arr.push(i+10)
  return (
    <div className='container'>
     
      <div className='row gy-5'>
      {
        arr.map((el, idx) => {
          
          return(
            <div 
            key={`${idx}-product-i`} 
            className='col-lg-3 col-md-6 col-sm-12'>
              < Product />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}
