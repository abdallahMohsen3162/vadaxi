// "use client";
import React from 'react'
import "./videos.css";
export default function VideoLoad() {
    console.log("load");
    let arr =[1,2,3,4,5,6];
  return (
    <div className='load gap-2 mt-2 overflow-hidden'>
      {
        arr.map((el, idx) => {
          return(
            <div key={`load-video-${idx}`} style={{animationDelay:`${1/el}s`}}>

            </div>
          )
        })
      }
    </div>
  )
}
