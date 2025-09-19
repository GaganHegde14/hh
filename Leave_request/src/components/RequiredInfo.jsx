import React from "react";
import "../styles/RequiredInfo1.css";
import CancelLeaveIcon from "../assets/svg/leaveBalOver.svg";
import greyIcon from "../assets/svg/greyiicon.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <div className="cancel-leave-left">
        <img
          src={CancelLeaveIcon}
          className="clipboard-icon"
          width="24"
          height="26"
          alt="Cancel Leave Icon"
        />
        <span className="required-text">Leave Balance Overview</span>
        <img src={greyIcon} alt="Grey Icon" className="grey-icon-header" />
      </div>

      <div className="financial-year-header">
        <span className="financial-year-label">Financial year</span>
        <div className="year-options">
          <label className="radio-option">
            <input type="radio" name="year" value="2025" defaultChecked />
            <span className="radio-text">2025</span>
          </label>
          <label className="radio-option">
            <input type="radio" name="year" value="2024" />
            <span className="radio-text">2024</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RequiredInfo;
