import React from 'react'
import "./example.css"
export default function Example() {
  return (
    <div className='container example'>
        <div className='row gx-2'>
            <div className='col-lg-6 col-sm-12 bucket' style={{height:"600px"}}>
                    <div className='big-ex'>Category</div>
            </div>
            <div className='col-lg-6 col-sm-12' style={{height:"600px"}}>
                <div className='small-ex'>Category</div>
                
                <div className='small-ex'>Category</div>
            </div>
        </div>
    </div>
  )
} 
