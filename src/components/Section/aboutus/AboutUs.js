import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import pageBannerImg from '../../../asset/images/about_bg/pageBanner.png';

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
		</>
	);
};

export default AboutUs;
