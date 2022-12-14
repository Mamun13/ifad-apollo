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
			<section className="gallery">
				<div className="container">
					<div className="row">
						<h2 className="text-center fw-bold font-oswald font-36 mt-5 mb-4 product-g">Product Gallery</h2>
						<div className="product_gallery mb-5">
							<Tabs id="controlled-tab-example" className="d-flex justify-content-center " activeKey={key} onSelect={(k) => setKey(k)}>
								<Tab eventKey="home" title="Home">
									<Galleryslider />
								</Tab>
								<Tab eventKey="profile" title="Profile">
									<Galleryslider sendVideoData={videoData} />
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
