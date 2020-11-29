import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const CameraIconWrapper = styled.div`
  margin: 0 auto;
  background-color: #cecece;
  width: 100px;
  height: 100px;
  border-radius: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CameraButton() {
  const performRequest = (value) => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({image: value}),
    };
    fetch(
      'https://recicla-backend-5skjzjww5a-ew.a.run.app/predict',
      requestOptions,
    )
      .then((response) => response.json())
      .then((data) => alert(JSON.stringify(data)));
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function () {
        console.log(reader.result);
        performRequest(reader.result);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  };

  return (
    <CameraIconWrapper>
      <FontAwesomeIcon icon={['fas', 'camera']} size='3x' />
      <input
        type='file'
        accept='image/*'
        capture='camera'
        onChangeCapture={(event) => onImageChange(event)}
      />
    </CameraIconWrapper>
  );
}
