<template>
  <div class="header">
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
      <div class="container">
      <router-link class="navbar-brand" to="/">Causas</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link tag="li" :to="'/inicio'" :ref="'Causas'" class="nav-item">
            <a class="nav-link">Inicio</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
  </div>
</template>

<script>
export default {
  name: 'Causas',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  margin-bottom: 50px;
}
</style>
