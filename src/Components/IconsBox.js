import React from 'react';
import img1 from '../question.png';
import img2 from '../windows.png';

const IconsBox = () => {
  return (
    <div className="icons_box w-1/12 h-3/4 flex flex-col items-center justify-between">
        <img className='question_image' src={img1} alt="img" />
        <img className='windows_image' src={img2} alt="img" />
  </div>
  )
}

export default IconsBox
