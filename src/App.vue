<template>
  <div :class="isDarkMode ? 'dark-mode' : 'light-mode'">
    <header class="navbar">
      <nav>
        <!-- Home Button link -->
        <router-link to="/dev" class="nav-link">Home</router-link>
        
        <!-- Projects Dropdown -->
        <div class="nav-link nav-item dropdown">
          <router-link to="/dev/projects" class="nav-link">Projects</router-link>
          <div class="dropdown-content">
            <router-link to="/dev/projects/detail" class="dropdown-link">Project 1</router-link>
            <!--<a href="#" class="dropdown-link">Project 2</a>-->
            <!--More Project Links go here-->
          </div>
        </div>

        <!-- Resume Link -->
        <router-link to="/dev/resume" class="nav-link">Resume</router-link>

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



/* DARK MODE LIGHT MODE ROOT FUNCTIONALITY */
/* DARK MODE LIGHT MODE ROOT FUNCTIONALITY */
/* DARK MODE LIGHT MODE ROOT FUNCTIONALITY */
.dark-mode {
  background-color: rgb(33, 33, 33); /* Dark background */
  color: white; /* White text for dark mode */
}
.light-mode {
  background-color: #f5f5f5; /* Light background */
  color: black; /* Dark text for light mode */
}
.dark-mode html, .dark-mode body {
  /* Ensure the root HTML and body elements are styled by the theme */
  background-color: rgb(33, 33, 33);
  color: white;
}
.light-mode html, .light-mode body {
  background-color: #f5f5f5;
  color: black;
}



/* NAVBAR BUILD*/
/* NAVBAR BUILD*/
/* NAVBAR BUILD*/
.navbar {
  background: rgba(0, 0, 0, 0.5); /* Translucent background */
  backdrop-filter: blur(10px); /* Blur effect for the background */
  padding: 1px 15px; /* Padding for the navbar */
  position: sticky; /* Make it sticky to the top */
  top: 0; /* Stick to the top */
  z-index: 1000; /* Keep it above other content */
  border-radius: 10px 10px 10px 10px; /* Rounded bottom corners */
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.3); /* Box shadow for depth */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2); /* Box shadow for depth */
}
.dark-mode .navbar {
  background: rgba(0, 0, 0, 0.5);
}
.light-mode .navbar {
  background: rgba(255, 255, 255, 0.9);
}
nav {
  display: flex; /* Flexbox for easy alignment */
  justify-content: flex-start; /* Space out the links */
}
.nav-link {
  font-size: 1.5rem; /* Slightly larger text */
  text-decoration: none; /* Remove underline */
  padding: 10px 15px; /* Padding around links */
  transition: color 0.3s ease; /* Smooth color transition */
}
.dark-mode .nav-link {
  color: white;
}
.light-mode .nav-link {
  color: black;
}
.nav-link:hover {
  color: #bbbbbb;
}



/* PROJECT DROPDOWN */
/* PROJECT DROPDOWN */
/* PROJECT DROPDOWN */
.dropdown {
  position: relative;
}
.dropdown-content {
  display: none; /* Hidden by default */
  position: absolute;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  min-width: 160px;
  top: 100%; /* Position directly below the nav item */
  left: 0;
  border-radius: 5px;
  overflow: hidden;
}
.light-mode .dropdown-content {
  background-color: rgba(255, 255, 255, 0.9); /* Lighter background for light mode */
  color: white;
}
.dark-mode .dropdown-content  {
  background-color: rgba(50, 50, 50, 0.9); /* Darker background for dark mode */
  color: black;
}
.dropdown-link {
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  transition: background-color 0.3s;
}
.light-mode .dropdown-link {
  color: black;
}
.dark-mode .dropdown-link {
  color: white;
}
.dropdown-link:hover {
  background-color: #ddd;
}
.nav-item:hover .dropdown-content {
  display: block;
}



/* DARK MODE LIGHT MODE TOGGLE SWITCH */
/* DARK MODE LIGHT MODE TOGGLE SWITCH */
/* DARK MODE LIGHT MODE TOGGLE SWITCH */
.theme-switch {
  margin-left: auto; /* Push the switch to the right */
  padding: 10px;
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  background-image: url('@/assets/DbrandSkinDark.png'); /* Sun image on the left */
  background-position: 50% 30%;  
  filter: brightness(4);
  transition: 0.4s;
  border-radius: 24px;
  overflow: hidden; /* Ensures images don't overflow out of the slider */
}
.slider::before, .slider::after {
  position: absolute;
  top: 2px;
  width: 20px;
  height: 20px;
  background-size: auto 100%;
  background-repeat: no-repeat;
  content: "";
  z-index: 1;
}
.slider::before {
  left: -1px;
  top: 2px;
  width: 25px;
  height: 30px;
  background-image: url('@/assets/moon.png'); /* Moon image on the right */
  background-size: 109%;
}
.slider::after {
  right: 2px;
  background-image: url('@/assets/Sun2.png'); /* Sun image on the left */
}
.slider .handle {
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: white;
  bottom: 2px;
  left: 2px;
  transition: transform 0.4s;
  z-index: 2;
}
input:checked + .slider {
  /* background-color: #2196F3; Change color on toggle for better contrast */
  background-image: url('@/assets/DbrandSkin.png');
  background-position: 100% 100%;
  filter: brightness(1);
}
input:checked + .slider .handle {
  transform: translateX(26px);
}

</style>
 