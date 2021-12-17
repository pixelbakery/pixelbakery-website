import React, { useState } from 'react'
import Image from 'next/image'
import Flickity from 'react-flickity-component'
import 'flickity/css/flickity.css'
import Shimmer from '../../Helpers/shimmer'
//IMAGES
//you can also import a local file, the syntax would look like:
//import image1 from './images/imagename.jpg'
const image1 = 'https://placeimg.com/640/480/people'
const image2 = 'https://placeimg.com/640/480/animals'
const image3 = 'https://placeimg.com/640/480/cars'
const image4 = 'https://placeimg.com/640/480/art'
const image5 = 'https://placeimg.com/640/480/dogs'
const image6 = 'https://placeimg.com/640/480/cats'

//IMAGE ARRAY
const images = [image1, image2, image3, image4, image5, image6]

const flickityOptions = {
  initialIndex: 2,
}

//MAIN LIGHTBOX
//Holds Images Cards and Lightbox
//this is where all of our logic will live
function ImageGallery() {
  const [imageToShow, setImageToShow] = useState('')
  const [lightboxDisplay, setLightBoxDisplay] = useState(false)

  //looping through our images array to create img elements

  const imageCards = images.map((image) => (
    <Image
      key={image}
      layout='fixed'
      width={'640px'}
      height={'480px'}
      className='image-card'
      onClick={() => showImage(image)}
      src={image}
    />
  ))

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image)
    setLightBoxDisplay(true)
  }

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false)
  }

  return (
    <>
      <div className='overflow-x-hidden overflow-y-hidden'>
        <Flickity options={flickityOptions}>{imageCards}</Flickity>
      </div>

      {lightboxDisplay ? (
        <div
          id='lightbox'
          className={
            'fixed z-90 top-0 left-0 w-full h-full flex bg-pink-light justify-center align-middle'
          }
          onClick={hideLightBox}
        >
          <div className='relative w-full h-full max-w-screen-md'>
            <Image
              className={''}
              id='lightbox-img'
              layout='fill'
              objectFit='contain'
              src={imageToShow}
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default ImageGallery
