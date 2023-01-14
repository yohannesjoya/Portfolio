import React, { useState, useRef, cloneElement, useEffect } from "react";
import "./Works.css";
import { gsap, Power2, Power3 } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faEarthAfrica,
  faSpider,
  faCamera,
  faCake,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import { UXUI, WebApp, Allprojects, Programing } from "./projects";
const ScreenRenderer = ({
  scrnImg,
  scrnTitle,
  scrnHeader,
  scrnDescription,
  projectLink,
}) => {
  const screenContent = useRef();

  const t1 = gsap.timeline();
  useEffect(() => {
    t1.from(screenContent.current, {
      y: 200,
      opacity: 0,
      ease: Power2.easeInOut,
    }).to(screenContent.current, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut,
    });
  }, [scrnImg, scrnTitle, scrnHeader, scrnDescription, projectLink]);
  return (
    <a href={projectLink} target="_blank" title="visit the site">
      <div className="screen__content-container" ref={screenContent}>
        <img className="screen__content-img" src={scrnImg} alt="" />
        <div className="screen__content-title">
          <p>{scrnTitle}</p>
        </div>
        <h2 className="screen__content-header">{scrnHeader}</h2>
        <p className="screen__content-description">{scrnDescription}</p>
      </div>
    </a>
  );
};

// array of projects

const Works = () => {
  const [screenContent, setScreenContent] = useState(WebApp);
  // useEffect(() => {
  //   // window.addEventListener("resize", () => {
  //   //   if (window.innerWidth <= 650) {
  //   //     // option1.current.textContent = "u";
  //   //     // option3.current.textContent = "p";
  //   //     // option1.current.textContent = "a";
  //   //   } else {
  //   //     // option1.current.textContent = "UX/UI";
  //   //     // option3.current.textContent = "Programing";
  //   //     // option4.current.textContent = "All";
  //   //   }
  //   // });
  // }, [window.innerWidth]);
  const option1 = useRef();
  const option2 = useRef();
  const option3 = useRef();
  const option4 = useRef();

  const handleOptionChange = (e) => {
    // ! this deactivate the former activated key
    const options = [option1, option2, option3, option4];
    options.forEach((element) => {
      element.current.classList.remove("activeOption");
    });
    // ! this change the button clicked to active and shows the its contents
    e.target.classList.add("activeOption");
    switch (e.target.textContent) {
      case "UX/UI" || "u":
        setScreenContent(() => UXUI);
        break;
      case "Programing" || "":
        setScreenContent(() => Programing);
        break;
      case "All" || "a":
        setScreenContent(() => Allprojects);
        break;

      default:
        setScreenContent(() => WebApp);
        break;
    }
  };

  return (
    <div className="work__container">
      <p className="fantasy">
------ Projects 
      </p>
      <h1 className="work__container-header">
        My <span>Recent and Past</span> Projects
      </h1>

      <div className="work__container-options basic-flex">
        <button
          ref={option1}
          className="work__option-btn "
          onClick={(e) => {
            handleOptionChange(e);
          }}
        >
          UX/UI
        </button>
        <button
          ref={option2}
          className="work__option-btn activeOption"
          onClick={(e) => {
            handleOptionChange(e);
          }}
        >
          Web Apps
        </button>
        <button
          ref={option3}
          className="work__option-btn"
          onClick={(e) => {
            handleOptionChange(e);
          }}
        >
          Programing
        </button>
        <button
          ref={option4}
          className="work__option-btn"
          onClick={(e) => {
            handleOptionChange(e);
          }}
        >
          All
        </button>
      </div>
      <div className="Works__container-screen basic-flex">
        {screenContent.map((element) => {
          return (
            <ScreenRenderer
              projectLink={element.projectLink}
              scrnImg={element.scrnImg}
              scrnTitle={element.scrnTitle}
              scrnHeader={element.scrnHeader}
              scrnDescription={element.scrnDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Works;
