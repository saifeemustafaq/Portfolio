<template>
    <nav>
        <div class="logo">
            <router-link to="/">
                <img class="logo-img" src="../assets/LogoBlack.png" alt="Logo" />
            </router-link>
        </div>
        <ul>
            <li><router-link to="/community">Community</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/experience">Experience</router-link></li>
        </ul>
    </nav>
</template>
  
<script>
export default {
    name: "Navigation",
};
</script>
  
<style scoped>
/* Add your styles for the navigation here */


</style>
  