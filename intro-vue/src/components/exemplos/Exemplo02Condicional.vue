<script setup>
    let exibir = true;
    let media=8;

</script>
<template>
     <h1 v-if="exibir">Teste IF/ELSE</h1>
     <P v-if="media >=7">Aprovado</P>
    <P v-else-if="media >=5"><Em>Em Recuperação</Em></P>
    <p v-else>Reprovado</p>
</template>
<style>

</style>