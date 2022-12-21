import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Video = () => {
  return (
    <>
      <section id='' className='video'>
              <Link to="#" className='playbutton'>
                <BsFillPlayCircleFill className=''/>
              </Link>
      </section>
    </>
  )
}

export default Video