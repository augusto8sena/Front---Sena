<script setup>
const props = defineProps({
  nome: String,
  preco: Number
})

const emit = defineEmits(['buy'])

function comprar() {
  emit('buy', props.nome)
}
</script>

<template>
  <div class="product-item">
    <span>{{ nome }} - R$ {{ preco.toFixed(2) }}</span>
    <button @click="comprar">Comprar</button>
  </div>
</template>

<style scoped>
.product-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
button {
  padding: 0.3rem 1rem;
  border-radius: 4px;
  border: none;
  background: #28a745;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
}
button:hover {
  background: #218838;
}
</style>
