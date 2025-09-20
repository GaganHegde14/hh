import React from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  width: 521px;
  height: 118px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  position: absolute;
  padding: 10px;
  box-sizing: border-box;
  display: ${props => props.visible ? 'block' : 'none'};
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
  font-family: 'Samsung InterFace', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #202224;
  line-height: 139.9%;
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ContentText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 145%;
  margin: 0;
  padding: 28px 10px 12px 10px;
  width: 501px;
  color: #606060;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding-left: 15px;
    margin-bottom: 8px;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #606060;
    }
  }

  li:last-child {
    color: #38AEE0;
    cursor: pointer;
    text-decoration: underline;
    
    &:before {
      content: "•";
      position: absolute;
      left: 0;
      color: #38AEE0;
    }
  }
  
  a {
    color: inherit;
    text-decoration: inherit;
    cursor: pointer;
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
    content: '';
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

const PopCompOff = ({ visible = true, onClose, onFaqClick }) => {
  return (
    <TooltipContainer visible={visible}>
      <Beak />
      <NoteText>Note:</NoteText>
      <ContentText>
        <ul>
          <li>Can be availed for working on a non-working day (Sat, Sun & any Company declared General Holiday).</li>
          <li><a onClick={onFaqClick}>Click here to refer to the FAQ on Comp off process</a></li>
        </ul>
      </ContentText>
      <CloseIcon onClick={onClose} />
    </TooltipContainer>
  );
};

export default PopCompOff;