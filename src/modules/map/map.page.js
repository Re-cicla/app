import React from "react";
import Button from "../../common/button";
import styled from "styled-components";

const HorizontalButtonsWrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MapPage() {
  return (
    <HorizontalButtonsWrapper>
      <Button primary>Im a map</Button>
    </HorizontalButtonsWrapper>
  );
}
