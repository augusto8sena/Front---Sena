<script setup>
const props = defineProps({
  nome: String,
  preco: Number,
  imagemUrl: String
})

const emit = defineEmits(['buy'])

function comprar() {
  emit('buy', props.nome)
}
</script>

<template>
  <div class="product-item">
    <div class="img-area">
      <img v-if="imagemUrl" :src="imagemUrl" :alt="nome" class="product-img" />
    </div>
    <div class="info-area">
      <div class="row">
        <span class="product-name">{{ nome }}</span>
        <span class="product-price">R$ {{ preco.toFixed(2) }}</span>
      </div>
      <button @click="comprar">Comprar</button>
    </div>
  </div>
  <hr class="divider" />
</template>

<style scoped>
.product-item {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background: #fff;
}
.img-area {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;
  margin-right: 24px;
}
.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background: #f8f8f8;
  border: 1px solid #eee;
  display: block;
}
.info-area {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product-name {
  font-size: 1.1rem;
  font-weight: bold;
  color: #222;
}
.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #222;
  margin-left: 1.5rem;
  min-width: 120px;
  text-align: right;
}
button {
  width: fit-content;
  padding: 0.3rem 1.2rem;
  border-radius: 4px;
  border: none;
  background: #28a745;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 0.3rem;
}
button:hover {
  background: #218838;
}
.divider {
  border: none;
  border-bottom: 2px solid #e0e0e0;
  margin: 0 0 1.5rem 0;
}
</style>
