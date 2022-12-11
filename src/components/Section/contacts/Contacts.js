import React from 'react';
import Mail from '../../../asset/images/contact/mail.png'
import { BiUser } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { HiPhone } from 'react-icons/hi';
import { BsPencil, BsArrowRight } from 'react-icons/bs';

const Contacts = () => {
	return (
		<>
			<section className="contacts">
				<div className="container">
					<div className="row">
						<form action="" className="mt-5 mb-5">
							<div className="row">
								<div className="col-lg-4">
									<div class="mb-3">
										<BiUser className='icon'/>
										<input type="text" class="form-control rounded-1" placeholder="Full Name" aria-describedby="emailHelp" />
									</div>
									<div class="mb-3">
										<AiOutlineMail className='icon'/>
										<input type="email" class="form-control rounded-1" aria-describedby="emailHelp" placeholder="Email" />
									</div>
									<div class="">
										<HiPhone className='icon'/>
										<input type="number" class="form-control rounded-1" aria-describedby="emailHelp" placeholder="Number  " />
									</div>
								</div>
								<div className="col-lg-4">
									<div class="form-floating mb-3">
                                        <BsPencil className='icon2'/>
										<textarea class="form-control rounded-1"  rows="3" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
										<label for="floatingTextarea" className='label'>Comments</label>
									</div>
									<button type="submit" class="btn btn-primary rounded-1 bg-danger border-0">
										Submit  <BsArrowRight className=''/>
									</button>
								</div>
                                {/* <div className="col-lg-4">
                                    <img src={Mail} alt="" />
                                </div> */}
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contacts;
