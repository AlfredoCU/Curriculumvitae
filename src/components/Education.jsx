import React from "react";
import H3Element from "../utils/H3Element";
import H2Element from "../utils/H2Element";
import ParamElement from "../utils/ParamElement";

const Education = ({ data }) => (
  <>
    <H2Element title="Education" />
    {data &&
      data.map((edu, key) => (
        <div key={`EDU-${key}`}>
          <H3Element>
            {edu.degree} {edu.institution}
            <span>
              {edu.starDate} - {edu.endDate}
            </span>
          </H3Element>
          <ParamElement content={edu.description} />
        </div>
      ))}
  </>
);

export default Education;
