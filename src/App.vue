<template>
    <body>
        <header>
          <Navigation/>
        </header>
        <router-view></router-view>
    </body>
</template>

<script setup>
import Navigation from './components/Navigation.vue';
</script>