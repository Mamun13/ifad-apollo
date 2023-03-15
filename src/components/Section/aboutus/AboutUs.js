import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import pageBannerImg from '../../../asset/images/about_bg/pageBanner.png';
import Card from 'react-bootstrap/Card';
import { FiUsers } from 'react-icons/fi';
import { FaHandshake } from 'react-icons/fa';
import { TbStairsUp } from 'react-icons/tb';
import { RiTeamFill } from 'react-icons/ri';

const AboutUs = () => {
	return (
		<>
			<section id="about_product">
				<div className='pageBanner'>
					<img className='bannerImg' src={pageBannerImg}/>
					<h1 className='pageTitle'>About Us</h1>
				</div>
				<div className="container section_padding">
					<div className="row">
						<div className="col-lg-4 col-md-4">
							<img src="https://i.postimg.cc/MGQYtNZ3/1821911411who-we-are.png" alt="" className="about-us-img"/>
						</div>
						<div className="col-lg-8 col-md-8">
							<h2 className="text-start font-oswald sec-head">Who we are</h2>
							<p className="text-start font-calibri fs-18 text-content-align lh-base">
								The IFAD group was established in 1985 and moved more quickly in the direction of stability and growth under the
								leadership of Mr. Iftekhar Ahmed Tipu. The group has grown to include many firms in industries like automobiles, food,
								toiletries, media and information technology. It is one of the top business houses in the nation that has emerged as
								the top employer of a vast and diverse skilled labor force.
							</p>
							<p className="text-start font-calibri fs-18 lh-base">
								Since its beginning, IFAD has cultivated competitive advantages by generating value through ethical business practices
								and enhancing the environment and society. Each IFAD organization values innovation as a way to maintain growth, adapt
								value propositions to meet customers' ever-changing needs, and maximize value for all parties. The principles of
								producing shared value, contributing to society, putting the needs of the customer first, and diversity are the
								cornerstones of IFAD’s history.
							</p>
							<p className="text-start font-calibri fs-18 lh-base">
								The growth of this group of businesses is an example of the vitality and passion that Mr. Iftekhar Ahmed brought to
								the task of creating a company that is constantly engaged in the advancement of the country. He has written one of the
								most well-liked books that challenges societal issues and suggests workable remedies after accumulating four decades
								of experience as a business personality. He held the position of President of the Bangladesh Automobile Assemblers and
								Manufacturers Association (BAAMA) and is still a member of the FBCCI and all of the country's top clubs.
							</p>
						</div>
					</div>
				</div>
			</section>

			
			{/* values section start */}

			<section id="values" className='values'>
				<div className="container">
					<h1 className='text-center text-white value-align'>Values</h1>
				</div>
			</section>
			<section id="values-content" className=''>
				<div className="container">
					<div className="row">
						<div className='col-lg-3 text-center'>
							<div className="space-content">
								<Card className="value-content-bg rounded-4" style={{background:"#f68422"}}>
									{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
									<div>
										<FiUsers className="mx-4 mt-5 text-center" size={"50px"} color={"white"}/>
									</div>
									<Card.Body>
										<Card.Title className="font-poppins text-white mt-2"><h4 className="fw-700">CUSTOMER FOCUS</h4></Card.Title>
										<Card.Text className="card-align text-white text-center pb-3 pt-2 ">
										We recognize that our customers are the reason for our success in business, and we are committed to listen and respond positively to their needs.
										</Card.Text>
									</Card.Body>
								</Card>
							</div>
						</div>

						<div className='col-lg-3 text-center'>
						<div className="space-content">
							<Card className="card-bg rounded-4" style={{background:"#f68422"}}>
								{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
								<div>
									<FaHandshake className="mx-4 mt-5 text-center" size={"50px"} color={"white"}/>
								</div>
								<Card.Body>
									<Card.Title className="font-poppins text-white mt-2"><h4 className="fw-700">RESPONSIBILITIES</h4></Card.Title>
									<Card.Text className="card-align text-white text-center pb-3 pt-2 ">
									We recognize that our customers are the reason for our success in business, and we are committed to listen and respond positively to their needs.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>

					<div className='col-lg-3 text-center'>
						<div className="space-content">
							<Card className="value-content-bg rounded-4" style={{background:"#f68422"}}>
								{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
								<div>
									<TbStairsUp className="mx-4 mt-5 text-center" size={"50px"} color={"white"}/>
								</div>
								<Card.Body>
									<Card.Title className="font-poppins text-white mt-2"><h4 className="fw-700">ASPIRATION</h4></Card.Title>
									<Card.Text className="card-align text-white text-center pb-3 pt-2 ">
									We recognize that our customers are the reason for our success in business, and we are committed to listen and respond positively to their needs.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>

					<div className='col-lg-3 text-center'>
						<div className="space-content">
							<Card className="value-content-bg rounded-4" style={{background:"#f68422"}}>
								<div>
									<RiTeamFill className="mx-4 mt-5 text-center" size={"50px"} color={"white"}/>
								</div>
								<Card.Body>
									<Card.Title className="font-poppins text-white mt-2"><h4 className="fw-700">TEAMWORK</h4></Card.Title>
									<Card.Text className="card-align text-white text-center pb-3 pt-2 ">
									We recognize that our customers are the reason for our success in business, and we are committed to listen and respond positively to their needs.
									</Card.Text>
								</Card.Body>
							</Card>
						</div>
					</div>
					</div>
					
				</div>
			</section>

				{/* values section end */}
		</>
	);
};

export default AboutUs;
