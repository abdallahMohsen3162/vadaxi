import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Largemenu() {
  const arr = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
  return (
    <div className='d-flex' style={{width:"80vw"}}>
        <div className='side-bar'>
          {
            arr.map((el, idx) => {
              return(
                <Link href={""} className='text-dark border-1' key={idx}>
                Category {el} 
                
                </Link>
              )
            })
          }
        </div>

        <div className='row'>
            
        <Link href={""} className='p-3'>
                    Link number 
         </Link>
            
        <Link href={""} className='p-3'>
                    Link number 
         </Link>
            
        <Link href={""} className='p-3'>
                    Link number 
         </Link>
            
        </div>
    </div>
  )
}
