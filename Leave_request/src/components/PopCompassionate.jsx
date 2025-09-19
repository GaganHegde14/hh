import React from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  width: 521px;
  height: 97px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  top: -23px;
  right: -6px;
  margin-top: 8px;
  z-index: 1000;
`;

const Beak = styled.div`
  position: absolute;
  top: -5px;
  right: 25px;
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background: #ffffff;
  border-left: 1px solid #e5e7eb;
  border-top: 1px solid #e5e7eb;
`;

const NoteText = styled.span`
  font-family: "Samsung InterFace", sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #202224;
  line-height: 139.9%;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ContentText = styled.p`
  font-size: 14px;
  color: #606060;
  line-height: 145%;
  margin: 0;
  padding: 28px 10px 19px 10px;
  width: 501px;

  strong {
    color: #606060;
    font-weight: bold;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 11px;
  right: 12px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: #38aee0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: #38aee0;
    top: 50%;
    left: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const PopCompassionate = ({ onClose }) => {
  return (
    <TooltipContainer visible={true}>
      <Beak />
      <NoteText>Note:</NoteText>
      <ContentText>
        • <strong>5</strong> days – can be availed for the death of an immediate
        family member such as Parents/ Spouse/Children/Siblings/ Grandparents /
        In-Laws
      </ContentText>
      <CloseIcon onClick={onClose} />
    </TooltipContainer>
  );
};

export default PopCompassionate;
