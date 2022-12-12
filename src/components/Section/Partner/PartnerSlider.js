import React from 'react';
import CompanyLogo from '../../../asset/images/partners/client.jpg';
import Carousel from 'react-bootstrap/Carousel';


const PartnerSlider = ({ sendCompanyLogo }) => {
	return (
		<>
			<section id='partner' className="pb-4">
				<div className="container">
					<div className="row">
						<Carousel>
							<Carousel.Item>
							<img className="d-block w-100" src={CompanyLogo} />
								{/* <Carousel.Caption>
									<h3>First slide label</h3>
									<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
								</Carousel.Caption> */}
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={CompanyLogo} />
								{/* 
								<Carousel.Caption>
									<h3>Second slide label</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</Carousel.Caption> */}
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={CompanyLogo} />
								{/* <Carousel.Caption>
									<h3>Third slide label</h3>
									<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
								</Carousel.Caption> */}
							</Carousel.Item>
						</Carousel>
						{/* {sendCompanyLogo.map((curElem) => {
								return (
									<>
										<div className='col-lg-12 text'>
											<h1>{curElem.title}</h1>
											<img src={curElem.title} alt="" /> 
										</div>
									</>
								);
							})} */}
					</div>
				</div>
			</section>
		</>
	);
};

export default PartnerSlider;
