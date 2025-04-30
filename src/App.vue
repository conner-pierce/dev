<template>
  <div id="app">
  <div :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/resume">Resume</router-link>
    </nav>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isDarkMode: false, // Set to true by default for dark mode
    };
  },
  watch: {
    isDarkMode(newValue) {
      // You can save the preference to local storage if needed
      localStorage.setItem('isDarkMode', newValue);
      if (newValue) {
        document.body.classList.add('prism-dark');
        document.body.classList.remove('prism-light');
      }
      else {
      document.body.classList.add('prism-light');
      document.body.classList.remove('prism-dark');
      } 
    }
  },
  mounted() {
    // Check local storage for saved theme preference
    const savedTheme = localStorage.getItem('isDarkMode');
    if (savedTheme !== null) {
      this.isDarkMode = JSON.parse(savedTheme);
    }
  }
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif; /* Use a more approachable font */
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Stretch to full height */
}
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Stretch to full height */
}

</style>
 