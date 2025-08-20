<script setup>
let data = new Date();
</script>

<template>
    <h1>Exercício 03</h1>
    
       <P>Ano atual: {{ data.getFullYear() }}<br>
        Mês atual: {{ data.getMonth() + 1 }}<br>
        Dia atual: {{ data.getDate() }}</P> 
    
</template>

<style>
p {
    font-size: 20px;
    color: rgb(255, 255, 255);
} 
p:hover {
    color: rgb(138, 138, 138);
}
h1 {
    color: rgb(255, 255, 255);
    font-size: 30px;
    text-align: center;
}
h1:hover {
    color: rgb(138, 138, 138);
}
h1, p {
    font-family: 'Courier New', Courier, monospace;
}

h1, p {
    text-align: center;
}



</style>