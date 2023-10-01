import Image from 'next/image'
import Videos from '@/components/videos/Videos'
import { Suspense } from 'react'
import VideoLoad from '@/components/videos/VideoLoad'
import Products from '@/components/Products/Products'
import Footer from '@/components/footer/Footer'
import Example from '@/components/example/Example'
import Categories from '@/components/allCategories/Categories'
import BestSeller from '@/components/best-sellers/BestSeller'


export default function Home() {

  return (
    <div>
        < Videos />


        <div className='container mt-5'>
              <h5>top-categories</h5>
        </div>
        < Example />




        <div className='container mt-5'>
              <h5>top-categories</h5>
        </div>
        < Products />
        <br />
        

        <div className='container mt-5'>
              <h5>All-categories</h5>
        </div>
        < Categories />

        <div className='container mt-5'>
              <h5>Best-sellers</h5>
        </div>
        < BestSeller />
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />

        < Footer />

    </div>
  )
}
