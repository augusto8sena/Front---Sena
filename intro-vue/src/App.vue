<script setup>
import './global-style.css'
</script>

<template>
  <nav class="navbar">
    <span class="brand">Sena Imports</span>
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/celulares" class="nav-link">Celulares</router-link>
    <router-link to="/acessorios" class="nav-link">Acessórios</router-link>
  </nav>
  <router-view />
</template>