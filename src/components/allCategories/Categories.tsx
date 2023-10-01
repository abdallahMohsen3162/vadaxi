import React from 'react'
import "./Categories.css"
import Link from 'next/link';
export default function Categories() {
    let arr = [1,2,3,4,5,6];

  return (
    <div className='container'>
        <div className='categories-container'>
            {
                arr.map((el, idx) => {
                    return(
                        <Link href={""} key={`cat-${idx}`} className='cart col-lg-3 col-md-4 col-sm-4'>
                            <div className='image-cat'>
                                Categorye
                            </div>
                        </Link>
                    )
                })
            }
            
        </div>
    </div>
  )
}
