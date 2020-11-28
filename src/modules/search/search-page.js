import {useRouteMatch} from 'react-router-dom';
import React from 'react';

// eslint-disable-next-line require-jsdoc
export default function SearchPage() {
  const match = useRouteMatch('hello');

  return (<div>
    <button>{match} and hello</button>
  </div>);
}
