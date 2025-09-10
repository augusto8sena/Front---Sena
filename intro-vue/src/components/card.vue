<template>
  <div class="card-container">
    <header class="card-header">
      <h3>{{ titulo }}</h3>
      <p>{{ descricao }}</p>
    </header>
    <main class="card-main">
      <slot></slot>
    </main>
    <footer class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    titulo: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card-container {
  border: 1px solid #bbb;
  border-radius: 8px;
  padding: 1em;
  margin: 1em 0;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.card-header {
  border-bottom: 1px solid #eee;
  margin-bottom: 0.5em;
}
.card-header h3 {
  margin: 0 0 0.2em 0;
}
.card-header p {
  margin: 0;
  color: #666;
  font-size: 0.95em;
}
.card-main {
  margin-bottom: 0.5em;
}
.card-footer {
  border-top: 1px solid #eee;
  padding-top: 0.5em;
  color: #888;
  font-size: 0.95em;
}
</style>
