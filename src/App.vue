<script setup lang="ts">
import { ref, onMounted } from "vue";
import geojsonData from "./assets/bike-facilities.json";
import { applyColor, bikeFacilities } from "./utils/general.ts";
import { Icon } from "@iconify/vue";
import Modal from "./components/Modal.vue";
import FacilityInventory from "./components/FacilityInventory.vue";

const mapElement = ref(null);
const openInfoModal = ref(false);

const addPopup = (feature, layer) => {
  const { description, mapClass } = bikeFacilities[feature.properties.Facility];
  const popupContent = `
    <h2>${feature.properties.SegmentName}</h2>
    <br/>
    <h3>Facility Description: ${description}</h3>
    <h3>Map Class: ${mapClass}</h3>
  `;
  layer.bindPopup(popupContent);
};

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

onMounted(() => {
  var map = L.map(mapElement.value).setView([45.52, -122.67], 12);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const featureArray = geojsonData.features;

  featureArray.map((feature) => {
    const isPlanned = feature.properties.Status === "PLANNED";
    const facilityType = feature.properties.Facility;

    facilityDistribution[facilityType]++;

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
      <button class="icon-button" @click="openInfoModal = true">
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
    >
      <FacilityInventory :facilityDistribution />
    </Modal>
    <div id="map" ref="mapElement"></div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .icon-button {
      /* TODO: Andrew change color here */
      color: white;
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
