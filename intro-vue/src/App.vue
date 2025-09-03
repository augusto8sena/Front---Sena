<script setup>
import Exemplo01 from './components/exemplos/Exemplo01Interpolacao.vue'
import exerc01 from './components/exerc/exerc01.vue';
import exerc02 from './components/exerc/exerc02.vue';
import exerc03 from './components/exerc/exerc03.vue';
import Exemplo02 from './components/exemplos/Exemplo02Condicional.vue';
import exerc04 from './components/exerc/exerc04.vue';
import exerc05 from './components/exerc/exerc05.vue';
import Exemplo03 from './components/exemplos/Exemplo03Lista.vue';
import exerc06 from './components/exerc/exerc06.vue';
import exerc07 from './components/exerc/exerc07.vue';
import Exemplo05 from './components/exemplos/Exemplo05mode.vue';
import exerc08 from './components/exerc/exerc08.vue';
import exerc09 from './components/exerc/exerc09.vue';
import exerc10 from './components/exerc/exerc10.vue';
import Exemplo06 from './components/exemplos/Exemplo06Classe.vue';
import exerc11 from './components/exerc/exerc11.vue';
import Exemplo07 from './components/exemplos/Exemplo07Click.vue';
import exerc12 from './components/exerc/exerc12.vue';
import Exemplo08 from './components/exemplos/Exemplo08Keyboard.vue';
import exerc13 from './components/exerc/exerc13.vue';
import Exemplo09 from './components/exemplos/Exemplo09Form.vue';
import UserCard from './components/exemplos/Exemplo10Props.vue';
import ProductCard from './components/exerc/exerc14.vue';
import Exemplo11 from './components/exemplos/Exemplo11Emits.vue';
import ProductItem from './components/exerc/ProductItem.vue'
import {ref} from 'vue'

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

