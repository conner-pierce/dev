<!-- src/components/Home.vue -->
<template>
      <div class="home-page">
        <h1>Welcome</h1>
        <p>
          This website was built to showcase my progress as a lifelong learner and professional. 
          I have always wanted to make my own website; to create a space that is curated by no-one other than myself.
          All the visuals, style, and theme are representative of my preferences in personal style, with the caveat
          that I am a human with limited bandwidth and capabiltity.
  
          The projects included as the focus of the website at the time of writing have yet to be documented / completed.
          The first project to be uploaded is the creating of this website itself. This is my first attempt at making a website.
          I have no doubt that this paragraph will be revised in the future, as my experience and skills continue to develop.
          
        </p>
        <div class="video-container">
          <router-link to="/dev/projects/" class="thumbnail-link thumbnail-sizing">
            <video :key="currentVideo" autoplay loop muted playsinline>
              <source :src="currentVideo" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </router-link>
        </div> 
        
      <footer class="footer">
        <div class="footer-content">
          <div>cpiercework1@gmail.com</div>
          <span :class="{ 'separatorLight': isDarkMode, 'separatorDark': !isDarkMode }"></span>
          <a href="https://www.linkedin.com/in/conner-pierce-43a929229/" class="footer-link" target="_blank">LinkedIn</a>
      </div>
      </footer>
  
      </div>
    </template>
    
  <script>
  import WaveWhite from "@/assets/Videos/WaveWhite.mp4";
  import WaveDark from "@/assets/Videos/WaveDark.mp4";

  export default {
    name: 'HomePage',
    props: {
      isDarkMode: Boolean, // Receive the isDarkMode prop
    },
    computed: {
      currentVideo() {
        return this.isDarkMode ? WaveWhite : WaveDark;
      }
    },
  };
  </script>
    
  <style scoped>

  
  /* MAIN PAGE STYLING */
  /* MAIN PAGE STYLING */
  /* MAIN PAGE STYLING */

  p {
    font-family: 'Segoe UI Black Italic', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
  
  }
  h1 {
    font-family: Pinyon, sans-serif;
    font-size: 7rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  h2 {
    font-family: sans-serif;
    font-size: 6.5rem;
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
  
  
  /* THUMBNAIL STYLE */
  /* THUMBNAIL STYLE */
  /* THUMBNAIL STYLE */
  .video-container {
    display: flex;
    text-align: center;
    justify-content: center; /* Centers horizontally */
    margin-top: 40px;
  }
  .thumbnail-link {
  margin-bottom: 20px; /* Add space around the entire image container */
  display: inline-block; /* Ensures the link takes up only the space around the image */
  }
  /* Image styling with hover effect */
  .thumbnail-sizing {
    max-width: 100%;
    height: auto;
    transition: transform 0.3s ease; /* Smooth transition for scaling */
  }
  .thumbnail-sizing:hover  {
    transform: scale(1.05); /* Scale image up slightly on hover */
  }
  
  /* FOOTER */
  /* FOOTER */
  /* FOOTER */
  .footer {
    margin-top: auto;
    background-color: inherit;
    padding: 10px;
    text-align: center;
  }
  .footer-content {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Space between links and separator */
    padding-right: 30px; /* Adjust to shift the footer inside its parent */
  }
  .footer-link {
    color: inherit;  /*Inherit color from the current theme (black or white) */
  }
  .footer-link:hover {
    text-decoration: underline;
  }
  /* Circle Separator */
  .separatorDark {
    display: inline-block;
    width: 6px;
    background-color: rgb(33, 33, 33);
    height: 6px;
    border-radius: 50%;
  }
  .separatorLight {
    display: inline-block;
    width: 6px;
    background-color: #f5f5f5; /* Light background */;
    height: 6px;
    border-radius: 50%;
  }
    </style>