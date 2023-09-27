import Image from 'next/image'
import Videos from '@/components/videos/Videos'
import { Suspense } from 'react'
import VideoLoad from '@/components/videos/VideoLoad'
export default function Home() {

  return (
    <div>
        <Suspense fallback={<VideoLoad/>}>
        < Videos />

        </Suspense>

    </div>
  )
}
