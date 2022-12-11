import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from '../../../asset/images/news/Rectangle 27.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsChevronRight } from 'react-icons/bs';
import { GoChevronRight } from 'react-icons/go';
import Slider from 'react-slick';

const NewsSlider = ({ sendCardData }) => {
	// console.log(sendCompanyLogo);
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<>
			<div>
				<Slider {...settings}>
					{sendCardData.map((curElem) => {
						return (
							<>
								<div className="col-lg-4 mb-5">
									<Card style={{ width: '22rem' }}>
										<Card.Img variant="top" src={Img} />
										<Card.Body>
											{/* <Card.Title>Card Title</Card.Title> */}
											<Card.Text className='fs-18 fw-semibold'>{curElem.text} </Card.Text>
											<div className="d-flex justify-content-between">
												<Button variant="" className="p-0 text-danger fw-bold">
													Read More <GoChevronRight/>
												</Button>
												<p className='m-0 text-warning'>06 Nov, 2022</p>
											</div>
										</Card.Body>
									</Card>
								</div>
							</>
						);
					})}
				</Slider>
			</div>

		</>
	);
};

export default NewsSlider;
