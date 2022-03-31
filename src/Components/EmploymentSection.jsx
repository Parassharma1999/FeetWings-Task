import React, { useState, useRef } from "react";
import { ImCheckmark } from "react-icons/im";

const EmploymentSection = () => {
  return (
    <div className="JobTypes">
      <div className="job">
        <label htmlFor="job1" name="job" value="1">
        <input type="checkbox"  id="job1" />
          Full-time</label>
      </div>
      <div className="job">
        <label htmlFor="job2" name="job" value="1">
        <input type="checkbox"  id="job2" />
          Part-time</label>
      </div>
      <div className="job">
        <label htmlFor="job3" name="job" value="1">
        <input type="checkbox"  id="job3" />
          Contract</label>
      </div>
      <div className="job">
        <label htmlFor="job4" name="job" value="1">
        <input type="checkbox"  id="job4" />
          Temporary</label>
      </div>

      <div className="job">
        <label htmlFor="job5" name="job" value="1">
        <input type="checkbox"  id="job5" />
          Volunteer</label>
      </div>

      <div className="job">
        <label htmlFor="job6" name="job" value="1">
        <input type="checkbox"  id="job6" />
          Internship</label>
      </div>
    </div>
);
};

export default EmploymentSection;
