import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HeavyTruck from '../../../asset/images/bikecategory/heavy-truck 1.png'
import TabCategory from './TabCategory';

const BestBike = () => {
	return (
		<>
			<section className="">
				<h2 className="text-center fw-bold font-oswald font-36 mt-3">Find the best Tyres</h2>
				<p className="text-center font-16 font-lato">
					It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
					<br />
					The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
				</p>
				<div className="container">
					<div className="row">
						{/* <TabCategory/> */}
					</div>
				</div>
			</section>
		</>
	);
};

export default BestBike;
