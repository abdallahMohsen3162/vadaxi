import React from 'react'
import "./footer.css"
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className='container-fluid bg-dark p-3 text-light'>
        <div className='row'>
                  <div className='links col-lg-6 col-md-12'>

          <div className='link-type'>
            <h5>Link</h5>
            <div>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
            </div>
          </div>
          <div className='link-type'>
            <h5>Link</h5>
            <div>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
            </div>
          </div>
          <div className='link-type'>
            <h5>Link</h5>
            <div>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
              <Link href={"/"}>Link</Link>
            </div>
          </div>

          </div>


          <div className='col-lg-6'>
            <div className='social bg-light'>
              <div>
              <Link href={"/"}>Facebook</Link>
                <Link href={"/"}>Twitter</Link>
                <Link href={"/"}>Instagram</Link>
                <Link href={"/"}>Telegram</Link>
                <Link href={"/"}>Facebook</Link>
                <Link href={"/"}>Instagram</Link>
              </div>

              <div>
                asdsa
              </div>



            </div>
          </div>


        </div>
    </footer>
  )
}
