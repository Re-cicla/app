import React from 'react';
import Button from '../../common/button';
import styled from 'styled-components';
import CameraButton from './components/camera-button';

const PageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  color: white;
`;

const HorizontalButtonsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;

const TitleWrapper = styled.h1`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  color: black;
  margin: 0 auto;
  text-align: center;
  padding-top: 3em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  margin-bottom: 2em;
`;

const SubtitleWrapper = styled.h3`
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  color: black;
  margin: 0 auto;
  text-align: center;
  padding-top: 3em;
  padding-right: 0.5em;
  padding-left: 0.5em;
  margin-bottom: 2em;
`;

export default function SearchPage() {
  return (
    <PageWrapper>
      <TitleWrapper>¿Qué quieres reciclar hoy?</TitleWrapper>
      <HorizontalButtonsWrapper>
        <Button color={'yellow'} btnText={'buscador'}></Button>
        <Button color={'yellow'} btnText={'contenedores'}></Button>
      </HorizontalButtonsWrapper>
      <SubtitleWrapper>
        ¿No sabes donde tirarlo? hagámosle una foto
      </SubtitleWrapper>
      <CameraButton />
    </PageWrapper>
  );
}
