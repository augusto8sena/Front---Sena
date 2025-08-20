<script setup>
let compras = ['Pão', 'Leite', 'Ovos', 'Queijo', 'Frutas'];
</script>
<template>
    <ol class="compras">
        <li v-for="(item, index) in compras" :key="index">
            {{ index + 1 }} {{ item }}
        </li>
    </ol>
</template>
<style>
.compras {
    list-style-type: none;
}
</style>