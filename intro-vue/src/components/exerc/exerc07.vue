<script setup>
let produtos=([
    { nome: 'Pão', preco: 3.50, categoria: 'Vegetal' },
    { nome: 'Leite', preco: 4.00, categoria: 'Animal' },
    { nome: 'Ovos', preco: 5.00, categoria: 'Animal'},
    { nome: 'Queijo', preco: 10.00, categoria: 'Animal'  },
    { nome: 'Frutas', preco: 6.00, categoria: 'Vegetal' }
]);

</script>
<template>
    <ul class="produtos">
        <li v-for="(produto, index) in produtos" :key="index">
            {{ index + 1 }} {{ produto.nome }} - R$ {{ produto.preco.toFixed(2) }} ({{ produto.categoria }})
        </li>
    </ul>
</template>
<style>
.produtos {
    list-style-type: none;
    align-items: center;
}
</style>