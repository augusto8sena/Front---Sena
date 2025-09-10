<template>
  <div class="named-slots-container">
    <header class="header-slot">
      <slot name="header"></slot>
    </header>
    <main class="default-slot">
      <slot></slot>
    </main>
    <footer class="footer-slot">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'NamedSlotsComponent',
};
</script>

<style scoped>
.named-slots-container {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1em;
  margin: 1em 0;
  background: #f9f9f9;
}
.header-slot {
  font-weight: bold;
  margin-bottom: 0.5em;
}
.footer-slot {
  font-size: 0.9em;
  color: #666;
  margin-top: 0.5em;
}
</style>
