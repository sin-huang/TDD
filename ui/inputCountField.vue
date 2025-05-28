<template>
    <input type="text" v-model="content">
    <p>你輸入 {{ content.length }} 個字</p>
</template>

<script setup>
    import { ref } from "vue";
    const content = ref('');
</script>