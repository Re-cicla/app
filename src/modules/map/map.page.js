import React from 'react';
// import {MapContainer, useMap} from 'react-leaflet';
// import {useRequest} from 'ahooks';
// import {MapContainer, TileLayer, Marker, Popup} from 'leaflet';
// import axios from 'axios';

import {Map, Layers, layer} from 'react-openlayers';
import * as ol from 'openlayers';

export default function MapPage() {
  /*
    const {data, error, loading} = useRequest(
      'http://localhost:8080/containers',
      {
        requestMethod: (param: any) => axios(param),
      },
    );

    console.log(data);
    console.log(error);
    console.log(loading);
       */

  // const position = [39.975667, -0.049358];
  return (
    <Map>
      <Layers>
        <layer.Tile source={new ol.source.Stamen({layer: 'watercolor'})} />
      </Layers>
    </Map>
  );
}
