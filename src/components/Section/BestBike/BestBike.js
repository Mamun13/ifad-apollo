import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BestBikeSlider from './BestBikeSlider';
import HeavyTruck from '../../../asset/images/bikecategory/heavy-truck 1.png';
import TabCategory from './TabCategory';

const BestBike = () => {
	const [key, setKey] = useState('home');
	return (
		<>
			<section className="best_bike">
				<h2 className="text-center fw-bold font-oswald font-36 mt-3">Find the best Tyres</h2>
				<p className="text-center font-16 font-lato">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
					<br />
					The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
				</p>
				<div className="container">
					<div className="row">
						<div className="product_gallery mb-5">
							<Tabs id="controlled-tab-example" className="d-flex justify-content-center " activeKey={key} onSelect={(k) => setKey(k)}>
								<Tab eventKey="home" title="Truck / bus">
									<BestBikeSlider />
								</Tab>
								<Tab eventKey="profile" title="Light Truck/ bus">
									<BestBikeSlider />
								</Tab>
								<Tab eventKey="Car" title="Passenger Car">
									<BestBikeSlider />
								</Tab>
								<Tab eventKey="Motorcycle" title="Motorcycle">
									<BestBikeSlider />
								</Tab>
								<Tab eventKey="Tractor" title="Tractor">
									<BestBikeSlider />
								</Tab>
								
							</Tabs>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BestBike;
