import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import TireOne from '../../../asset/images/alltire/1.png';
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

				<div className="p-3">
					<Link to="/about_product" className="text-dark">
						<div className="text-center shadow bg-body-tertiary rounded">
							<img src={TireOne} alt="" className="bikeImg img-fluid img-align"/>
							<p className="pb-4 font-lato fs-16 bikeDetails">Lorem Ipsum is simply dummy</p>
						</div>
					</Link>
				</div>
				<div className="p-3">
						<div className="text-center shadow bg-body-tertiary rounded w-100">
							<img src={TireOne} alt="" className="bikeImg img-fluid img-align"/>
							<p className="pb-4 font-lato fs-16 bikeDetails">Lorem Ipsum is simply dummy</p>
						</div>
				</div>
				<div className="p-3">
						<div className="text-center shadow bg-body-tertiary rounded">
							<img src={TireOne} alt="" className="bikeImg img-fluid img-align"/>
							<p className="pb-4 font-lato fs-16 bikeDetails">Lorem Ipsum is simply dummy</p>
						</div>
				</div>
				<div className="p-3">
						<div className="text-center shadow bg-body-tertiary rounded">
							<img src={TireOne} alt="" className="bikeImg img-fluid img-align"/>
							<p className="pb-4 font-lato fs-16 bikeDetails">Lorem Ipsum is simply dummy</p>
						</div>
				</div>

				
			</Slider>
		</>
	);
};

export default BestBikeSlider;
