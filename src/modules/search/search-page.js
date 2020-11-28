import {useRouteMatch} from 'react-router-dom';

export default function SearchPage() {
  const match = useRouteMatch('hello');

  return (<div>
    <button>{match}</button>
  </div>);
}
