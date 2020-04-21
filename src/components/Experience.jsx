import React from "react";
import H2Element from "../utils/H2Element";
import H3Element from "../utils/H3Element";
import ParamElement from "../utils/ParamElement";

const Experience = ({ data }) => (
  <>
    <H2Element title="Experience" />
    {data &&
      data.map((exp, key) => (
        <div key={`EXP-${key}`}>
          <H3Element>
            {exp.jobTitle} {exp.company}
            <span>
              {exp.startDate} - {exp.endDate}
            </span>
          </H3Element>
          <ParamElement content={exp.jobDescription} />
        </div>
      ))}
  </>
);

export default Experience;
