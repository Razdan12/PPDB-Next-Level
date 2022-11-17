import React from 'react'
 
const Resume = () => {
	
	return (
		<div>
			<div id="resume" className="know_tm_main_section">
				<div className="know_tm_resume">
					<div className="know_tm_main_title">
						<span>Resume</span>
						<h3>Combination of Skill &amp; Experience</h3>
					</div>
					<div className="resume_inner">
						<div className="left">
							<div className="info_list">
								<div className="know_tm_resume_title">
									<h3>Education</h3>
									<span className="shape"></span>
								</div>
								<ul>
									

										<li>
											<div className="list_inner">
												<div className="short">
													<div className="job">
														<h3>subdesk</h3>
														<span>education</span>
													</div>
													<div className="year">
														<span>2022 - 2010</span>
													</div>
												</div>
												<div className="text">
													<p>description</p>
												</div>
											</div>
										</li>
									


								</ul>
							</div>
							<div className="info_list">
								<div className="know_tm_resume_title">
									<h3>Experience</h3>
									<span className="shape"></span>
								</div>
								<ul>
									
										<li>
											<div className="list_inner">
												<div className="short">
													<div className="job">
														<h3>experience</h3>
														<span>worplace</span>
													</div>
													<div className="year">
														<span>2011 - 2022</span>
													</div>
												</div>
												<div className="text">
													<p>deskc</p>
												</div>
											</div>
										</li>
								

								</ul>
							</div>
						</div>
						<div className="right">

							<div className="skills_list">
								<div className="know_tm_resume_title">
									<h3>Software Skills</h3>
									<span className="shape"></span>
								</div>
								<div className="software">
									<div className="circular_progress_bar">
										<ul>


											
												<li>
													<div className="list_inner">
														<div className="myCircle" data-value="0.85"></div>
														<div className="title"><h3>skill</h3></div>
													</div>
												</li>
										

										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Resume