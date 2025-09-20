import React, { useState } from 'react';
import styled from 'styled-components';
import dropdownIcon from "../assets/svg/dropdown.svg";

const Container = styled.div`
  width: 410px;
  height: 70px; /* Reduced height to move everything up */
  position: relative;
  margin-top: -8px; /* Added negative margin to move up */
`;

const Label = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-weight: bold;
  font-size: 16px;
  line-height: 145%;
  color: #202224;
  position: absolute;
  top: 0;
  left: 0;
`;

const ComponentField = styled.div`
  width: 410px;
  height: 48px;
  position: absolute;
  top: 32px; /* Reduced top position to move field up */
  left: 0;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 12px;
`;

const FrameInner = styled.div`
  width: 386px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FieldText = styled.div`
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 16px;
  letter-spacing: 0.015em; /* 1.5% */
  line-height: 150%;
  color: #333333;
`;

const ChevronDown = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const ErrorText = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #e46363;
  position: absolute;
  top: 98px;
  left: 0;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const FieldWithLabel = ({ 
  label = "Leave Type", 
  value = "Long Service Leave",
  showError = false,
  errorText = "please fill the field",
  onClick,
  readOnly = true
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <ComponentField onClick={onClick}>
        <FrameInner>
          <FieldText>{value}</FieldText>
          <ChevronDown src={dropdownIcon} alt="dropdown" />
        </FrameInner>
      </ComponentField>
      <ErrorText visible={showError}>{errorText}</ErrorText>
    </Container>
  );
};

export default FieldWithLabel;