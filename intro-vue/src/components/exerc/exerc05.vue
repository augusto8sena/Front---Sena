<script setup>
import { ref } from 'vue'
const idade = ref(20)
</script>
<template>
    <p>Sua idade é {{ idade }} anos</p>
    <div v-if="idade >= 0 && idade <= 12">Criança</div>
    <div v-else-if="idade >= 13 && idade <= 17">Adolescente</div>
    <div v-else-if="idade >= 18 && idade <= 59">Adulto</div>
    <div v-else>Idoso</div>
</template>

<style>


p {
    font-size: 20px;
    color: rgb(255, 255, 255);
}
p:hover {
    color: rgb(138, 138, 138);
}
h1 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    text-align: center;
}
h1:hover {
    color: rgb(138, 138, 138);
}
h1, p {
    font-family: 'Courier New', Courier, monospace;
}
h1, p {
    text-align: center;
}
button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
h1 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    text-align: center;
}
</style>