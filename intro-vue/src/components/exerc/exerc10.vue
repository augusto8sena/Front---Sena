<script setup>
import { ref, computed } from 'vue';

const peso = ref('');
const altura = ref('');

function calcularIMC(peso, altura) {
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    if (!p || !a) return '';
    return (p / (a * a)).toFixed(2);
}

function classificarIMC(imc) {
    const valor = parseFloat(imc);
    if (!valor) return '';
    if (valor < 18.5) return 'Abaixo do peso';
    else if (valor < 25) return 'Peso normal';
    else if (valor < 30) return 'Sobrepeso';
    else if (valor < 35) return 'Obesidade grau I';
    else if (valor < 40) return 'Obesidade grau II';
    else return 'Obesidade grau III';
}

const imc = computed(() => calcularIMC(peso.value, altura.value));
const classificacao = computed(() => classificarIMC(imc.value));
</script>

<template>
    <div>
        <h1>Cálculo de IMC</h1>
        <label>Peso (kg): <input type="number" v-model="peso" step="0.01" /></label><br />
        <label>Altura (m): <input type="number" v-model="altura" step="0.01" /></label><br />
        <p v-if="imc">IMC: {{ imc }}</p>
        <p v-if="classificacao">Classificação: {{ classificacao }}</p>
    </div>
</template>