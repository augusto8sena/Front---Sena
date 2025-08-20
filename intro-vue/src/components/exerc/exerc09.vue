<script setup>
import { ref } from 'vue';
let nome = ref('');
let email = ref('');
let idade = ref('');
let bio = ref('');
</script>

<template>
    <div>
        <label>Nome: <input type="text" v-model="nome" /></label><br />
        <label>Email: <input type="email" v-model="email" /></label><br />
        <label>Idade: <input type="number" v-model="idade" /></label><br />
        <label>Bio: <textarea v-model="bio"></textarea></label>
        <p>Nome: {{ nome }}</p>
        <p>Email: {{ email }}</p>
        <p>Idade: {{ idade }}</p>
        <p>Bio: {{ bio }}</p>
    </div>
</template>
<style scoped>
div {
    max-width: 400px;
    margin: 30px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #000000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
label {
    display: block;
    margin-bottom: 12px;
    font-weight: 500;
}
input, textarea {
    width: 100%;
    padding: 6px 8px;
    margin-top: 4px;
    border: 1px solid #bbb;
    border-radius: 4px;
    font-size: 1em;
    box-sizing: border-box;
}
textarea {
    min-height: 60px;
    resize: vertical;
}
p {
    margin: 8px 0 0 0;
    color: #e8e8e8;
}
</style>