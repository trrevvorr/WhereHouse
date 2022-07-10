<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="v-layout">
    <header>
      <div class="wrapper">
        <h1>WhereHouse</h1>
        <nav>
          <!-- <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink> -->
        </nav>
      </div>
    </header>

    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 1rem 0; */

  font-weight: normal;
}

header {
  line-height: 1.5;
  padding: 0 1rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

header .wrapper {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.v-layout {
  height: 100vh;
}

.v-layout header {
  height: 3rem;
}

.v-layout .content {
  height: calc(100vh - 3rem);
  overflow: scroll;
}
</style>
