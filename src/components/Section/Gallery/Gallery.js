import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Galleryslider from './Galleryslider';
import SliderOneData from '../Gallery/GallerySliderData';

const Gallery = () => {
	const [videoData, setvideoData] = useState(SliderOneData);

	const [key, setKey] = useState('home');

	return (
		<>
			<section className="gallery section_padding">
				<div className="container">
						<div className='sectionTitle'>
							<h2 className="secTitle">Product Gallery</h2>
						</div>
					<div className="row">
						<div className='galleryNavBox'>
							<Tabs id="controlled-tab-example" className="galleryNav mb-4" activeKey={key} onSelect={(k) => setKey(k)}>
								<Tab eventKey="home" title="Home">
									<Galleryslider/>
								</Tab>
								<Tab eventKey="profile" title="Profile">
									<Galleryslider />
								</Tab>
							</Tabs>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Gallery;
