import React from "react";
import "../styles/LeaveCards.css";
import scrollRightIcon from "../assets/svg/scrollRight.svg";

const LeaveCards = ({ leaveData = null, onCardClick = null }) => {
  // Default data structure for frontend development
  // This will be replaced by backend data when integrated
  const defaultLeaveData = [
    {
      id: "casual-leave",
      title: "Casual Leave (CL)",
      days: 5,
      backgroundColor: "#EFF6FF", // Light blue/lavender
      type: "casual"
    },
    {
      id: "service-leave",
      title: "Service Leave (SL)",
      days: 5,
      backgroundColor: "#FAF5FF", // Light purple/pink
      type: "service"
    },
    {
      id: "privilege-leave",
      title: "Privilege Leave (PL)",
      days: 0,
      backgroundColor: "#F0FDF4", // Light green
      type: "privilege"
    },
    {
      id: "additional-wfh",
      title: "Additional WFH",
      days: 12,
      backgroundColor: "#FEFCE8", // Light yellow/cream
      type: "wfh"
    },
    {
      id: "long-service-leave",
      title: "Long Service Leave",
      days: 5,
      backgroundColor: "#FDF2F8", // Light pink
      type: "long-service"
    },
    {
      id: "service-leave-pl",
      title: "Service Leave (PL)",
      days: 12,
      backgroundColor: "#EEF2FF", // Light blue/lavender (same as first)
      type: "service-pl"
    },
    {
      id: "maternity-leave",
      title: "Maternity Leave",
      days: 182,
      backgroundColor: "#F0FDF4", // Light green (same as third)
      type: "maternity",
      hasActionButton: true
    }
  ];

  // Use backend data if provided, otherwise use default data
  const data = leaveData || defaultLeaveData;

  const handleCardClick = (leaveType) => {
    if (onCardClick) {
      onCardClick(leaveType);
    } else {
      console.log(`${leaveType.title} clicked - ${leaveType.days} days available`);
    }
  };

  return (
    <div className="leave-cards-container">
      {data.map((leave) => (
        <div
          key={leave.id}
          className="leave-card"
          style={{ backgroundColor: leave.backgroundColor }}
          onClick={() => handleCardClick(leave)}
        >
          <div className="leave-card-content">
            <h3 className="leave-title">{leave.title}</h3>
            <p className="leave-days">{leave.days} days</p>
          </div>
          {leave.hasActionButton && (
            <div className="leave-action-button">
              <img src={scrollRightIcon} alt="View details" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeaveCards;
