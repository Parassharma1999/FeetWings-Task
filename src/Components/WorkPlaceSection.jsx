import React from "react";

const WorkPlaceSection = () => {
  return (
    <div className="workplaceContainer">

      <div className="onsite">
        <p className="Header">On-site</p>
        <p className="workDescription">Employees come to work in-person.</p>
      </div>

      <div className="Hybrid">
        <p className="Header">Hybrid</p>
        <p className="hybridDescription">Employees work on-site and off-site.</p>
      </div>

      <div className="Remote">
        <p className="Header">Remote</p>
        <p className="remote">Employees work off-site.</p>
      </div>
    </div>
  );
};

export default WorkPlaceSection;
