"use client"
import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faCircleXmark, faHeart, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import According from "./smallscreen-menu/small";
import Largemenu from "./largescreen-menu/large";


const Navbar = ({children} : {children:React.ReactNode}) => {
    const sider = useRef<HTMLDivElement|null>(null);
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap");
        
      }, [])
    function open(){
        sider.current?.classList.add('sider-open')
    }

    function close(){
        sider.current?.classList.remove('sider-open')
    }
    
    return(
        <>
            <div className="sticky-top navbar container-fluid">
            <div className={`sider`} ref={sider}>
                        <div className="d-flex justify-content-between fs-1">
                            <Link className="text-light" href={"/"}>Logo</Link>
                            <span onClick={close}><FontAwesomeIcon icon={faCircleXmark} style={{fontSize:"50", cursor:"pointer"}} className="text-light"/></span>
                        </div>
                        <br />
                            < According />
                        </div>

                <div className="burger text-light" onClick={open}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="logo">
                    <Link className="text-light" href={"/"}>Logo</Link>
                </div>

                <div className="position-relative hide-on-sm-dropdown">
                    <span className="drow-down text-light">
                        <Link href={("/")} className="text-light">Categories </Link>
                        <FontAwesomeIcon icon={faArrowDown} />
                    </span>

                    <div className="content position-absolute">
                            <Largemenu />
                    </div>
                </div>


                <div className="search">
                    <input type="text"
                        placeholder=" Search by category"
                    />
                    <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                </div>

                <div className="d-flex justify-content-between text-light icons-user">
                    <div>
                    <FontAwesomeIcon icon={faUser} />
                    </div>

                    <div>
                    <FontAwesomeIcon icon={faHeart} />
                    </div>
                    
                    <div>
                    <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </div>
            </div>

            {children}
        </>
    )
}


export default Navbar;