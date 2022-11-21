import React from 'react'

import squares from "../assets/img/svg/squares.svg"


const Service = () => {

	

  return (
    <div>
        <div id="service" className="know_tm_main_section">
				<div className="know_tm_services">
					<div className="know_tm_main_title">
						<span>Service</span>
						<h3>Never compromise with quality</h3>
					</div>
					<div className="service_list">
						<ul>
						

							<li>
								<div className="list_inner">
									<span className="icon"><img className="svg" src={squares} alt=""/></span>
									<h3 className="title">name</h3>
									<p className="text">description</p>
									<a className="know_tm_full_link" href="#"></a>
									
								</div>
							</li>
								
							
						</ul>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Service