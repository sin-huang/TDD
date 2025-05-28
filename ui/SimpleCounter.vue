<template>
  <button data-testid="minusBtn" @click="minus">-</button>
  <span>{{ num }}</span>
  <button data-testid="plusBtn" @click="plus">+</button>
</template>

<script setup>
import { ref } from "vue";
const num = ref(0);

function plus() {
  num.value++;
}

function minus() {
  if (num.value == 0) {
    return 0;
  }
  return num.value--;
}
</script>
