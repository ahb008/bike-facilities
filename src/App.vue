<script setup lang="ts">
import { ref, onMounted } from "vue";
import geojsonData from "./assets/bike-facilities.json";
import TheWelcome from "./components/TheWelcome.vue";
import PopUp from "./components/PopUp.vue";
import { applyColor, bikeFacilities } from "./utils/general.ts";

const mapElement = ref(null);

const addPopup = (feature, layer) => {
  const {description, mapClass}: string = bikeFacilities[feature.properties.Facility];
  const popupContent = `
    <h2>${feature.properties.SegmentName}</h2>
    <br/>
    <h3>Facility Description: ${description}</h3>
    <h3>Map Class: ${mapClass}</h3>
  `;
  layer.bindPopup(popupContent);
};

onMounted(() => {
  var map = L.map(mapElement.value).setView([45.52, -122.67], 12);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const featureArray = geojsonData.features;

  const applyFeaturesAndPopups = featureArray.map((feature) => {
    const isPlanned = feature.properties.Status === "PLANNED";

    L.geoJSON(feature, {
      onEachFeature: addPopup,
      style: { color: applyColor(feature) },
      dashArray: isPlanned ? 5 : 0,
    }).addTo(map);
  });
});
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Portland Bike Lines</h1>
    </div>
  </header>

  <main>
    <div id="map" ref="mapElement"></div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

#map {
  height: 80vh;
  width: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
  }
}
</style>
