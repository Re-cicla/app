import styled from 'styled-components';
import React from 'react';

const ButtonWrapper = styled.button`
  /* Adapt the colors based on primary prop */
  background-color: ${(props) => (props.color ? props.color : 'white')};
  color: ${(props) => (props.color ? props.color : 'white')};
  margin: 0.3em;
  padding: 1em;
  border: 2px solid ${(props) => (props.color ? props.color : 'white')};
  border-radius: 1.8em;
`;

const SpanWrapper = styled.span`
  color: ${(props) => (props.fill ? 'white' : 'black')};
  font-size: 1.2rem;
  font-family: Source Sans Pro;
`;

const Button = (props) => {
  let btnColor = 'white';
  if (props.color === 'yellow') {
    btnColor = '#FEBE29';
  } else if (props.color === 'green') {
    btnColor = '#C6D3B4';
  }

  if (props.disabled) {
    btnColor = 'gray';
  }

  return (
    <ButtonWrapper {...props} color={btnColor}>
      <SpanWrapper fill={props.color}>{props.btnText}</SpanWrapper>
    </ButtonWrapper>
  );
};

export default Button;
