<script setup lang="ts">
import { Icon } from "@iconify/vue";

defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="modal-wrapper">
    <div class="modal-header">
      <h1>{{ title }}</h1>
      <button @click="$emit('closeModal')" class="close-button">
        <Icon icon="ant-design:close-circle-outlined" width="24" />
      </button>
    </div>
    <div class="modal-main">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.modal-wrapper {
  display: flex;
  flex-direction: column;
  z-index: 999999999;
  /* TODO: Change background color here */
  /* background-color: red; */
  background-color: black;
  border-radius: 8px;
  padding: 16px;
  min-width: 22%;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .close-button {
    /* TODO: Andrew change color here */
    color: white;
    background: none;
    border: none;
    padding: 4px;
    cursor: pointer;
  }
}
</style>
