import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import GalleryOne from '../../../asset/images/gallery/Gallery img.png';
import GalleryTwo from '../../../asset/images/gallery/Rectangle 63.png';
import GalleryThree from '../../../asset/images/gallery/Galleryimg.png';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Galleryslider = ({ sendVideoData }) => {
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
				<div className="px-3">
					<Card className="border-0 bg-transparent">
						<Card.Img variant="top" src={GalleryOne} />
					</Card>
				</div>
				<div className="px-3">
					<Card className="border-0 bg-transparent">
						<Card.Img variant="top" src={GalleryOne}/>
					</Card>
				</div>
				<div className="px-3">
					<Card className="border-0 bg-transparent">
						<Card.Img variant="top" src={GalleryThree} />
					</Card>
				</div>
				<div className="px-3">
					<Card className="border-0 bg-transparent">
						<Card.Img variant="top" src={GalleryTwo}/>
					</Card>
				</div>
			</Slider>
		</>
	);
};

export default Galleryslider;
