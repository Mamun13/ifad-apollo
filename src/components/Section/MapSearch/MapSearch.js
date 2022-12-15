import React from 'react';
// import { BsChevronDown } from 'react-icons/bs';
import Map from '../../../asset/images/trans-map 2.png'

const MapSearch = () => {
	return (
		<>
			<section className="map">
				<div className="container">
					<div className="row">
						<h2 className="text-center fw-bold font-oswald font-36 mt-3 news text-light">Dealer Locator</h2>
						<p className="text-center font-16 font-lato mb-1 text-light">SELECT YOUR CITY TO FIND OUT DISTRIBUTOR IN YOUR AREA</p>
						{/* <div className="col-lg-4">
							<div className="d-flex justify-content-between">
								<div className="select">
									<form action="">
										<select class="form-select mb-3" aria-label="Default select example">
											<option selected>Select Division  </option>
											<option value="1" className='text-dark'>One</option>
											<option value="2" className='text-dark'>Two</option>
											<option value="3" className='text-dark'>Three</option>
										</select>
										<select class="form-select  mb-3" aria-label="Default select example">
											<option selected>Select Division  </option>
											<option value="1" className='text-dark'>One</option>
											<option value="2" className='text-dark'>Two</option>
											<option value="3" className='text-dark'>Three</option>
										</select>
										<button type='submit' className='border-0 bg-danger mt-4 font-calibri text-uppercase text-light fs-16 fw-bold ps-4 pe-4 pt-2 pb-2 rounded'>search</button>
									</form>
								</div>
								<div className="text-light float-end">akdjbvakdjvbadbvaj</div>
							</div>
						</div> */}
						<div className="d-flex justify-content-between">
							<div className="text-light">
							<div className="col-lg-4">
							<div className="d-flex justify-content-between">
								<div className="select">
									<form action="">
										<select class="form-select mb-3" aria-label="Default select example">
											<option selected>Select Division  </option>
											<option value="1" className='text-dark'>One</option>
											<option value="2" className='text-dark'>Two</option>
											<option value="3" className='text-dark'>Three</option>
										</select>
										<select class="form-select  mb-3" aria-label="Default select example">
											<option selected>Select Division  </option>
											<option value="1" className='text-dark'>One</option>
											<option value="2" className='text-dark'>Two</option>
											<option value="3" className='text-dark'>Three</option>
										</select>
										<button type='submit' className='border-0 bg-danger mt-4 font-calibri text-uppercase text-light fs-16 fw-bold ps-4 pe-4 pt-2 pb-2 rounded'>search</button>
									</form>
								</div>
							</div>
						</div>
							</div>
							<div className="text-light">
								<img src={Map} alt="" className='blueprint'/>
							</div>
						</div>
					</div>

				</div>
			</section>
		</>
	);
};

export default MapSearch;
