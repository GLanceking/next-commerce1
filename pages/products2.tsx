import Head from 'next/head'
import Image from 'next/image'
import Carousel from 'nuka-carousel/lib/carousel'
import { useState } from 'react'

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1016/1000/600/',
    thumbnail: 'https://picsum.photos/id/1016/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1012/1000/600/',
    thumbnail: 'https://picsum.photos/id/1012/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1011/1000/600/',
    thumbnail: 'https://picsum.photos/id/1011/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original:
      'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg',
    thumbnail:
      'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/6.jpg',
  },
]

export default function Products2() {
  const [imgIndex, setImgIndex] = useState(0)
  return (
    <>
      <Head>
        <title>이미지 슬라이드</title>
      </Head>
      <div
        style={{
          width: 800,
          height: 450,
          border: 'solid pink',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Carousel withoutControls slideIndex={imgIndex}>
          {images.map((item) => (
            <Image
              key={item.original}
              src={item.original}
              alt="testpage-img"
              width={800}
              height={1}
            />
          ))}
        </Carousel>
      </div>
      <div style={{ display: 'flex' }}>
        {images.map((item, imgesIndex) => (
          <div
            key={imgesIndex}
            onClick={() => {
              setImgIndex(imgesIndex)
            }}
          >
            <Image
              key={item.thumbnail}
              src={item.thumbnail}
              alt="thumb-img"
              width={100}
              height={50}
            />
          </div>
        ))}
      </div>
    </>
  )
}
