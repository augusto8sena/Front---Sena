<script setup>
import { reactive } from "vue"

let estado = reactive({
  ativo: false,
  inativo: true,
  carregando: false
})

function mudarEstado() {
  if (estado.inativo) {
    estado.inativo = false
    estado.carregando = true

    setTimeout(() => {
      estado.carregando = false
      estado.ativo = true
    }, 1500)
  } else if (estado.ativo) {
    estado.ativo = false
    estado.inativo = true
  }
}
</script>

<template>
  
    <p :class="{
      'ativo': estado.ativo,
      'inativo': estado.inativo,
      'carregando': estado.carregando
    }">
      
      <strong>
        {{ estado.ativo ? "Ativo" : estado.inativo ? "Inativo" : "Carregando..." }}
      </strong>
    </p>

    <button 
      :disabled="estado.carregando"
      @click="mudarEstado"
      :class="{
        'btn': true,
        'ativo': estado.ativo,
        'inativo': estado.inativo,
        'carregando': estado.carregando
      }"
    >
      {{ estado.carregando ? "Carregando..." : "CLIQUE AQUI!" }}
    </button>
    <P>by Sena</P>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: Arial, sans-serif;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}


.ativo {
  color: white;
  background: #4caf50;
  box-shadow: 0 0 8px rgba(76,175,80,0.6);
}

.inativo {
  color: white;
  background: #888;
}

.carregando {
  color: white;
  background: #ff9800;
  cursor: wait;
  animation: pulsar 1s infinite;
}

/* animação carregando */
@keyframes pulsar {
  0% { opacity: 1; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}

/* disabled */
button:disabled {
  opacity: 0.7;
}
</style>
