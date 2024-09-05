import React from 'react'
import Tabs from './Tabs'
import Gallery from './Gallery'

const Secondhalf = () => {
  return (
    <div className='second_half_component w-1/2 h-screen flex items-center justify-center'>
        <div className="widget_container h-4/5 w-11/12">
            <div className="tabs_box h-1/2 flex flex-col justify-between">
               <Tabs />
               <div className="rectangle_1 rectangle mx-auto rounded-2xl"></div>
            </div>
            <div className="gallery_box h-1/2 flex flex-col">
               <Gallery />
               <div className="rectangle_2 rectangle mx-auto rounded-2xl"></div>
            </div>
        </div>
    </div>
  )
}

export default Secondhalf
