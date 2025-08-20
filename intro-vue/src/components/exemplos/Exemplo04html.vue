<script setup>
let text = '<p style="color: red;">Texto em HTML</p>';
</script>

<template>
    <div v-html="texto"></div>
    <div>{{ texto }}</div>
</template>