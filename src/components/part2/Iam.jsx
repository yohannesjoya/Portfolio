import React from "react";
import "./Iam.css";
import {
  backend,
  frontend,
  webDesigner,
  threeDArtist,
} from "../../assets/images";

const Iam = () => {
  return (
    <div className="Iam__container">
      <p>
        <i>------ Services</i>
      </p>
      <h1 className="Iam-header">
        My <span>services</span>
      </h1>
      <div className="Iam__content-flex basic-flex">
        <div className="Iam__content-1">
          <img src={frontend} alt="" />
          <div className="Iam__content-description">
            <h1>Frontend Developer</h1>
            <p>
              I am a frontend developer with passion for building beautiful and
              functional web application
            </p>
          </div>
        </div>
        <div className="Iam__content-2">
          <img src={backend} alt="" />
          <div className="Iam__content-description">
            <h1>Backend Developer</h1>
            <p>
              I am a frontend developer with passion for building beautiful and
              functional web application
            </p>
          </div>
        </div>
        <div className="Iam__content-3">
          <img src={webDesigner} alt="" />
          <div className="Iam__content-description">
            <h1>Web Designer</h1>
            <p>
              I am a frontend developer with passion for building beautiful and
              functional web application
            </p>
          </div>
        </div>
        <div className="Iam__content-4">
          <img src={threeDArtist} alt="" />
          <div className="Iam__content-description">
            <h1>Digital Arts</h1>
            <p>
              I am a frontend developer with passion for building beautiful and
              functional web application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iam;
