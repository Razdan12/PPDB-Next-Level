import React from "react";
// import tumb from "../assets/img/thumbs/47-60.jpg";

import hero from "../assets/img/High School.gif";

import archive from "../assets/img/svg/archive.svg";
import resume from "../assets/img/svg/contacs.svg";
import portfolio from "../assets/img/svg/briefcase.svg";
import service from "../assets/img/svg/gear.svg";
import contact from "../assets/img/svg/letter.svg";

import Animasi from "./Animasi";
import "../assets/css/animation.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <div className="know_tm_hero">
        <div className="background_shape"></div>
        <div className="hero_content">
          <div className="container">
            <div className="content_inner">
              <div className="main_info">
                <div className="left">
                  <span className="subtitle">Welcome to</span>
                  <h4 className="name">SMP Purbalingga</h4>
                  <p className="text">Sekolah Unggulan</p>
                  <div className="know_tm_button">
                   
                   <button className="daftar"><span>Daftar</span><i></i></button>
                   
                    <button className="login"> <span>Login</span><i></i></button>
                  </div>
                </div>

                <div className="right">
                  <div className="imagee">
                    <img src={hero} alt="Curious George" height="450" />
                  </div>
                </div>
              </div>
              <div className="main_menu">
                <ul>
                  <li>
                    <img className="svg" src={archive} alt="" />
                    <span>Tentang</span>
                    <a className="know_tm_full_link" href="#about"></a>
                  </li>
                  <li>
                    <img className="svg" src={resume} alt="" />
                    <span>Visi Misi</span>
                    <a className="know_tm_full_link" href="#resume"></a>
                  </li>
                  <li>
                    <img className="svg" src={portfolio} alt="" />
                    <span>Gallery</span>
                    <a className="know_tm_full_link" href="#portfolio"></a>
                  </li>
                  <li>
                    <img className="svg" src={service} alt="" />
                    <span>Informasi</span>
                    <a className="know_tm_full_link" href="#service"></a>
                  </li>
                  <li>
                    <img className="svg" src={service} alt="" />
                    <span>Guru & Karyawan</span>
                    <a className="know_tm_full_link" href="#service"></a>
                  </li>

                  <li>
                    <img className="svg" src={contact} alt="" />
                    <span>Contact</span>
                    <a className="know_tm_full_link" href="#contact"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Animasi />
      </div>
    </div>
  );
};

export default Hero;
