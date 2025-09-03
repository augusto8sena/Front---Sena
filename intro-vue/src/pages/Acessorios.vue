<script setup>
import ProductItem from '../components/exerc/ProductItem.vue'
import { ref } from 'vue'

const acessorios = [
  { 
    nome: "Fone de Ouvido Sony WH-1000XM4", 
    preco: 1800, 
    imagemUrl: "https://images.unsplash.com/photo-1574494461754-de04dc403eec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    nome: "Smartwatch Samsung Galaxy Watch", 
    preco: 1200, 
    imagemUrl: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    nome: "Caixa de Som JBL Flip 5", 
    preco: 600, 
    imagemUrl: "https://images.unsplash.com/photo-1518445697755-5083d57b2de7?q=80&w=800&auto=format&fit=crop"
  },
  { 
    nome: "Teclado Mecânico Logitech", 
    preco: 900, 
    imagemUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop"
  }
]

const mensagemCompra = ref('')

function handleBuy(nomeProduto) {
  mensagemCompra.value = `Compra realizada com sucesso: ${nomeProduto}`
  setTimeout(() => mensagemCompra.value = '', 2500)
}
</script>

<template>
  <div class="produtos-container">
    <h2>Acessórios</h2>
    <ProductItem
      v-for="(produto, idx) in acessorios"
      :key="idx"
      :nome="produto.nome"
      :preco="produto.preco"
      :imagemUrl="produto.imagemUrl"
      @buy="handleBuy"
    />
    <div v-if="mensagemCompra" class="msg-alarme">{{ mensagemCompra }}</div>
  </div>
</template>
