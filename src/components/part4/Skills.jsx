import React, { useEffect } from "react";
import "./Skills.css";
// ! , , , , ,,
import {
  react,
  Node,
  Nodelogo,
  python,
  css,
  figma,
  git,
  firebase,
  html,
  javascript,
  redux,
  sass,
  typescript,
  cpp,
  express,
  nestjs,
  java,
  mysql,
  php,
  postman,
  mongodb,
  photoshop,
  illustrator,
  bootstrap,
  blender,
  socketio,
  sanity,
  gsaplogo,
  assembly,
  fEmeta,
  jsMeta,
  reactbasics,
  resume,
} from "../../assets/images";

import { gsap, Power2, Power3 } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
const Skills = () => {
  const t1 = gsap.timeline();
  const revealer = CSSRulePlugin.getRule(".skills__container::after");
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 1000) {
        t1.to(revealer, {
          delay: 0.5,
          width: "0%",
          ease: Power2.easeInOut,
        }).to(".skills__container", {
          ease: Power2.easeOut,
          opacity: 1,
          delay: -0.2,
        });
      }
      // else if (
      //   (window.scrollY > 1600 && window.scrollY < 1800) ||
      //   (window.scrollY > 3000 && window.scrollY < 3200)
      // ) {
      //   t1.to(revealer, {
      //     delay: 0.5,
      //     width: "100%",
      //     ease: Power2.easeInOut,
      //   }).to(".skills__container", {
      //     ease: Power2.easeOut,
      //     opacity: 0,
      //     delay: -0.2,
      //   });
      // }
    });
  }, []);

  return (
    <div className="skillsExperience__container">
      <p className="fantasy-s">------ Technical Skills</p>
      <h2 className="skillsExperience__container-header">
        <span>Skills</span> and <span>Experiences</span>
      </h2>

      <div className="skillsExperience__container-contentFlex">
        <div className="skills__container basic-flex">
          <div>
            <img src={react} alt="" />
            <p>React</p>
          </div>
          <div>
            <img src={Node} alt="" />
            <p>Node</p>
          </div>
          <div>
            <img src={python} alt="" />
            <p>Python</p>
          </div>
          <div>
            <img src={express} alt="" />
            <p>Express</p>
          </div>
          <div>
            <img src={css} alt="" />
            <p>CSS</p>
          </div>
          <div>
            <img src={mysql} alt="" />
            <p>Mysql</p>
          </div>
          <div>
            <img src={mongodb} alt="" />
            <p>Mongo Db</p>
          </div>
          <div>
            <img src={php} alt="" />
            <p>Php</p>
          </div>

          <div>
            <img src={git} alt="" />
            <p>Git</p>
          </div>
          <div>
            <img src={firebase} alt="" />
            <p>Firebase</p>
          </div>
          <div>
            <img src={html} alt="" />
            <p>HTML</p>
          </div>
          <div>
            <img src={javascript} alt="" />
            <p>JavaScript</p>
          </div>
          <div>
            <img src={bootstrap} alt="" />
            <p>Bootstrap</p>
          </div>
          <div>
            <img src={gsaplogo} alt="" />
            <p>GSAP</p>
          </div>
          <div>
            <img src={postman} alt="" />
            <p>Post Man</p>
          </div>
          {/* <div>
            <img src={redux} alt="" />
            <p>Redux</p>
          </div> */}
          <div>
            <img src={sass} alt="" />
            <p>Sass</p>
          </div>
          <div>
            <img src={typescript} alt="" />
            <p>TypeScript</p>
          </div>
          {/* <div>
            <img src={cpp} alt="" />
            <p>C++</p>
          </div> */}
          <div>
            <img src={assembly} alt="" />
            <p>Assembly</p>
          </div>
          <div>
            <img src={sanity} alt="" />
            <p>Sanity</p>
          </div>
          <div>
            <img src={socketio} alt="" />
            <p>SocketIo</p>
          </div>
          <div>
            <img src={java} alt="" />
            <p>Java</p>
          </div>
          <div>
            <img src={nestjs} alt="" />
            <p>NestJs</p>
          </div>
          <div>
            <img src={photoshop} alt="" />
            <p>PhotoShop</p>
          </div>
          <div>
            <img src={blender} alt="" />
            <p>Blender</p>
          </div>
          <div>
            <img src={illustrator} alt="" />
            <p>Illustrator</p>
          </div>
          <div>
            <img src={figma} alt="" />
            <p>Figma</p>
          </div>
        </div>
        <div className="Experience__container">
          <h4 className="experience-header">Experience</h4>

          <div className="Experience__container-Year basic-flex">
            <h1>2021</h1>
            <div>
              <h3>Junior Frontend Developer</h3>
              <span>Freelance</span>
            </div>
          </div>
          <div className="Experience__container-Year basic-flex">
            <h1>2022</h1>
            <div>
              <h3>Full stack Developer</h3>
              <span>Startup</span>
              <span>Freelance</span>
            </div>
          </div>
          {/* <div className="Experience__container-Year basic-flex">
            <h1>2021</h1>
            <div>
              <h3>Backend Developer</h3>
              <span>Google</span>
            </div>
          </div> */}
          <div className="Experience__container-Year basic-flex">
            <div
              className="resume"
              style={{ height: "430px", overflowY: "hidden" }}
            >
              <h3>Resume</h3>
              <a href={resume} target="_blank" title="Click Here">
                <div>
                  <img
                    src={resume}
                    alt=""
                    style={{ width: "300px", marginTop: "20px" }}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
