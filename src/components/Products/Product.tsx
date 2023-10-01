"use client";
import "./product.css"
import React, { useState } from 'react'

export default function Product() {
    const [state, setState] = useState(false);
  return (
    <div className="card">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="basic-image">

        </div>
        <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-dark" onClick={()=>setState(!state)}>Buy</button>
        </div>
        {
            state?(
                <div className="row text-center p-3 justify-content-between">
                    <input type="number" className="form col-6" placeholder="Amount"/>
                    <button className="col-4 btn btn-dark rounded">card</button>
                </div>
            ):(
                <></>
            )
        }
    </div>
  )
}
