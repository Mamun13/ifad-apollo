import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import GalleryOne from '../../../asset/images/gallery/Gallery img.png';
import GalleryTwo from '../../../asset/images/gallery/Rectangle 63.png';
import GalleryThree from '../../../asset/images/gallery/Galleryimg.png';
import TireOne from '../../../asset/images/alltire/1.png';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BestBikeSlider = () => {
	const [lgShow, setLgShow] = useState(false);

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<>
			<Slider {...settings}>
				{/* {sendVideoData.map((curElem)=>{})} */}

				<div className="p-3 ">
					<Link to="/about_product" className="text-dark">
						<div className="bg text-center rounded shadow-md bg-body rounded">
							<img src={TireOne} alt="" className="img-fluid img-align pt-4 pb-2" />
							<p className="pb-4 font-lato fs-16">Lorem Ipsum is simply dummy</p>
						</div>
					</Link>
				</div>

				<div className="p-3 ">
					<div className="bg text-center rounded shadow-md bg-body rounded">
						<img src={TireOne} alt="" className="img-fluid img-align pt-4 pb-2" />
						<p className="pb-4 font-lato fs-16">Lorem Ipsum is simply dummy</p>
					</div>
				</div>

				<div className="p-3 ">
					<div className="bg text-center rounded shadow-md bg-body rounded">
						<img src={TireOne} alt="" className="img-fluid img-align pt-4 pb-2" />
						<p className="pb-4 font-lato fs-16">Lorem Ipsum is simply dummy</p>
					</div>
				</div>

				<div className="p-3 ">
					<div className="bg text-center rounded shadow-md bg-body rounded">
						<img src={TireOne} alt="" className="img-fluid img-align pt-4 pb-2" />
						<p className="pb-4 font-lato fs-16">Lorem Ipsum is simply dummy</p>
					</div>
				</div>
			</Slider>
		</>
	);
};

export default BestBikeSlider;
