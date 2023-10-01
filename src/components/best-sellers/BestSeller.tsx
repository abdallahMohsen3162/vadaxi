"use client";
import React, { useRef } from 'react'
import Slider from '../../../custom_hooks/class1';
import "./bestseller.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
export default function BestSeller() {
    const new_slider = new Slider(200, -200);
    const {ref, scroll_left, scroll_right} = new_slider.useSlider();
    let arr = [1,2,3,4,56,10,7,8,9,7,98]
  return (
    <div className='container' style={{position:"relative"}}>
        <div className='ctrl'>
        <button onClick={scroll_left}><FontAwesomeIcon icon={faChevronLeft}  className='arrow'/>  </button>
        <button onClick={scroll_right}><FontAwesomeIcon icon={faChevronRight}  className='arrow'/>  </button>
        </div>
      <div className='bs-sider' ref={ref}>
            {
                arr.map((el, idx)=>{
                    return(
                        <div className='seller'>
                            Sorted BesSeller items
                        </div>
                    )
                })
            }
      </div>
    </div>
  )
}
