<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Assignment done by : S Waruna L Silva
      <a href="https://github.com/waruna-lakshantha/orangehrm_fe" target="_blank" rel="noopener">GitHub-FE</a> |
      <a href="https://github.com/waruna-lakshantha/orangehrm_api" target="_blank" rel="noopener">GitHub-API</a> |      
      <a href="https://www.linkedin.com/in/warunalakshantha/" target="_blank" rel="noopener">LinkedIn</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
