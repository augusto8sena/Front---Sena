<script setup>
import { ref } from 'vue'

const contador = ref(0)
const estado = ref('ativo') // 'ativo', 'inativo', 'carregando'

// muda o estado dinamicamente
function mudarEstado(novoEstado) {
  estado.value = novoEstado
  if (novoEstado === 'carregando') {
    setTimeout(() => {
      estado.value = 'ativo'
    }, 1500)
  }
}

function incrementar() {
  contador.value++
}

function decrementar() {
  if (contador.value > 0) contador.value--
}
</script>

<template>
  <div>
    
    <div>
      <button
        @click="decrementar"
        :disabled="contador === 0 || estado !== 'ativo'"
        :class="estado"
      >-</button>

      <span :class="estado" class="contador-span">
        <template v-if="estado === 'carregando'">
          <span class="spinner"></span> Carregando...
        </template>
        <template v-else>
          {{ contador }}
        </template>
      </span>

      <button
        @click="incrementar"
        :disabled="estado !== 'ativo'"
        :class="estado"
      >+</button>
    </div>
    <div class="botoes-estado">
      <button @click="mudarEstado('ativo')">Ativo</button>
      <button @click="mudarEstado('inativo')">Inativo</button>
      <button @click="mudarEstado('carregando')">Carregando</button>
    </div>

  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  gap: 1.5rem;
  padding: 2rem;
  background: #f0f2f5;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

/* Contador principal */
.contador-wrapper {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn {
  font-size: 1.8rem;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.btn:hover:not(:disabled) {
  transform: scale(1.1);
  box-shadow: 0 6px 14px rgba(0,0,0,0.25);
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Contador visual */
.contador-span {
  font-size: 2rem;
  min-width: 120px;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

/* Estados */
.ativo {
  background: linear-gradient(135deg, #4caf50, #81c784);
  color: #fff;
}

.inativo {
  background: linear-gradient(135deg, #e53935, #ef9a9a);
  color: #fff;
}

.carregando {
  background: linear-gradient(135deg, #ffb300, #ffd54f);
  color: #fff;
}

/* Botoes de mudar estado */
.botoes-estado {
  display: flex;
  gap: 10px;
}

.botoes-estado button {
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #607d8b;
  color: #fff;
}

.botoes-estado button:hover {
  background: #455a64;
}

/* Spinner animado */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.spinner {
  display: inline-block;
  width: 1.2em;
  height: 1.2em;
  border: 3px solid rgba(255,255,255,0.3);
  border-top: 3px solid #fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 0.5em;
  vertical-align: middle;
}
</style>