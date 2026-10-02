<script setup lang="ts">
import type { FacilityDistribution } from "@/types/types";
import { bikeFacilities } from "../utils/general.ts";

defineProps<{
  facilityDistribution: FacilityDistribution;
}>();
</script>

<template>
  <div class="facility-table-wrapper">
    <p class="description"></p>
    <div v-for="(f, code) in facilityDistribution" :key="code" class="row">
      <div
        class="circle"
        :style="{ background: bikeFacilities[code]?.color }"
      />
      <p>{{ bikeFacilities[code]?.description }} ({{ code }})</p>
      <p class="facility-count">{{ f }}</p>
    </div>
  </div>
</template>

<style scoped>
.facility-table-wrapper {
  display: flex;
  flex-direction: column;
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
</style>
