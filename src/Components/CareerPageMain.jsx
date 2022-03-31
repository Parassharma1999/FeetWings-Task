import React,{useState} from "react";
import {Link} from "react-router-dom"
import {FaBold,FaUnderline} from "react-icons/fa"
import {FiUnderline} from "react-icons/fi"
import {AiOutlineItalic} from "react-icons/ai"
import {MdOutlineFormatListBulleted,MdFormatListNumbered} from "react-icons/md"
import JobSection from "./JobSection"
import WorkPlaceSection from "./WorkPlaceSection"
import EmploymentSection from "./EmploymentSection";


const CareerPageMain = () => {
const [isJobSectionOpen, setIsJobSectionOpen] = useState(false);
const [isWorkPlaceSectionOpen, setIsWorkPlaceSectionOpen]=useState(false);
const [isEmploymentSectionOpen, setIsEmploymentSectionOpen] =useState(false);

function clickHandler(){
  setIsEmploymentSectionOpen(!isEmploymentSectionOpen);
}

  return (
    <div className="CareerPageMain">
      <div className="header">Career Dashboard</div>
      <div className="toolsGroup">
        <div className="toolGroup1">
          <div className="titleTool">
            <input type="text" id="title" placeholder="Title" />
          </div>

          <div className="empTool">
            <div id="employment" onClick={clickHandler}>Employment type (Option Choose)</div>
          </div>

          <div className="locationTool">
            <input type="text" id="location" placeholder="Location" />
          </div>

         
           <div className="jobTool">
            <div id="jobSection" onClick={()=>{setIsJobSectionOpen(!isJobSectionOpen)}}>Job Section (Option Choose)</div>
           </div>
         

          <div className="workTool">
            <div id="workplace" onClick={()=>{setIsWorkPlaceSectionOpen(!isWorkPlaceSectionOpen)}}>Workplace type (Option Choose)</div>
          </div>

          <div className="paidTool">
            <div id="paidTool">Paid/Grabis (Option Choose)</div>
          </div>
        </div>

        <div className="toolGroup2">
          <div className="shortDescription">
            <input
              type="text"
              id="shortDescription"
              placeholder="Short Description ( 150 Words )"
            />
          </div>
        </div>
       </div> 

        <div className="textSection">
          <div id="heading">Add a job description</div>

          <div id="subheading" required>
            Description <span id="asteric">*</span>
          </div>

          <div id="icons"> <FaBold className="one"/> <AiOutlineItalic className="one"/> <FiUnderline className="one"/> <MdOutlineFormatListBulleted className="one"/> <MdFormatListNumbered className="one"/></div>

          <textarea id="textarea" cols="167" rows="10" />

        
        <div className="skillHeading">Add Skills</div>
        <div className="skillSubheading">
          Add skill keywords to make your job more visible to the right
          candidates (Select up to 10)
        </div>

        <button id="addSkill">
          <span>Add skill</span>
          <span id="plus">+</span>
        </button>
      </div>
      
      <div className="submitButton">
      <Link to="/jobDescription">
      <button className="submit">Submit</button>
      </Link>
      </div>
      
       {isJobSectionOpen && <JobSection/>}
       {isWorkPlaceSectionOpen && <WorkPlaceSection/>}
       {isEmploymentSectionOpen && <EmploymentSection/>}

    </div>

  );
};

export default CareerPageMain;
