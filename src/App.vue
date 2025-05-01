<template>
  <div :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <header class="navbar">
      <nav>
        <!-- Home Button link -->
        <router-link to="/" class="nav-link">Home</router-link>
        
        <!-- Projects Dropdown -->
        <div class="nav-link nav-item dropdown">
          <router-link to="/projects/" class="nav-link">Projects</router-link>
          <div class="dropdown-content">
            <router-link to="/projects/website/" class="dropdown-link">conner.dev</router-link>
            <!--<a href="#" class="dropdown-link">Project 2</a>-->
            <!--More Project Links go here-->
          </div>
        </div>
        
        <!-- Resume Button link -->
        <router-link to="/resume/" class="nav-link">Resume</router-link>
        
        <!-- Theme Switch -->
        <div class="theme-switch">
        <label class="switch">
          <input type="checkbox" v-model="isDarkMode" />
          <span class="slider">
            <span class="handle"></span>
          </span>
          </label>
        </div>

      </nav>

    </header>
    <main>
      <router-view :is-dark-mode="isDarkMode"/>
    </main>
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