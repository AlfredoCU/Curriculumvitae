import React from "react";
import H2Element from "../utils/H2Element";
import H3Element from "../utils/H3Element";
import ParamElement from "../utils/ParamElement";

const Certificates = ({ data }) => (
  <>
    <H2Element title="Certificates" />
    {data &&
      data.map((cer, key) => (
        <div key={`CER-${key}`}>
          <H3Element>
            {cer.name} {cer.institution}
            <span>{cer.date}</span>
          </H3Element>
          <ParamElement content={cer.description} />
        </div>
      ))}
  </>
);

export default Certificates;
