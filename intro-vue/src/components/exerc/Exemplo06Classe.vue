<script setup>
    let validacao = true;
    let isError = false;
    let isActive = true;
    let isDisabled = true;
</script>

<template>
    <!-- <p :class="validacao ?'ok':'falha'"> Utilizando a diretiva class</p> -->
     <p :class="{
        'ok': isActive,
        'falha': isError
     }">
        Utilizando a diretiva class com objeto
    </p>

    <button :disabled="isDisabled">Clique aqui!</button>
</template>

<style scoped>

.ok{
    color: green;
}

.falha{
    color: red;
}

.disabled{
    color: gray;
}
button:disabled {
    background-color: lightgray;
    color: darkgray;
    cursor: not-allowed;
}
</style>