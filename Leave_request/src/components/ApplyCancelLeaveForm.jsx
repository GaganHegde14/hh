import React, { useRef, useState } from "react";
import "../styles/ApplyCancelLeaveForm.css";
import datePickerIcon from "../assets/svg/datePicker.svg";
import viewPolIcon from "../assets/svg/viewPol.svg";
import addLLIcon from "../assets/svg/addLL.svg";
import noteIcon from "../assets/svg/note.svg";
import noteCloseIcon from "../assets/svg/noteClose.svg";
import applyCancelIcon from "../assets/svg/applyCancel.svg";
import dropdownIcon from "../assets/svg/dropdown.svg";
import PopCompassionate from "./PopCompassionate";
import PopCompOff from "./PopCompOff";
import AcknowledgmentFrame from "./AcknowledgmentFrame";
import FieldWithLabel from "./FieldWithLabel";
import { useNavigate } from "react-router-dom";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

// Using our new AcknowledgmentFrame component instead

const ApplyCancelLeaveForm = ({ onSubmit, onCancel, initialLeaveType }) => {
  const [form, setForm] = useState({
    requestType: "apply",
    dayType: "full",
    leaveType: initialLeaveType || "out-of-office",
    subCategory: "team-bonding",
    fromDate: "2025-08-08",
    toDate: "2025-08-08",
    ack: true,
    reason:
      initialLeaveType === "comp-off"
        ? "I have an important personal matter to attend at my Home town."
        : "Work on Weekend for Project deployment",
    comment: "I have an important personal matter to attend at my Home town.",
  });

  const update = (field, value) => setForm({ ...form, [field]: value });
  const navigate = useNavigate();

  const fromRef = useRef(null);
  const toRef = useRef(null);

  const openPicker = (ref) => {
    const input = ref.current;
    if (!input) return;
    if (typeof input.showPicker === "function") {
      input.showPicker();
    } else {
      input.focus();
      input.click();
    }
  };

  const [showNote, setShowNote] = useState(false);
  const hideSubCategories = form.leaveType === "long-service-leave";
  const isCompassionate = form.leaveType === "compassionate-bereavement";
  const isRestricted = form.leaveType === "restricted-flexi-holiday";

  const submit = (e) => {
    e.preventDefault();
    onSubmit ? onSubmit(form) : console.log("submit", form);
  };

  return (
    <div className="acl-panel">
      <div className="acl-header">
        <div className="acl-title-row">
          <img src={applyCancelIcon} alt="" className="acl-title-icon" />
          <h3>Apply/Cancel Leave</h3>
        </div>
      </div>

      <form className="acl-form" onSubmit={submit}>
        <div className="acl-grid">
          <div className="acl-field">
            <label>Request Type</label>
            <div className="acl-radio-row">
              <label className="acl-radio">
                <input
                  type="radio"
                  name="rt"
                  checked={form.requestType === "apply"}
                  onChange={() => update("requestType", "apply")}
                />
                <span>Apply Leave</span>
              </label>
              <label className="acl-radio secondary">
                <input
                  type="radio"
                  name="rt"
                  checked={form.requestType === "cancel"}
                  onChange={() => update("requestType", "cancel")}
                  disabled={true}
                />
                <span style={{ fontWeight: 400 }}>Cancel Leave</span>
              </label>
            </div>
          </div>

          <div className="acl-field">
            <label>Day Type</label>
            <div className="acl-radio-row">
              <label className="acl-radio">
                <input
                  type="radio"
                  name="dt"
                  checked={form.dayType === "full"}
                  onChange={() => update("dayType", "full")}
                />
                <span>Full day (s)</span>
              </label>
              <label className="acl-radio secondary">
                <input
                  type="radio"
                  name="dt"
                  checked={form.dayType === "first"}
                  onChange={() => update("dayType", "first")}
                  disabled={true}
                />
                <span style={{ fontWeight: 400 }}>First Half</span>
              </label>
              <label className="acl-radio secondary">
                <input
                  type="radio"
                  name="dt"
                  checked={form.dayType === "second"}
                  onChange={() => update("dayType", "second")}
                  disabled={true}
                />
                <span style={{ fontWeight: 400 }}>Second Half</span>
              </label>
            </div>
          </div>

          <div className="acl-field" style={{ position: "relative" }}>
            <button
              type="button"
              className="acl-note-toggle"
              onClick={() => setShowNote(true)}
              aria-label="Show note"
              style={{ position: "absolute", right: "2px", top: "-45px" }}
            >
              <img src={noteIcon} alt="Note" />
            </button>

            {showNote && (
              <>
                {(form.leaveType === "compassionate-bereavement" ||
                  form.leaveType === "long-service-leave" ||
                  form.leaveType === "restricted-flexi-holiday") && (
                  <PopCompassionate onClose={() => setShowNote(false)} />
                )}
                {form.leaveType === "comp-off" && (
                  <PopCompOff onClose={() => setShowNote(false)} />
                )}
                {![
                  "compassionate-bereavement",
                  "comp-off",
                  "long-service-leave",
                  "restricted-flexi-holiday"
                ].includes(form.leaveType) && (
                  <div className="acl-note" style={{ 
                    width: form.leaveType === "out-of-office" ? "550px" : "680px" 
                  }}>
                    <div className="acl-note-beak"></div>
                    <div className={`acl-note-inner ${form.leaveType === "out-of-office" ? "hide-scrollbar" : ""}`} style={{
                      padding: form.leaveType === "out-of-office" ? "10px 16px" : "14px 16px",
                      maxHeight: form.leaveType === "out-of-office" ? "90px" : "auto",
                      overflow: form.leaveType === "out-of-office" ? "auto" : "visible"
                    }}>
                      <div className="acl-note-header">
                        <strong>Note:</strong>
                        <button
                          type="button"
                          className="acl-note-close"
                          aria-label="Close note"
                          onClick={() => setShowNote(false)}
                        >
                          <img src={noteCloseIcon} alt="Close" />
                        </button>
                      </div>
                      <p style={{
                        margin: form.leaveType === "out-of-office" ? "5px 0" : "auto"
                      }}>
                        • For any official work / Team Bonding activity /
                        Conference / Training / Annual Health Check-up / All
                        hands Meet / Meetings / Court Visits / Field Testing /
                        S/W Competency Tests etc. (Reason to be verified by HR)
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Special layout for restricted-flexi, comp-off, and long-service */}
          {form.leaveType === "long-service-leave" ||
          form.leaveType === "comp-off" ||
          form.leaveType === "restricted-flexi-holiday" ? (
            <div className="acl-row-three">
              {/* Use FieldWithLabel component for Long Service Leave route */}
              {form.leaveType === "long-service-leave" ? (
                <FieldWithLabel 
                  label="Leave Type"
                  value="Long Service Leave"
                  onClick={() => {
                    // Keep the same functionality as the dropdown
                    navigate("/");
                  }}
                />
              ) : (
                <div className="acl-field">
                  <label>Leave Type</label>
                  <div className="acl-select">
                    <select
                      style={{
                        fontFamily: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" || form.leaveType === "restricted-flexi-holiday" || form.leaveType === "comp-off" ? "Samsung InterFace" : "inherit",
                        fontSize: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" || form.leaveType === "restricted-flexi-holiday" || form.leaveType === "comp-off" ? "14px" : "inherit",
                        color: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" ? "#333333" :
                               form.leaveType === "restricted-flexi-holiday" || form.leaveType === "comp-off" ? "#202224" : "inherit"
                      }}
                      value={form.leaveType}
                      onChange={(e) => {
                        const v = e.target.value;
                        update("leaveType", v);
                        // Set reason based on leave type
                        if (v === "comp-off") {
                          update(
                            "reason",
                            "I have an important personal matter to attend at my Home town."
                          );
                        } else {
                          update(
                            "reason",
                            "Work on Weekend for Project deployment"
                          );
                        }
                        // navigate to dedicated routes for specific types
                        if (v === "long-service-leave")
                          navigate("/leave/long-service");
                        else if (v === "compassionate-bereavement")
                          navigate("/leave/compassionate");
                        else if (v === "restricted-flexi-holiday")
                          navigate("/leave/restricted-flexi");
                        else if (v === "comp-off") navigate("/leave/comp-off");
                      }}
                    >
                      <option value="out-of-office">Out of Office</option>
                      <option value="long-service-leave">
                        Long Service Leave
                      </option>
                      <option value="compassionate-bereavement">
                        Compassionate / Bereavement Leave
                      </option>
                      <option value="restricted-flexi-holiday">
                        Restricted Holiday / Flexi Holiday
                      </option>
                      <option value="comp-off">Comp off</option>
                    </select>
                  </div>
                </div>
              )}
              
              {/* Show Flexi Holiday List for restricted-flexi */}
              {form.leaveType === "restricted-flexi-holiday" ? (
                <div className="acl-field">
                  <label>Flexi Holiday List</label>
                  <div className="acl-select">
                    <select
                      value={form.flexiHoliday || ""}
                      onChange={(e) => update("flexiHoliday", e.target.value)}
                    >
                      <option value="" disabled>
                        Select flexy holiday
                      </option>
                      <option value="new-year">New Year</option>
                      <option value="regional-festival">Regional Festival</option>
                      <option value="religious-observance">Religious Observance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              ) : (
                <div className="acl-field">
                  <label>From Date</label>
                  <div className="acl-input-icon">
                    <input
                      ref={fromRef}
                      type="date"
                      value={form.fromDate}
                      onChange={(e) => update("fromDate", e.target.value)}
                    />
                    <div className="acl-date-display" style={{
                      fontFamily: form.leaveType === "long-service-leave" || form.leaveType === "comp-off" ? "Samsung InterFace" : "inherit",
                      fontSize: form.leaveType === "long-service-leave" || form.leaveType === "comp-off" ? "14px" : "inherit",
                      color: form.leaveType === "long-service-leave" || form.leaveType === "comp-off" ? "#101928" : "inherit"
                    }}>
                      {form.leaveType === "comp-off" ? 
                        `${formatDate(form.fromDate)} | (Work Duration 11:10 hrs)` : 
                        formatDate(form.fromDate)
                      }
                    </div>
                    <button
                      type="button"
                      className="acl-cal-btn"
                      aria-label="Open from date picker"
                      onClick={() => openPicker(fromRef)}
                    >
                      <img src={datePickerIcon} alt="" />
                    </button>
                  </div>
                </div>
              )}

              <div className="acl-field">
                <label>To Date</label>
                <div
                  className="acl-input-icon"
                >
                  <input
                    ref={toRef}
                    type="date"
                    value={
                      form.leaveType === "comp-off" ? form.toDate : "2025-08-08"
                    }
                    onChange={(e) => {
                      if (form.leaveType === "comp-off") {
                        update("toDate", e.target.value);
                      }
                    }}
                    readOnly={false}
                    style={{
                      backgroundColor: form.leaveType === "long-service-leave" || form.leaveType === "restricted-flexi-holiday" ? "#E5E5E5" : "inherit"
                    }}
                  />
                  <div className="acl-date-display" style={{
                    fontFamily: form.leaveType === "long-service-leave" || form.leaveType === "restricted-flexi-holiday" || form.leaveType === "comp-off" ? "Samsung InterFace" : "inherit",
                    fontSize: form.leaveType === "long-service-leave" || form.leaveType === "restricted-flexi-holiday" || form.leaveType === "comp-off" ? "14px" : "inherit",
                    color: form.leaveType === "long-service-leave" || form.leaveType === "restricted-flexi-holiday" || form.leaveType === "comp-off" ? "#101928" : "inherit"
                  }}>
                    {form.leaveType === "comp-off"
                      ? formatDate(form.toDate)
                      : "08-Aug-2025"}
                  </div>
                  <button
                    type="button"
                    className="acl-cal-btn"
                    aria-label="Open to date picker"
                    disabled={false}
                    onClick={() => openPicker(toRef)}
                  >
                    <img src={datePickerIcon} alt="" />
                  </button>
                </div>
              </div>

              {/* Show Add List button below To Date for restricted-flexi */}
              {form.leaveType === "restricted-flexi-holiday" && (
                <div className="acl-add-list-below" style={{ gridColumn: "3/4", marginTop: "10px" }}>
                  <img
                    src={addLLIcon}
                    alt="Add to Leave list"
                    className="acl-add-list-img"
                    onClick={() => {}}
                  />
                </div>
              )}
              
              {/* Show Add List button in its normal position for other layouts */}
              {form.leaveType !== "restricted-flexi-holiday" && (
                <div className="acl-add-list acl-add-list-right">
                  <img
                    src={addLLIcon}
                    alt="Add to Leave list"
                    className="acl-add-list-img"
                    onClick={() => {}}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="acl-field">
              <label>Leave Type</label>
              <div className="acl-select">
                <select
                  style={{
                    fontFamily: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" || form.leaveType === "restricted-flexi-holiday" || form.leaveType === "comp-off" ? "Samsung InterFace" : "inherit",
                    fontSize: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" || form.leaveType === "restricted-flexi-holiday" || form.leaveType === "comp-off" ? "14px" : "inherit",
                    color: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" ? "#333333" : 
                           form.leaveType === "restricted-flexi-holiday" || form.leaveType === "comp-off" ? "#202224" : "inherit"
                  }}
                  value={form.leaveType}
                  onChange={(e) => {
                    const v = e.target.value;
                    update("leaveType", v);
                    // Set reason based on leave type
                    if (v === "comp-off") {
                      update(
                        "reason",
                        "I have an important personal matter to attend at my Home town."
                      );
                    } else {
                      update(
                        "reason",
                        "Work on Weekend for Project deployment"
                      );
                    }
                    // navigate to dedicated routes for specific types
                    if (v === "long-service-leave")
                      navigate("/leave/long-service");
                    else if (v === "compassionate-bereavement")
                      navigate("/leave/compassionate");
                    else if (v === "restricted-flexi-holiday")
                      navigate("/leave/restricted-flexi");
                    else if (v === "comp-off") navigate("/leave/comp-off");
                  }}
                >
                  <option value="out-of-office">Out of Office</option>
                  <option value="long-service-leave">Long Service Leave</option>
                  <option value="compassionate-bereavement">
                    Compassionate / Bereavement Leave
                  </option>
                  <option value="restricted-flexi-holiday">
                    Restricted Holiday / Flexi Holiday
                  </option>
                  <option value="comp-off">Comp off</option>
                </select>
              </div>
            </div>
          )}

          {isCompassionate && (
            <div className="acl-field">
              <label>Relation</label>
              <div className="acl-select">
                <select
                  value={form.relation || ""}
                  onChange={(e) => update("relation", e.target.value)}
                >
                  <option value="" disabled>
                    Select relation
                  </option>
                  <option value="spouse">Spouse</option>
                  <option value="parent">Parent</option>
                  <option value="child">Child</option>
                  <option value="sibling">Sibling</option>
                  <option value="grandparent">Grandparent</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {!hideSubCategories &&
            !isCompassionate &&
            !isRestricted &&
            form.leaveType !== "comp-off" && (
              <div className="acl-field">
                <label>Sub Categories</label>
                <div className="acl-select">
                  <select
                    style={{
                      color: form.leaveType === "out-of-office" ? "#101928" : "inherit",
                      fontFamily: form.leaveType === "out-of-office" ? "Samsung InterFace" : "inherit",
                      fontSize: form.leaveType === "out-of-office" ? "14px" : "inherit"
                    }}
                    value={form.subCategory}
                    onChange={(e) => update("subCategory", e.target.value)}
                  >
                    <option value="team-bonding">Team Bonding Activity</option>
                  </select>
                </div>
              </div>
            )}

          <div className="acl-row-two">
            {!isRestricted && form.leaveType !== "long-service-leave" && form.leaveType !== "comp-off" && (
              <div className="acl-field" style={{
                width: form.leaveType === "out-of-office" ? "467px" : "auto"
              }}>
                <label>From Date</label>
                <div className="acl-input-icon">
                  <input
                    ref={fromRef}
                    type="date"
                    value={form.fromDate}
                    onChange={(e) => update("fromDate", e.target.value)}
                  />
                  <div className="acl-date-display" style={{
                    fontFamily: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" ? "Samsung InterFace" : "inherit",
                    fontSize: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" ? "14px" : "inherit",
                    color: form.leaveType === "out-of-office" ? "#4f378a" : 
                           form.leaveType === "compassionate-bereavement" ? "#101928" : "inherit"
                  }}>
                    {formatDate(form.fromDate)}
                  </div>
                  <button
                    type="button"
                    className="acl-cal-btn"
                    aria-label="Open from date picker"
                    onClick={() => openPicker(fromRef)}
                  >
                    <img src={datePickerIcon} alt="" />
                  </button>
                </div>
                
                {/* Place acknowledgment below From Date for root route */}
                {form.leaveType === "out-of-office" && (
                  <div style={{ marginTop: "12px" }}>
                    <AcknowledgmentFrame
                      isChecked={form.ack}
                      onChange={(checked) => update("ack", checked)}
                    />
                  </div>
                )}
              </div>
            )}

            {form.leaveType !== "long-service-leave" && form.leaveType !== "comp-off" && !isRestricted && (
              <div style={{ 
                display: "flex", 
                alignItems: "flex-start", 
                marginTop: "2px",
                marginLeft: form.leaveType === "out-of-office" ? "4px" : "0px" 
              }}>
                <div className="acl-field" style={{ 
                  flex: form.leaveType === "out-of-office" ? "none" : "1", 
                  width: form.leaveType === "out-of-office" ? "467px" : "auto" 
                }}>
                  <label>To Date</label>
                  <div className="acl-input-icon">
                    <input
                      ref={toRef}
                      type="date"
                      value={form.toDate}
                      onChange={(e) => update("toDate", e.target.value)}
                    />
                    <div className="acl-date-display" style={{
                      fontFamily: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" ? "Samsung InterFace" : "inherit",
                      fontSize: form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement" ? "14px" : "inherit",
                      color: form.leaveType === "out-of-office" ? "#4f378a" : 
                             form.leaveType === "compassionate-bereavement" ? "#101928" : "inherit"
                    }}>
                      {formatDate(form.toDate)}
                    </div>
                    <button
                      type="button"
                      className="acl-cal-btn"
                      aria-label="Open to date picker"
                      onClick={() => openPicker(toRef)}
                    >
                      <img src={datePickerIcon} alt="" />
                    </button>
                  </div>
                </div>
                {(form.leaveType === "out-of-office" || form.leaveType === "compassionate-bereavement") && (
                  <button 
                    type="button" 
                    className="acl-btn icon-only-btn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px",
                      backgroundColor: "#EFF8FF",
                      border: "1px solid #D0D5DD",
                      borderRadius: "6px",
                      cursor: "pointer",
                      height: "40px",
                      width: "40px",
                      marginLeft: "100px",
                      marginTop: form.leaveType === "compassionate-bereavement" || form.leaveType === "out-of-office" ? "35px" : "25px" /* Adjust vertical position */
                    }}
                    onClick={() => {}}
                    aria-label="Add to Leave list"
                  >
                    <img src={addLLIcon} alt="Add to Leave list" />
                  </button>
                )}
              </div>
            )}
          </div>
          
          {/* Removed acknowledgment from here */}

          <div className="acl-field acl-col-span">
            <label>Reason for Leave</label>
            <textarea
              rows={2}
              value={form.reason}
              onChange={(e) => update("reason", e.target.value)}
              style={{
                textAlign: "left",
                fontSize: "16px", // Updated to 16px as requested
                lineHeight: "145%",
                padding: "35px 16px",
                resize: "none",
                backgroundColor: "#ffffff",
                border: "0.5px solid #d0d5dd",
                borderRadius: "6px",
                height: "90px",
                width: "100%",
                boxSizing: "border-box",
                fontFamily: "Samsung InterFace",
                color: "#000000", // Added color as requested
                verticalAlign: "middle",
                overflow: "hidden"
              }}
              placeholder={
                form.leaveType === "comp-off"
                  ? "I have an important personal matter to attend at my Home town."
                  : "Work on Weekend for Project deployment"
              }
            />
          </div>

          <div className="acl-field acl-col-span">
            <label>Comment</label>
            <textarea
              rows={2}
              value={form.comment}
              onChange={(e) => update("comment", e.target.value)}
              style={{
                textAlign: "left",
                fontSize: "14px", // Kept at 14px as specified for Comment fields
                lineHeight: "145%",
                padding: "35px 16px",
                resize: "none",
                backgroundColor: "#ffffff",
                border: "0.5px solid #d0d5dd",
                borderRadius: "6px",
                height: "90px",
                width: "100%",
                boxSizing: "border-box",
                fontFamily: "Samsung InterFace", // Already set
                color: "#000000", // Updated to #000000 as specified
                verticalAlign: "middle",
                overflow: "hidden"
              }}
              placeholder="I have an important personal matter to attend at my Home town."
            />
          </div>
        </div>

        <div className="acl-footer">
          <div className="acl-actions">
            <button 
              type="button" 
              className="acl-btn ghost" 
              onClick={onCancel}
              style={{
                fontFamily: "Samsung InterFace",
                fontSize: "14px",
                color: "#202224"
              }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="acl-btn primary"
              style={{
                fontFamily: "Samsung InterFace",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#f5f5f5"
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyCancelLeaveForm;