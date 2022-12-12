import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Gallery = () => {
	const [key, setKey] = useState('home');

	return (
		<>
			<section className="gallery">
				<div className="container">
					<div className="row">
						<h2 className="text-center fw-bold font-oswald font-36 mt-5 mb-4 product-g">Product Gallery</h2>
						<div className="product_gallery">
							<Tabs
								id="controlled-tab-example"
								className="d-flex justify-content-center "
								activeKey={key}
								onSelect={(k) => setKey(k)}
							>
								<Tab eventKey="home" title="Home">
									mamun
								</Tab>
								<Tab eventKey="profile" title="Profile">
									jiaur
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
