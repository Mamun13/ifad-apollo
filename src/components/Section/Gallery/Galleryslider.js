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

const Galleryslider = ({sendVideoData}) => {
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
					<Card className="border-0 bg-transparent">
						<Link to="#">
							<FaPlay className="playicon" onClick={() => setLgShow(true)} />

							<Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
								<Modal.Header closeButton>
									<Modal.Title id="example-modal-sizes-title-lg">Ifad Group</Modal.Title>
								</Modal.Header>
								<Modal.Body className='modal_body_height'>
									<div class="embed-responsive embed-responsive-16by9 h-100">
										<iframe
											class="embed-responsive-item w-100 h-100"
											src="https://www.youtube.com/embed/lvFSnh5NQ7I"
											allowfullscreen
										></iframe>
									</div>
								</Modal.Body>
							</Modal>
						</Link>
						<Card.Img variant="top" src={GalleryOne} />
					</Card>
				</div>
				<div className="p-3 ">
					<Card className="border-0 bg-transparent">
						<Link to="#">
							<FaPlay className="playicon" onClick={() => setLgShow(true)} />

							<Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
								<Modal.Header closeButton>
									<Modal.Title id="example-modal-sizes-title-lg">Ifad Group</Modal.Title>
								</Modal.Header>
								<Modal.Body className='modal_body_height'>
									<div class="embed-responsive embed-responsive-16by9 h-100">
										<iframe
											class="embed-responsive-item w-100 h-100"
											src="https://www.youtube.com/embed/lvFSnh5NQ7I"
											allowfullscreen
										></iframe>
									</div>
								</Modal.Body>
							</Modal>
						</Link>
						<Card.Img variant="top" src={GalleryOne} />
					</Card>
				</div>
				<div className="p-3 ">
					<Card className="border-0 bg-transparent">
						<Link to="#">
							<FaPlay className="playicon" onClick={() => setLgShow(true)} />

							<Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
								<Modal.Header closeButton>
									<Modal.Title id="example-modal-sizes-title-lg">Ifad Group</Modal.Title>
								</Modal.Header>
								<Modal.Body className='modal_body_height'>
									<div class="embed-responsive embed-responsive-16by9 h-100">
										<iframe
											class="embed-responsive-item w-100 h-100"
											src="https://www.youtube.com/embed/lvFSnh5NQ7I"
											allowfullscreen
										></iframe>
									</div>
								</Modal.Body>
							</Modal>
						</Link>
						<Card.Img variant="top" src={GalleryThree} />
					</Card>
				</div>
				<div className="p-3 ">
					<Card className="border-0 bg-transparent">
						<Link to="#">
							<FaPlay className="playicon" onClick={() => setLgShow(true)} />

							<Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
								<Modal.Header closeButton>
									<Modal.Title id="example-modal-sizes-title-lg">Ifad Group</Modal.Title>
								</Modal.Header>
								<Modal.Body className='modal_body_height'>
									<div class="embed-responsive embed-responsive-16by9 h-100">
										<iframe
											class="embed-responsive-item w-100 h-100"
											src="https://www.youtube.com/embed/lvFSnh5NQ7I"
											allowfullscreen
										></iframe>
									</div>
								</Modal.Body>
							</Modal>
						</Link>
						<Card.Img variant="top" src={GalleryTwo} />
					</Card>
				</div>
				
				
			</Slider>
		</>
	);
};

export default Galleryslider;
