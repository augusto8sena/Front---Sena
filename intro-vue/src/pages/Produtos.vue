<script setup>
import ProductItem from '../components/exerc/ProductItem.vue'
import { ref } from 'vue'

const produtos = [
  { 
    nome: "Smartphone Iphone 11", 
    preco: 7500, 
    imagemUrl: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    nome: "Fone de Ouvido Sony WH-1000XM4", 
    preco: 1800, 
    imagemUrl: "https://images.unsplash.com/photo-1574494461754-de04dc403eec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    nome: "Smartwatch Samsung Galaxy Watch", 
    preco: 1200, 
    imagemUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

const mensagemCompra = ref('')

function handleBuy(nomeProduto) {
  const msg = `Compra realizada: ${nomeProduto}`
  mensagemCompra.value = msg
  console.log(msg)
}
</script>

<template>
  <div>
    <h2>Lista de Produtos</h2>
    <ProductItem
      v-for="(produto, idx) in produtos"
      :key="idx"
      :nome="produto.nome"
      :preco="produto.preco"
      :imagemUrl="produto.imagemUrl"
      @buy="handleBuy"
    />
    <p v-if="mensagemCompra">{{ mensagemCompra }}</p>
  </div>
</template>
