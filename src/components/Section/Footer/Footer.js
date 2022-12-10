import React from 'react'
import FooterLogo from "../../../asset/images/footer/footerlogo.png"
import { Link } from 'react-router-dom'
import FooterApi from '../../../asset/images/footer/API-logo.png'
import { CgFacebook } from 'react-icons/cg';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Number from "../../../asset/images/footer/number.png"
// import { BsFillBookFill } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <section id='' className='footer'>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={FooterLogo} alt="" className='img-fluid mt-5' />
            </div>
            <div className="col-lg-6">
              <ul className="list-group font-calibri text-uppercase list-group-horizontal list-unstyled wrap mt-5 mb-5">
                <li className='pt-2 footer-border'>
                  <Link to="" className='pe-4 text-light '> About Us</Link>
                </li>
                <li className='pt-2 footer-border'>
                  <Link to="" className='pe-4 fs-18 text-light '>Products</Link>
                </li>
                <li className='pt-2 footer-border'>
                  <Link to="" className='pe-4 fs-18 text-light '> Dealer Locator</Link>
                </li>
                <li className='pt-2 footer-border'>
                  <Link to="" className=' fs-18 text-light '> News & Events</Link>
                </li>
                <li className='pt-2 footer-border'>
                  <Link to="" className='pe-4 fs-18 text-light '> Careers</Link>
                </li>
                <li className='pt-2 footer-border'>
                  <Link to="" className='pe-4 fs-18 text-light '> Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <div className=" text-end mt-5">
                <h4 className='text-uppercase text-light pt-2 font-calibri fw-semibold'>Follow on</h4>
                <ul className='list-group list-group-horizontal list-unstyled float-end mb-3'>
                  <li>
                    <Link to="#" className='text-light fs-24 ps-3'>
                      <CgFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className='text-light fs-24 ps-3'>
                      <BsInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className='text-light fs-24 ps-3'>
                      <AiFillLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className='text-light fs-24 ps-3'>
                      <AiFillYoutube />
                    </Link>
                  </li>
                </ul>
                <img src={Number} alt="" className='float-end mb-3'/>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="d-flex justify-content-between">
              <div className="left">
                <p className='text-light'>@all rights reserved: Design by <img src={FooterApi} alt="" className='footer-logo' /></p>
              </div>
              <div className="right">
                <p className='text-light'>Terms of use <span className='fs-18'> Privacy Policy</span></p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Footer