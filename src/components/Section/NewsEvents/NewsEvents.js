import React, { useState } from 'react';
import NewsSlider from './NewsSlider';
import SliderData from '../NewsEvents/NewsData'


const NewsEvents = () => {
  const [cardData, setcardData] = useState(SliderData);
  console.log(cardData);
	return (
		<>
			<section className=" news-back">
				<div className="container">
					<div className="row">
						<h2 className="text-center fw-bold font-oswald font-36 mt-4 news">News & Events</h2>
						<p className="text-center font-16 font-lato mb-5">
							It is a long established fact that a reader will be distracted by the readable content of a page when looking at its
							layout.
							<br />
							The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
						</p>
              <NewsSlider sendCardData={cardData}/>
						
					</div>
				</div>
			</section>
		</>
	);
};

export default NewsEvents;
