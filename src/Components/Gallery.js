import React from 'react'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import back from '../back.png';
import next from '../next.png';
import { useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import IconsBox from './IconsBox';

const Gallery = () => {

  const galleryTabRef = useRef(null);

  // Function to scroll right
  const scrollRight = () => {
    galleryTabRef.current.scrollLeft += 200;
    };

  // Function to scroll left
  const scrollLeft = () => {
    galleryTabRef.current.scrollLeft -= 200;
  };
  
  ///////////////  ADD IMAGE FEATURE DROP ZONE  ////////////////
  const [images, setImages] = useState([]);


  const onDrop = (acceptedFiles) => {
    const uploadedImages = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setImages([...images, ...uploadedImages]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };
  ///////////////////////////////////////////////////////////////////

  return (
    <div className='gallery_widget mt-auto rounded-2xl flex'>
      <IconsBox />
      <div className="content_box w-full">
        <div className="tabs_buttons w-11/12 h-1/4 flex">
          <div className="button_bar_gallery w-full h-4/5 mt-auto flex justify-between">
            <div className="gallery_header_box h-full rounded-2xl flex items-center justify-center">Gallery</div>
            <div className="gallery_buttons h-full flex justify-between items-center">
              <input {...getInputProps()} />
              <button {...getRootProps()} type='button' className="add_img_btn w-3/6 h-4/5 rounded-3xl"><span>+</span> ADD IMAGE</button>
              <div className="arrows_btns_box h-full flex justify-between items-center">
                <button onClick={scrollLeft} className="back w-2/5 h-4/6 rounded-2xl flex items-center justify-center">
                  <img src={back} alt="" />
                </button>
                <button onClick={scrollRight} className="next w-2/5 h-4/6 rounded-2xl flex items-center justify-center">
                  <img src={next} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <SimpleBar>
        <div className="gallery_photos w-11/12 h-3/5 flex" ref={galleryTabRef}>
        <div className="image_container rounded-2xl"></div>
        {images.map((image, index) => (
          <div key={index} className="image_container rounded-2xl">
            <img src={image.preview} alt={`preview-${index}`} style={imageStyle} />
          </div>
        ))}
        </div>
        </SimpleBar>
      </div>
    </div>
  )
}

export default Gallery