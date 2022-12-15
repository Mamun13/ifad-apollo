import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from '../../../asset/images/news/Rectangle 27.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { BsChevronRight } from 'react-icons/bs';
import { GoChevronRight } from 'react-icons/go';
import Slider from 'react-slick';

const NewsSlider = ({ sendCardData }) => {
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
			<div>
				<Slider {...settings}>
					{sendCardData.map((curElem) => {
						return (
							<>
								<div className="mb-4 p-3">
									<Card>
										<Card.Img variant="top" src={Img} />
										<Card.Body>
											{/* <Card.Title>Card Title</Card.Title> */}
											<Card.Text className="fs-18 fw-semibold">{curElem.text} </Card.Text>
											<div className="d-flex justify-content-between">
												<Button variant="" className="p-0 text-danger fw-bold">
													Read More <GoChevronRight />
												</Button>
												<p className="m-0 text-warning">06 Nov, 2022</p>
											</div>
										</Card.Body>
									</Card>
								</div>
							</>
						);
					})}
				</Slider>
				<div className="text-center mb-5">
					<button className='load_button fw-semibold font-oswald'>Load More</button>
				</div>
			</div>
		</>
	);
};

export default NewsSlider;
