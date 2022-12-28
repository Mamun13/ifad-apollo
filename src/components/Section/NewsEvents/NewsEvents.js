import React, { useState } from 'react';
import NewsSlider from './NewsSlider';
import SliderData from '../NewsEvents/NewsData'


const NewsEvents = () => {
  const [cardData, setcardData] = useState(SliderData);
  console.log(cardData);
	return (
		<>
			<section id='newsEvents' className="section_padding">
				<div className="container">
					<div className='sectionTitle'>
						<h2 className="secTitle">News & Events</h2>
						<p className="font-16 font-lato mb-4 secDetails">
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
							layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
						</p>
					</div>
					<NewsSlider sendCardData={cardData}/>
				</div>
			</section>
		</>
	);
};

export default NewsEvents;
