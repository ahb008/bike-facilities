<script setup lang="ts">
import type { FacilityDistribution } from "@/types/types";
import { Icon } from "@iconify/vue";
import { bikeFacilities } from "../utils/general.ts";

defineProps<{
  title: string;
  facilityDistribution: FacilityDistribution; //Quantity of facilities by type
}>();
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal-header">
      <h1>{{ title }}</h1>
      <button @click="$emit('closeModal')" class="close-button" aria-label="Close Modal">
        <Icon icon="ant-design:close-circle-outlined" width="18" />
      </button>
    </div>
    <div class="modal-main">
      <p>The interactive map below displays Portland's bike facilities.</p>
      <p>Click on a facility for more information.</p>
      <!-- Table for facility color key and quantity -->
      <div class="facility-table-wrapper">
        <div v-for="(f, code) in facilityDistribution" :key="code" class="row">
          <div
            class="circle"
            :style="{ background: bikeFacilities[code]?.color }"
          />
          <p>{{ bikeFacilities[code]?.description }} ({{ code }})</p>
          <p class="facility-count">{{ f }}</p>
        </div>
      </div>
      <!-- Key for solid vs. dashed facilities -->
      <div class="stroke-key">
        <div class="dashed-line" />
        <p>Planned</p>
      </div>
      <div class="stroke-key">
        <div class="solid-line" />
        <p>Active</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/colors.module.scss";

.modal-wrapper {
  display: flex;
  flex-direction: column;
  z-index: 999999999;
  background-color: $primary-navy;
  border-radius: 8px;
  padding: 12px;
  margin-top: 16px;
  margin-left: 16px;
  gap: 16px;
  width:80%;
  max-width: 460px;
  margin-left: 50px;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-button {
    color: $gray-light;
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 4px;
    margin-right: 4px;
  }
}
.facility-table-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 16px;
}
.row {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.facility-count {
  margin-left: auto;
}

.stroke-key {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dashed-row {
  display: flex;
  align-items: center;
}
.dashed-line {
  width: 40px;
  border-top: 4px dashed $primary-teal;
}
.solid-line {
  width: 40px;
  border-top: 4px solid $primary-teal;
}
</style>
