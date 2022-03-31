import React from "react";
import {BsFillSuitHeartFill} from "react-icons/bs";

const CareerPage2 = () => {
  return (
    <div className="careerContainer">
      <div className="Heading">Business Systems</div>

      <div className="jobCard">

        <div className="jobCardLeft">
          <div className="jobCardTitle">
            <p>
              Business Systems Analyst - Financial Systems
            </p> 
            <p id="short">( Title )</p>
          </div>

          <div className="description">
            <p className="desc">Systems team to help expand and maintain our Order to Cash
            applications and its ecosystem. Your role will be to help implement,
            administer, and optimize our business systems and assist with
            business process.</p>
            <p id="short">( Short Description )</p>
          </div>

          <div className="jobType">Remote / Hybrid</div>
        </div>

         <div className="jobCardRight">
          <div className="rightWrapper">

          <div id="paid">
            $ Paid 
          </div>
          <div id="heart">
            <BsFillSuitHeartFill/> Gratis
          </div>  
          </div>
         </div>
      </div>
    </div>
  );
};

export default CareerPage2;
