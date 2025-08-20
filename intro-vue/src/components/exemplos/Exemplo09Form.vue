<script setup>
 function validaForm(){
    alert('Formulário enviado com sucesso!');
    event.preventDefault();
    }
    
</script>

<template>
  <form action="https://g1.globo.com" @submit="validaForm">
    <input type="submit" value="Enviar" />
    </form>
</template>