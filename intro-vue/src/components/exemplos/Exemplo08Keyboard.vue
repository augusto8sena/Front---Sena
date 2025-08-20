<script setup>
import { ref } from 'vue';
let inputValue = ref('');

function mensagem(){
    alert(`Você digitou: ${inputValue.value}`);
}
</script>

<template>
    input type="text" v-model="inputValue" @keyup.enter="mensagem" placeholder="Digite algo e pressione Enter">
</template>