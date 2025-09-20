import React from "react";
import styled from "styled-components";

const Frame = styled.div`
  display: flex;
  align-items: center;
  min-width: 383px;
  width: fit-content;
  height: 15px;
`;

const IconWrapper = styled.div`
  width: 15px;
  height: 15px;
  position: relative;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  z-index: 2;
`;

const CheckboxIcon = styled.div`
  width: 15px;
  height: 15px;
  background: ${props => props.checked ? "#2f80ed" : "#ffffff"};
  border: 1px solid ${props => props.checked ? "#2f80ed" : "#d0d5dd"};
  border-radius: 2px;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  
  &::after {
    content: "";
    position: absolute;
    display: ${props => props.checked ? "block" : "none"};
    left: 5px;
    top: 2px;
    width: 3px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const Text = styled.span`
  font-family: "Samsung InterFace", sans-serif;
  font-size: 14px;
  line-height: 145%;
  color: #000000;
  padding: 2px 0 2px 20px;
  vertical-align: middle;
  white-space: nowrap;
`;

const AcknowledgmentFrame = ({ isChecked, onChange }) => {
  return (
    <Frame>
      <IconWrapper>
        <CheckboxInput 
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <CheckboxIcon checked={isChecked} />
      </IconWrapper>
      <Text>
        I acknowledge that this OOO request is for official purpose only.
      </Text>
    </Frame>
  );
};

export default AcknowledgmentFrame;