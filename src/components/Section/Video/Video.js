import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Video = () => {
  return (
    <>
      <section id='' className='video'>
        <div className="container">
          <div className="row">
            <div className="play-button text-center">
              <Link to="#" className='text-danger playbutton'>
                <BsFillPlayCircleFill className=''/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Video