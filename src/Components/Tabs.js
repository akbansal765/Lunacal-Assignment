import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useState } from 'react';
import IconsBox from './IconsBox';


const Tabs = () => {

  const text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas facilis ipsum quod quaerat laudantium quisquam tenetur eius voluptatibus aut, minima animi dignissimos vero ut nemo totam eligendi neque nobis accusantium. Sed libero similique, sit ratione corrupti odio est iusto, eos eum ipsa vitae iure alias tempore. Sequi eligendi dolorum in. About me Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas facilis ipsum quod quaerat laudantium quisquam tenetur eius voluptatibus aut, minima animi dignissimos vero ut nemo totam eligendi neque nobis accusantium. Sed libero similique, sit ratione corrupti odio est iusto, eos eum ipsa vitae iure alias tempore. Sequi eligendi dolorum in. About me Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas facilis ipsum quod quaerat laudan antium. Sed libero similique, sit ratione corrupti odio est iusto, eos eum ipsa vitae iure alias tempore. Sequi'; 
  const text2 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, molestias. Mollitia repellendus excepturi nostrum architecto!';
  const text3 = 'dolor, sit amet consectetur adipisicing elit. Voluptas facilis ipsum quod quaerat laudantium quisquam tenetur eius voluptatibus aut, minima animi dignissimos vero ut nemo totam eligendi neque nobis accusantium. Sed libero similique, sit ratione corrupti odio est iusto, eos eum ipsa vitae iure alias tempore. Sequi eligendi dolorum in. About me Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas facilis ipsum quod';

  const [text, setText] = useState(text1);

  const handleTabContent = (e) => {
    setText(e.target.value);
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(btn => btn.classList.remove('active'))
    e.target.classList.add('active');
  }

  return (
    <div className='tabs_widget rounded-2xl flex'>
      <IconsBox />
      <div className="content_box w-full">
        <div className="tabs_buttons w-11/12 h-1/4 flex">
          <div className="button_bar w-full h-4/5 mt-auto rounded-2xl flex items-center justify-center">
            <button onClick={handleTabContent} value={text1} className='btn h-4/5 rounded-xl active'>About Me</button>
            <button onClick={handleTabContent} value={text2} className='btn h-4/5 rounded-xl'>Experiences</button>
            <button onClick={handleTabContent} value={text3} className='btn h-4/5 rounded-xl'>Recommended</button>
          </div>
        </div>
        <div className="text_box w-full">
          <SimpleBar style={{paddingRight: '7%', maxHeight: '100%'}}>
          <p>{text}</p>
          </SimpleBar>
        </div>
      </div>
    </div>
  )
}

export default Tabs
