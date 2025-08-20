<template>
    <div class="teclas-demo">
        <h3>Eventos de Teclas</h3>
        <input
            type="text"
            placeholder="Digite algo (keydown)"
            @keydown="onKeyDown"
            class="input-demo"
        />
        <p v-if="ultimaTeclaDown">Última tecla pressionada (keydown): <strong>{{ ultimaTeclaDown }}</strong></p>

        <input
            type="text"
            placeholder="Digite algo (keypress)"
            @keypress="onKeyPress"
            class="input-demo"
        />
        <p v-if="ultimaTeclaPress">Última tecla pressionada (keypress): <strong>{{ ultimaTeclaPress }}</strong></p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const ultimaTeclaDown = ref('')
const ultimaTeclaPress = ref('')

function onKeyDown(e) {
    ultimaTeclaDown.value = e.key
}
function onKeyPress(e) {
    ultimaTeclaPress.value = e.key
}
</script>

<style scoped>
.teclas-demo {
    text-align: center;
}
.input-demo {
    margin: 1rem auto 0.5rem auto;
    padding: 0.5rem 1rem;
    font-size: 1.1em;
    border-radius: 6px;
    border: 1px solid #444;
    background: #222;
    color: #fff;
    width: 250px;
    display: block;
}
p {
    margin-bottom: 1.2rem;
}
</style>