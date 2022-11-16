import React, { useRef } from 'react'
import { BsArrowLeftShort, BsArrowRightShort, BsInstagram } from 'react-icons/bs'
import { images } from '../../constants'

import SubHeading from '../subheading/SubHeading'
import './Gallery.css'

const Gallery = (direction) => {
    const scrollRef = useRef();

    const scroll = () => {
        if(direction === 'left') {
            scrollRef.current.scrollLeft -= 300;
        } else {
            scrollRef.current.scrollLeft += 300;
        }
    }
  return (


    <div class="container"> 
        
{/* <div className="app__gallery ">
    <div className="gallery__row">

        <div className="gallery__row-content ">
            <SubHeading title="Instagram" />
            <h1 className="headtext__cormorant">Photo Gallery</h1>
            <p className="p__opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button type="button" className="custom__button">View More</button>
        </div>
        <div className="gallery__row-images ">
            <div className="gallery__row-images_container" ref={scrollRef}>
                {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
                    <div className="gallery__row-images_card " key={`gallery_image-${index + 1}`}>
                        <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                        <img src={image} alt="gallery_image" />
                        <BsInstagram className="gallery__image-icon" />
                    </div>
                ))}
            </div>
            <div className="gallery__row-images_arrows">
                <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
            </div>
        </div>

    </div>
</div> */}


        <div class="heading">
            <h1>Photo Gallery</h1>
        </div>
        <div class="row">
            <div class="card">
                <div class="card-header" ref={scrollRef}>
                    {[images.gallery01, images.gallery02, images.gallery03, images.gallery04,].map((image, index) => (
                        <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                        {/* <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} /> */}
                        <img src={image} alt="gallery_image" />
                        <BsInstagram className="gallery__image-icon" />
                        </div>
                    ))}
                </div>
                {/* <div class="card-body">
                    <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                    <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
                </div> */}
            </div> 
        </div>
    </div>

  )
}

export default Gallery
