import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationComponent from './location'

export default function SimpleMap(): JSX.Element {

  const [center] = useState({lat: 11.0168, lng: 76.9558 });
  const [zoom] = useState(11);

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: 'AIzaSyBwoG-8W_kZDLNeQTs52xljtWm-GNZ5HPU' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <LocationComponent
            lat={11.0168}
            lng={76.9558}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
    }
