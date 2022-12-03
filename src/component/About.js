import React from "react";
import hero from "../assets/img/gedung-sekolah-unik-header.jpg";
import "./css/about.css";

const About = () => {
  return (
    <div>
      <div id="about" className="know_tm_main_section">
        <div className="know_tm_about">
          <section>
            <div class="container">
              <div class="text-center mb-7">
                <h3 class="fs-2 fs-md-3">SMP Purbalingga</h3>
                <hr />
              </div>
              <div class="row">
                <div class="card col-lg-6 pe-lg-3"></div>
                    <div
                      class="col-lg-6 px-lg-5 mt-6 mt-lg-0"
                      data-zanim-timeline="{}"
                      data-zanim-trigger="scroll"
                    >
                  <div class="overflow-hidden">
                    <div class="px-4 px-sm-0" data-zanim-xs='{"delay":0}'>
                      <p class="mt-3">
                        SMP Purbalingga adalah sekolah nomor 1 Tempor anim ad
                        veniam irure ad aute id mollit non culpa elit
                        Lorem.Tempor anim ad veniam irure ad aute id mollit non
                        culpa elit Lorem. Tempor anim ad veniam irure ad aute id
                        mollit non culpa elit Lorem.
                      </p>{" "}
                      .... <a href="#">Selanjutnya</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
