<script setup lang="ts">
import { ref, onMounted } from "vue";
import L from "leaflet";
import type { Layer } from "leaflet";
import rawData from "./assets/bike-facilities.json";
import { bikeFacilities } from "./utils/general.ts";
import { Icon } from "@iconify/vue";
import Modal from "./components/Modal.vue";
import type {
  BikeFacilityFeature,
  FacilityCode,
  BikeFacilityCollection,
} from "./types/types.ts";

const mapElement = ref(null);
const openInfoModal = ref(false);

const geojsonData = rawData as BikeFacilityCollection;

// Adds popup to bike facility feature with informational content
const addPopup = (feature: BikeFacilityFeature, layer: Layer) => {
  const { description, mapClass } = bikeFacilities[feature.properties.Facility];
  const popupContent = `
    <h2>${feature.properties.SegmentName}</h2>
    <br/>
    <h3>Facility Description: ${description}</h3>
    <h3>Map Class: ${mapClass}</h3>
  `;
  layer.bindPopup(popupContent);
};

// Initializes facility record that will be used to count each facility type
let facilityDistribution = {
  ABL: 0,
  BBBL: 0,
  BL: 0,
  BBL: 0,
  ESR: 0,
  LSB: 0,
  NG: 0,
  PBL: 0,
  SBBL: 0,
  SIR: 0,
  TRL: 0,
};

// Use onMounted to wait until DOM container exists before applying map and it's layers 
onMounted(() => {
  if (!mapElement.value) return;
  var map = L.map(mapElement.value).setView([45.52, -122.67], 12);

  //Creates map layer using Open Street Map
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const featureArray = geojsonData.features;

  featureArray.map((feature) => {
    const isPlanned = feature.properties.Status === "PLANNED";
    const facilityType: FacilityCode = feature.properties.Facility;

    facilityDistribution[facilityType]++; // Tracks quantity of each facility type

    // Add each bike feature to the geoJSON layer and add to map
    // Note: addPopup appends informational popup to each bike feature
    L.geoJSON(feature, {
      onEachFeature: addPopup,
      style: {
        color: bikeFacilities[facilityType].color,
        dashArray: isPlanned ? "4, 4" : "",
      },
    }).addTo(map);
  });
});
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Portland Bike Facilities</h1>
      <button class="icon-button" @click="openInfoModal = true" aria-label="Information Modal">
        <Icon icon="carbon:information" width="24" />
      </button>
    </div>
  </header>

  <main>
    <Modal
      class="modal"
      v-if="openInfoModal"
      @close-modal="openInfoModal = false"
      title="Map Information"
      :facilityDistribution
    />
    <div id="map" ref="mapElement"></div>
  </main>
</template>

<style scoped lang="scss">
@import "./assets/colors.module.scss";

header {
  line-height: 1.5;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .icon-button {
      color: $gray-light;
      background: none;
      border: none;
      padding: 8px;
      cursor: pointer;
    }
  }
}

.modal {
  position: absolute;
}

#map {
  height: 80vh;
  width: 100%;
}
</style>
