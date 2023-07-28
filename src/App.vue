<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="row">

      <div class="col s4 center">
        <i class="large material-icons">playlist_add</i>
      </div>

      <div class="col s8">
        <h1>Javalicence</h1>
      </div>

    </div>
    <div class="row">
        <div class="navbar-fixed ">

          <nav class="transparent nav-menu">
            <div class="nav-wrapper">

              <ul class="left hide-on-med-and-down">
                <li class="active"><RouterLink to="/">Home</RouterLink></li>
                <li class="active"><RouterLink to="/about">About</RouterLink></li>
                <li class="active"><RouterLink to="/test">Test</RouterLink></li>
                <li class="active"><RouterLink to="/quickshot">Quick Shot</RouterLink></li>
                <li class="active"><RouterLink to="/questionsdb">All Questions</RouterLink></li>
              </ul>

            </div>
          </nav>
      </div>
    </div>

    <div class="row">
      <RouterView />
    </div>
    
  </div>
</template>

<style scoped>
  .nav-menu {
    margin-right: 20%;
    padding-right: 40%;
    border-right: 20%;
  }
</style>
