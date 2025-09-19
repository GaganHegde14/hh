import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 813px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  font-family: 'Samsung InterFace', sans-serif;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #202224;
  line-height: 20px;
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${props => props.selected ? '#202224' : '#a9a8aa'};
  font-size: 14px;
  line-height: 145%;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
`;

const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${props => props.checked ? '#38aee0' : '#a9a8aa'};
  border-radius: 50%;
  margin: 0;
  position: relative;
  cursor: pointer;
  background-color: transparent;

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    background-color: #38aee0;
    border-radius: 50%;
  }
`;

const RequestTypeSection = () => {
  const [requestType, setRequestType] = useState('apply');
  const [dayType, setDayType] = useState('full');

  return (
    <Container>
      <Section>
        <Label>Request Type</Label>
        <OptionsContainer>
          <Option selected={requestType === 'apply'}>
            <RadioInput
              type="radio"
              name="requestType"
              value="apply"
              checked={requestType === 'apply'}
              onChange={(e) => setRequestType(e.target.value)}
            />
            <span style={{ color: requestType === 'apply' ? '#202224' : '#a9a8aa' }}>
              Apply Leave
            </span>
          </Option>
          <Option selected={requestType === 'cancel'}>
            <RadioInput
              type="radio"
              name="requestType"
              value="cancel"
              checked={requestType === 'cancel'}
              onChange={(e) => setRequestType(e.target.value)}
            />
            <span style={{ color: requestType === 'cancel' ? '#202224' : '#a9a8aa' }}>
              Cancel Leave
            </span>
          </Option>
        </OptionsContainer>
      </Section>

      <Section>
        <Label>Day Type</Label>
        <OptionsContainer>
          <Option selected={dayType === 'full'}>
            <RadioInput
              type="radio"
              name="dayType"
              value="full"
              checked={dayType === 'full'}
              onChange={(e) => setDayType(e.target.value)}
            />
            <span style={{ color: dayType === 'full' ? '#202224' : '#a9a8aa' }}>
              Full day (s)
            </span>
          </Option>
          <Option selected={dayType === 'firstHalf'}>
            <RadioInput
              type="radio"
              name="dayType"
              value="firstHalf"
              checked={dayType === 'firstHalf'}
              onChange={(e) => setDayType(e.target.value)}
            />
            <span style={{ color: dayType === 'firstHalf' ? '#202224' : '#a9a8aa' }}>
              First Half
            </span>
          </Option>
          <Option selected={dayType === 'secondHalf'}>
            <RadioInput
              type="radio"
              name="dayType"
              value="secondHalf"
              checked={dayType === 'secondHalf'}
              onChange={(e) => setDayType(e.target.value)}
            />
            <span style={{ color: dayType === 'secondHalf' ? '#202224' : '#a9a8aa' }}>
              Second Half
            </span>
          </Option>
        </OptionsContainer>
      </Section>
    </Container>
  );
};

export default RequestTypeSection;