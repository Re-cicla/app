import {useRequest} from 'ahooks';
import React, {useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router';

export default () => {
  const {data, error, loading} = useRequest(
    'http://localhost:8080/containers',
    {
      requestMethod: (param: any) => axios(param),
    },
  );
  const [route, setRoute] = useHistory();
  console.log(route);

  useEffect(() => {
    if (data) {
      setRoute('/map');
    }
  });

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>Number: {data?.data}</div>;
};
