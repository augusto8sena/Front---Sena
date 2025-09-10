<template>
  <button class="custom-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
};
</script>

<style scoped>
.custom-button {
  padding: 0.5em 1.5em;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}
.custom-button:hover {
  background-color: #369870;
}
</style>
