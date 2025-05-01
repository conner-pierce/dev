<template>
  <div class="home-page">
    <h1>Projects</h1>
    <hr />
    <router-link to="/dev/projects/website/" class="project-title">
      <h2>
        conner.dev
      </h2>
    </router-link> 
    <p>
      A piece of art posing as a website. This project is a representation of my digital style.
      Time and effort has been put into the little things. New things are coming; a project is 
      never really finished.
    </p>
    <p>
      Click below to see the story.
    </p>
    <!-- Thumbnail Link -->
    <div class="image-container">
      <router-link to="/dev/projects/website/" class="image-link">
        <img :src=currentImage alt="Project 1" class="image-sizing" />
      </router-link>
    </div>  
    <hr />
  <h2>
    Coming soon...
  </h2>
  
  </div>

  
</template>

<script>
import PierceW4 from "@/assets/PNGs/PierceW4.png";
import PierceDark from "@/assets/PNGs/PierceDark.png";

export default {
  name: 'ProjectsPage',
  props: {
    isDarkMode: Boolean,
  },
  computed: {
    currentImage() {
        return this.isDarkMode ? PierceW4 : PierceDark;
      }
  },
};

</script>

<style scoped>

/* MAIN PAGE STYLING */
/* MAIN PAGE STYLING */
/* MAIN PAGE STYLING */
/* Link Styling */
.project-title {
  color: inherit;  /*Inherit color from the current theme (black or white) */
  text-decoration: none; /* Remove default underline */
  transition: color 0.3s ease, text-decoration 0.3s ease;
}
/* Add underline on hover */
.project-title:hover {
  text-decoration: underline;
}
p {
  font-size: 1.25rem;
  text-align: justify;
  margin-bottom: 20px;
}
h1 {
  font-family: Pinyon, sans-serif;
  text-align: center;
  font-size: 7rem;
  margin-bottom: .5rem;
}
h2 {
  font-size: 2rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
}

/* IMAGE STYLING */
/* IMAGE STYLING */
/* IMAGE STYLING */
.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center images horizontally */
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
}
.image-link {
  margin-bottom: 20px; /* Add space around the entire image container */
  display: inline-block; /* Ensures the link takes up only the space around the image */
}
.image-sizing {
  max-width: 66%;
  height: auto;
  transition: transform 0.3s ease; /* Smooth transition for scaling */
}
.image-sizing:hover {
  transform: scale(1.05); /* Scale image up slightly on hover */
}
</style>
