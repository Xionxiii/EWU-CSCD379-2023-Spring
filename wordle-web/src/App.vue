<template>
  <v-layout>
    <v-app-bar color="primary" density="compact" prominent>
      <template v-slot:prepend>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Wordlinator</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" permanent :width="90" rail>
      <v-list style="align-items: center">
        <v-col>
          <v-row>
            <v-list-item prepend-icon="mdi-view-dashboard" to="/" nav class="pt-3">
              <v-tooltip activator="parent" location="start" theme="light"> Home </v-tooltip>
            </v-list-item>
          </v-row>
          <v-row>
            <v-list-item prepend-icon="mdi-folder" to="/about" nav class="pt-3">
              <v-tooltip activator="parent" location="start" theme="light"> Class </v-tooltip>
            </v-list-item>
          </v-row>
          <v-row>
            <v-list-item prepend-icon="mdi mdi-nintendo-game-boy" to="/game" nav class="pt-3">
              <v-tooltip activator="parent" location="start" theme="light"> Wordlinator </v-tooltip>
            </v-list-item>
          </v-row>
        </v-col>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
const drawer = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
