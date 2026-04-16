<script setup>
import { ref } from 'vue'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import vueLogo from '../assets/vue.svg'

const count = ref(0)
</script>

<template>
  <section class="container">
    <h1>HELLO I'M BULLONG</h1>
    <h2>WELCOME TO MY VUEJS PROJECT</h2>
    <img :src="heroImg" alt="Hero Image" class="hero-image" height="300" width="300">  
    <h2>HAWAK MO ANG BRIP</h2>
  </section>
</template>
