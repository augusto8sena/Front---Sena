<script setup>
    import { ref } from 'vue';
    let texto = ref('')
</script>
<template>
    <input type="text" v-model="texto"></input>
    <p>Valor do input: {{ texto }}</p>
</template>