<script setup>
  function mensagem() {
    alert('Você clicou no botão!');
  }
</script>

<template>
    <button @click="mensagem">Clique aqui</button>
</template>