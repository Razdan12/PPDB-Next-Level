import React from "react";
import hero from "../assets/img/gedung-sekolah-unik-header.jpg";

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
            <section>
              <div class="container">
                <div class="row">
                  <div class="col-lg-6 pe-lg-3">
                    <img class="rounded-3 img-fluid" src={hero} alt="about" />
                  </div>
                  <div
                    class="col-lg-6 px-lg-5 mt-6 mt-lg-0"
                    data-zanim-timeline="{}"
                    data-zanim-trigger="scroll"
                  >
                    <div class="overflow-hidden">
                      <div class="px-4 px-sm-0" data-zanim-xs='{"delay":0}'>
                        <h5 class="fs-0 fs-lg-1">
                          <span
                            class="fas fa-palette fs-1 me-2"
                           
                          ></span>
                          Visi
                        </h5>
                        <p class="mt-3">
                          We resource, train, speak, mentor and encourage;
                          marketplace leaders, business owners and career
                          professionals to be effective in the workplace.
                        </p>
                      </div>
                    </div>
                    <div class="overflow-hidden">
                      <div class="px-4 px-sm-0" data-zanim-xs='{"delay":0}'>
                        <h5 class="fs-0 fs-lg-1">
                          <span
                            class="fas fa-palette fs-1 me-2"
                           
                          ></span>
                          Misi
                        </h5>
                        <p class="mt-3">
                          We resource, train, speak, mentor and encourage;
                          marketplace leaders, business owners and career
                          professionals to be effective in the workplace.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
