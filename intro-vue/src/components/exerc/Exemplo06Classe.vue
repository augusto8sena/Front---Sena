<script setup>
    let validacao = true;
</script>

<template>
    <p :class="validacao ?'ok':'falha'"> Utilizando a diretiva class</p>
</template>

<style scoped>

.ok{
    color: green;
}

.falha{
    color: red;
}
</style>