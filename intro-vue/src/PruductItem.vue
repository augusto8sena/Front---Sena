<script setup>
import { defineProps, defineEmits } from 'vue'
// Declaração das props
const props = defineProps({
name: String,
price: Number,
})
// Declaração dos emits
const emit = defineEmits(['addToCart'])
// Função para adicionar ao carrinho
function adicionarAoCarrinho() {emit('addToCart')}
</script>
<template>
<div class="product-card">
<h3>{{ props.name }}</h3>
<p class="price">R$ {{ props.price }}</p>
<button @click="adicionarAoCarrinho()" class="btn-add">Adicionar ao Carrinho</button>
</div>
</template>
<style scoped>

.app p {
    margin: 1rem auto 0.5rem auto;
    padding: 0.5rem 1rem;
    font-size: 1.1em;
    font-family: 'Courier New', Courier, monospace;
    
    border-radius: 6px;
    border: 1px solid #444;
    background: #ffffff;
    color: #000000;
    width: 250px;
    display: block;
}
.app h3 {
    margin: 1rem auto 0.5rem auto;
    padding: 0.5rem 1rem;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.1em;
    border-radius: 6px;
    border: 1px solid #444;
    background: #222;
    color: #fff;
    width: 250px;
    display: block;

}


button {
  margin: 1rem auto 0.5rem auto;  
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
  width: 280px;
  display: block;
}
button:hover {
  background-color: #369870;
}
p {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    margin: 1rem;
    width: 260px;
    text-align: center;
   
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
}


</style>
