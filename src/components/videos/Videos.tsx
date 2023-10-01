"use client"

import React, { useState } from 'react'
import './videos.css'
import Slider from '../../../custom_hooks/class1'
import './videos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import VideoLoad from './VideoLoad'

const Videos = () => {
  const new_slider = new Slider(200,-200);
  let arr = [1,2,3,4,5,6,7,8,9,10,11,12,54,654,654,654,456,456];
  const {ref, scroll_left, scroll_right} = new_slider.useSlider();
  const [flag , setFlag] = useState(true);
return (
  <div className='mt-2 container position-relative'>

      

      {
        flag?(
          <>
            <span className='arrow-container' onClick={scroll_left}>
              <FontAwesomeIcon icon={faChevronLeft}  className='arrow'/>  
          </span>

          <span className='arrow-container' onClick={scroll_right}>
              <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
          </span>
          
          <div className='video-list gap-2 overflow-hidden' ref={ref}>
          {
              arr.map((el, idx) => {
                  return(
                      <div className='video' key={idx+100} style={{cursor:"pointer"}}>
                           video number {el}
                      </div>
                  )
              })
          }
          
      </div>
          </>
        ):(
            <VideoLoad/>
        )
      }

     
 

  </div>
)
}


export default Videos;