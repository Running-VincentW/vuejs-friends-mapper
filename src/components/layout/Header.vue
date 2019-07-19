<template>
    <div>
      <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <p class="navbar-item">
            <b-icon icon="user" size="is-medium"></b-icon>
            <strong>Friends Finder</strong>
          </p>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Friends</router-link>
            <router-link to="/about" class="navbar-item">Map</router-link>
          </div>
          <div class="navbar-end">
          </div>
        </div>
      </nav>
      
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
