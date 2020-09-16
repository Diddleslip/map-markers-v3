import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import './Map.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import MapData from "./MapData.json";

mapboxgl.accessToken = 'pk.eyJ1IjoibGFtYmRhbGFiczI1ZWNvc29hcCIsImEiOiJja2VhZWRhOG4wNmU5MnNxZXQ0bmhxZnU3In0.zWyuwunBSy51dulZG9gowQ';

function MapMap() {
  useEffect(() => {
    // Snippet below is to initialize the map
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/lambdalabs25ecosoap/ckeaib2n30b4f19mq6mj2dsq3', // stylesheet location
      center: [-75.5, 45.3], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    // /*-------------- Inside Search-Bar functionality START --------------*/
    // map.addControl(
    //   new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl
    //   })
    // );
    // /*-------------- Inside Search-Bar functionality END --------------*/

    // /*-------------- Outside Search-Bar functionality START --------------*/
    // var geocoder = new MapboxGeocoder({
    //   accessToken: mapboxgl.accessToken,
    //   mapboxgl: mapboxgl
    // });
    // geocoder.onAdd(map);
    // geocoder.addTo('.geocoder');
    // /*-------------- Outside Search-Bar functionality END --------------*/

    // /*-------------- Track user functionality START --------------*/
    // map.addControl(
    //   new mapboxgl.GeolocateControl({
    //   positionOptions: {
    //   enableHighAccuracy: true
    //   },
    //   trackUserLocation: true
    //   })
    // );
    // /*-------------- Track user functionality END --------------*/

    /*-------------- Marker functionality START --------------*/
    // var marker = new mapboxgl.Marker()
    //   .setLngLat([-74.5, 40]) // [lng, lat]
    //   .addTo(map);
    /*-------------- Marker functionality END --------------*/

    console.log("This is MapData: ", MapData.features);
    MapData.features.map(marker => {
      var popup = new mapboxgl.Popup({ offset: 25 }).setText(marker.properties.DESCRIPTION);
      // var marker = new mapboxgl.Marker()     // Substitue for line below if we try adding icons.
      new mapboxgl.Marker()
        // .setDraggable(true)
        .setPopup(popup)
        .setLngLat([marker.geometry.coordinates[0], marker.geometry.coordinates[1]]) // [lng, lat]
        .addTo(map);
      
      // return(
      //   // <div className="markerDiv">{marker}</div>
      // );
    })
  }, []);

  return (
    <section>
      <div className="geocoder"/>
      <div id="map"/>
    </section>
  )
}

export default MapMap;
