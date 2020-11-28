import React from 'react';
import Button from '../../components/button';
import styled from 'styled-components';

export default function SearchPage() {
  const HorizontalButtonsWrapper = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <HorizontalButtonsWrapper>
      <Button primary> and hello</Button>
      <Button> and hello</Button>
    </HorizontalButtonsWrapper>);
}
