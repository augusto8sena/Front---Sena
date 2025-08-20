<script setup>
let nomes = ['Sena', 'Italo', 'Livia', 'Miguel', 'Agnaldo', 'Isadora']
</script>

<template>
    <div>
        <h1>Lista de Nomes</h1>
        <ul>
            <li v-for="(nome, index) in nomes" :key="index">{{ index + 1 }}. {{ nome }}</li>
        </ul>
    </div>
</template>