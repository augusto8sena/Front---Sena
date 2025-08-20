<script setup>
import { ref } from 'vue'

let usuarioLogado = ref(false)

function trocarEstado() {
    usuarioLogado.value = !usuarioLogado.value
}
</script>

<template>
    <div>
        <p v-if="usuarioLogado">Bem-vindo!</p>
        <p v-else>Faça login</p>
        <button @click="trocarEstado">
            Fazer Login / Sair
        </button>
    </div>
</template>
<style>
button {
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
button:hover {
    background-color: #45a049;
}
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
</style>