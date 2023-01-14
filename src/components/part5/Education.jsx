import React, { useEffect } from "react";
import "./Education.css";
import { fEmeta, jsMeta, reactbasics, versionmeta, AAU, evangadi } from "../../assets/images";
const Education = () => {
  return (
    <div className="Education__container">
      <p className="fantasy-E">------ Educational Background</p>

      <h1 className="Education__container-header">Education </h1>
      <div className="certificates basic-flex">
        {/* the fourth cerificate */}
        <div className="Education__container-content basic-flex">
          <img src={AAU} alt="" />

          <div className="Education__container-contentYear">
            <div>
              <h3>Software Engineering</h3>
              <span>
                Bachelor's Degree, Addis Ababa University
                <ul>
                  <li>5 years course,</li>
                  <li>Started on Jun 2021</li>
                  <li>Date of graduation July 2025 due to covid</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        {/* the first cerificate */}
        {/* the fourth cerificate */}
        <div className="Education__container-content basic-flex">
          <img src={reactbasics} alt="" />

          <div className="Education__container-contentYear">
            <div>
              <h3>Front-end web development</h3>
              <span>
                Meta Front-End Developer Professional Certificate
                <ul>
                  <li>7 courses, self paced </li>
                  <li>Grade Achieved: 98.21% so far</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        {/* the first cerificate */}
        <div className="Education__container-content basic-flex">
          <img src={evangadi} alt="" />

          <div className="Education__container-contentYear">
            <div>
              <h3>Evangadi</h3>
              <span>
                Full stack web Developer Certificate
                <ul>
                  <li> 24 weeks of study</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
        {/* the second cerificate */}
        {/* <div className="Education__container-content basic-flex">
          <img src={jsMeta} alt="" />

          <div className="Education__container-contentYear">
            <div>
              <h3>Programing With JavaScript </h3>
              <span>
                Meta Front-End Developer Professional Certificate
                <ul>
                  <li> 5 weeks of study, 6-9 hours/week.</li>
                  <li>Grade Achieved: 99.33%</li>
                </ul>
              </span>
            </div>
          </div>
        </div> */}

        {/* the third cerificate */}
        {/* <div className="Education__container-content basic-flex">
          <img src={versionmeta} alt="" />

          <div className="Education__container-contentYear">
            <div>
              <h3>Version Control </h3>
              <span>
                Meta Front-End Developer Professional Certificate
                <ul>
                  <li>Grade Achieved: 97.50%</li>
                </ul>
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Education;
