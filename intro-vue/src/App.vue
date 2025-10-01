
<script setup>
import { ref } from 'vue'
import ProductItem from '../src/PruductItem.vue'
// Array de produtos
let products = [
{ id: 1, name: 'Notebook', price: 3000 },
{ id: 2, name: 'Mouse'
, price: 50 },
{ id: 3, name: 'Teclado'
, price: 200 }
]
// Contador do carrinho
let cartCount = ref(0)
// Função para adicionar ao carrinho

function handleAddToCart() {
  cartCount.value++
  emit('addToCart', cartCount.value)

}


</script>
<template>
<div class="app">
<h1 style="text-align: center;font-family:'Courier New', Courier, monospace, sans-serif; font-size: 43px; ">Loja Virtual</h1>
<h1 style="text-align: center;font-family:'Courier New', Courier, monospace, Arial, sans-serif; font-size: 33px; ">do Sena</h1>

<div class="cart-info">
<p style="font-family:'Courier New', Courier, monospace; text-align: center; font-size: 30px; font-weight: 10;">🛒 Itens no carrinho: {{ cartCount }}</p>
</div>

<div class="products-grid"></div>
<ProductItem
v-for="product in products"
:key="product.id"
:name="product.name"
:price="product.price"
@addToCart="handleAddToCart"
/>
</div>
</template>



