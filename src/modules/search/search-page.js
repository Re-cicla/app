import {useRouteMatch} from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line require-jsdoc
export default function SearchPage() {
  const match = useRouteMatch('hello');

  // eslint-disable-next-line require-jsdoc
  function onClick() {
    alert('hola cristina, apaga la radio porfa');
  }
  return (<div>
    <button onClick={onClick}>{match} and hello</button>
  </div>);
}
