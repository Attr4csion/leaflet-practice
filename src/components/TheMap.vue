<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import leaflet from 'leaflet';
import { onMounted } from 'vue';
// import { useGeolocation } from '@vueuse/core';
import {  nearbyMarkers } from '../Map';

let map: leaflet.Map;
// let userGeoMarker: leaflet.Marker;

onMounted(() => {
  let a = localStorage.getItem('coords');
  let coord = JSON.parse(a);

  map = leaflet.map('map').setView([coord.latitude, coord.longitude], 13);

  leaflet.marker([coord.latitude, coord.longitude]).addTo(map).bindPopup('lol');

  leaflet
    .tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    })
    .addTo(map);

  nearbyMarkers.value.forEach(({ latitude, longitude }) => {
    leaflet
      .marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `Saved Marker at (<strong>${latitude.toFixed(2)},${longitude.toFixed(
          2
        )}</strong>)`
      );
  });

  map.addEventListener('click', (e) => {
    const { lat: latitude, lng: longitude } = e.latlng;

    leaflet
      .marker([latitude, longitude])
      .addTo(map)
      .bindPopup(
        `Saved Marker at (<strong>${latitude.toFixed(2)},${longitude.toFixed(
          2
        )}</strong>)`
      );

    nearbyMarkers.value.push({ latitude, longitude });
  });
});

// watchEffect(() => {
//   if (
//     coords?.latitude !== Number.POSITIVE_INFINITY &&
//     coords?.longitude !== Number.POSITIVE_INFINITY
//   ) {
//     userMarker.value.latitude = coords?.latitude;
//     userMarker.value.longitude = coords?.longitude;

//     if (userGeoMarker) {
//       map.removeLayer(userGeoMarker);
//     }

//     userGeoMarker = leaflet
//       .marker([userMarker.value.latitude, userMarker.value.longitude])
//       .addTo(map)
//       .bindPopup('User Marker');

//     map.setView([userMarker.value.latitude, userMarker.value.longitude], 13);

//     const el = userGeoMarker.getElement();
//     if (el) {
//       el.style.filter = 'hue-rotate(120deg)';
//     }
//   }
// });
</script>

<style scoped>
#map {
  width: 600px;
  height: 600px;
}
</style>
