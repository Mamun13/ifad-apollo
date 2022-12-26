import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import GalleryOne from '../../../asset/images/gallery/Gallery img.png';
import { FaPlay } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';

const Galleryslider = ({ sendVideoData }) => {

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
				<div className="p-3 ">
					<Card className="border-0 bg-transparent">
						<FaPlay variant="primary" onClick={handleShow} className="playicon"/>

						<Modal show={show} onHide={handleClose}>
							<div class="embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
							</div>
						</Modal>
						<Card.Img variant="top" src={GalleryOne} />
					</Card>
				</div>
				<div className="p-3 ">
					<Card className="border-0 bg-transparent">
						<FaPlay variant="primary" onClick={handleShow} className="playicon" />

						<Modal show={show} onHide={handleClose}>
							<div class="embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
							</div>
						</Modal>
						<Card.Img variant="top" src={GalleryOne} />
					</Card>
				</div>
				<div className="p-3 ">
					<Card className="border-0 bg-transparent">
						<FaPlay variant="primary" onClick={handleShow} className="playicon" />

						<Modal show={show} size="lg" onHide={handleClose} className=''>
							<div class="embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
							</div>
						</Modal>
						<Card.Img variant="top" src={GalleryOne} />
					</Card>
				</div>
				<div className="p-3 ">
					<Card className="border-0 bg-transparent">
						<FaPlay variant="primary" onClick={handleShow} className="playicon" />

						<Modal show={show} size="lg" onHide={handleClose} className=''>
							<div class="embed-responsive embed-responsive-16by9">
								<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
							</div>
						</Modal>
						<Card.Img variant="top" src={GalleryOne} />
					</Card>
				</div>
			</Slider>
		</>
	);
};

export default Galleryslider;
