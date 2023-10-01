"use client";
import React from 'react'
import Link from 'next/link'
export default function According() {
    let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Category 1
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body d-flex flex-column">
                    {
                        arr.map((el, idx) => {
                            return(
                                <Link key={`${idx}-1`} href={"/"}>go to link number {el}</Link>
                            )
                        })
                    }
            </div>
            </div>
        </div>
    </div>


    <div className="accordion accordion-flush" id="accordionFlushExample2">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne2" aria-expanded="false" aria-controls="flush-collapseOne2">
            Category 2
            </button>
            </h2>
            <div id="flush-collapseOne2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample2">
            <div className="accordion-body d-flex flex-column">

                        {
                        arr.map((el, idx) => {
                            return(
                                <Link key={`${idx}-2`} href={"/"}>go to link number {el}</Link>
                            )
                        })
                    }
                
                </div>
            </div>
        </div>
    </div>


    <div className="accordion accordion-flush" id="accordionFlushExample3">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne3" aria-expanded="false" aria-controls="flush-collapseOne3">
            Category 3
            </button>
            </h2>
            <div id="flush-collapseOne3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample3">
            <div className="accordion-body d-flex flex-column">
            {
                        arr.map((el, idx) => {
                            return(
                                <Link key={`${idx}-3`} href={"/"}>go to link number {el}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
