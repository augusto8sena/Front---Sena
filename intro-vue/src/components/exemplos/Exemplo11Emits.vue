<script setup>
import {ref} from 'vue'
const emit = defineEmits(['update'])
const count = ref(0)
function increment() {
    count.value++
    emit('update', count.value)
}
</script>
<template>
    <div>
        <p>Contagem: {{ count }}</p>
        <button @click="increment">Incrementar</button>
    </div>
</template>