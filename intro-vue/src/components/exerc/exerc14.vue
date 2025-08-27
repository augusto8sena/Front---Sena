<script setup>
const props = defineProps({
    titulo: String,
   
    preco: Number,
    imagemUrl: String,
    emEstoque: Boolean,
})
</script>
<template>
    <div class="product-card" v-if="titulo">
        <h3>{{ titulo }}</h3>
        <img v-if="imagemUrl" :src="imagemUrl" :alt="titulo" class="product-img" />

        <p v-if="preco !== undefined">Preço: R$ {{ preco.toFixed(2) }}</p>
        <div :class="emEstoque ? 'em-estoque' : 'fora-estoque'">
            {{ emEstoque ? 'Em estoque' : 'Fora de estoque' }}
        </div>
    </div>
</template>

<style scoped>
.product-card {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    margin: 1rem;
    width: 260px;
    text-align: center;
    background: #000000;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
}

p {
    margin: 0.5rem 0;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    font-size: 20px;
}

.product-img {
    width: 100%;
    height: 140px;
    object-fit: contain;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    background: #f8f8f8;
}
.em-estoque {
    color: #28a745;
    font-weight: bold;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.fora-estoque {
    color: #dc3545;
    font-weight: bold;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
}
</style>
