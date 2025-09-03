<script setup>
import ProductItem from '../components/exerc/ProductItem.vue'
import { ref } from 'vue'
import './produtos-style.css'

const celulares = [
  { 
    nome: "Smartphone iPhone 11", 
    preco: 7500, 
    imagemUrl: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  { 
    nome: "Samsung Galaxy S21", 
    preco: 4200, 
    imagemUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop"
  },
  { 
    nome: "Xiaomi Mi 11", 
    preco: 3500, 
    imagemUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3c1b9021?q=80&w=800&auto=format&fit=crop"
  },
  { 
    nome: "Motorola Edge 30", 
    preco: 2900, 
    imagemUrl: "https://images.unsplash.com/photo-1512499617640-c2f999098c01?q=80&w=800&auto=format&fit=crop"
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
    <h2>Celulares</h2>
    <ProductItem
      v-for="(produto, idx) in celulares"
      :key="idx"
      :nome="produto.nome"
      :preco="produto.preco"
      :imagemUrl="produto.imagemUrl"
      @buy="handleBuy"
    />
    <div v-if="mensagemCompra" class="msg-alarme">{{ mensagemCompra }}</div>
  </div>
</template>
<style scoped>
.produtos-container {
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  padding-bottom: 2rem;
}
h2 {
  color: #4fc3f7;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 1px;
}
.msg-alarme {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  color: #181c24;
  padding: 1.5rem 3rem;
  border-radius: 18px;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 6px 32px #000a;
  font-size: 1.5rem;
  z-index: 9999;
  font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
  animation: fadeInOut 2.5s;
  border: 2px solid #4fc3f7;
  letter-spacing: 1px;
}
@keyframes fadeInOut {
  0% { opacity: 0; transform: translate(-50%, -60%);}
  10% { opacity: 1; transform: translate(-50%, -50%);}
  90% { opacity: 1; transform: translate(-50%, -50%);}
  100% { opacity: 0; transform: translate(-50%, -40%);}
}
</style>
