import React from "react";
import "./Skill.css";
import Star from "./Star";
import skills from "./SkillData/SkillData";
function Skill() {
  return (
    <div className="container-fluid skill-section p-5" id="services">
      <div className="row row-container">
        <h2 className="text-center mb-4">My Skills</h2>
        {skills.map((skill) => {
          return (
            <div className="col-md-3 col-sm-6 col-xs-12" key={skill.id}>
              <div className="skill-box">
                <h4>
                  <span>
                    <i className={skill.skillName}></i>
                  </span>
                </h4>

                <p>{skill.skillDesciption}</p>
                <Star />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
