import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {useRef} from 'react';
import {useState} from 'react';
import {useCallback} from 'react';

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
  const fileRef = useRef();
  const [imageSrc, setImageSrc] = useState(null);

  const onImageChange = useCallback(async (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = async function (ev) {
        setImageSrc(ev.target.result);
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({image: reader.result}),
        };
        fetch(
          'https://recicla-backend-5skjzjww5a-ew.a.run.app/predict',
          requestOptions,
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            alert(
              data.type === 'ORGANICO' ?
                'Residuo orgánico detectado.' :
                'Residuo NO orgánico detectado.',
            );
          });
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }, []);

  const triggerClick = () => {
    fileRef.current.click();
  };

  function RenderImage(props) {
    if (props.imageSrc) {
      return (
        <img
          style={{
            margin: '2em auto 0px auto',
            borderRadius: '250px',
            display: 'block',
          }}
          id='img-ai'
          width='400px'
          height='400px'
          src={props.imageSrc}
        />
      );
    } else {
      return (
        <h3 style={{color: 'black', textAlign: 'center', marginTop: '4em'}}>
          Selecciona una foto para empezar a reciclar
        </h3>
      );
    }
  }

  return (
    <div>
      <CameraIconWrapper onClick={triggerClick}>
        <FontAwesomeIcon icon={['fas', 'camera']} size='3x' />
        <input
          id='selectedImage'
          hidden
          type='file'
          accept='image/*'
          capture='camera'
          onChange={onImageChange}
          ref={fileRef}
        />
      </CameraIconWrapper>
      <RenderImage imageSrc={imageSrc} />
    </div>
  );
}
