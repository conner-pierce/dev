<!-- src/components/Home.vue -->
<template>
  <div v-if="sessionStorageMirror" class="splash-screen" >
    <img class="splash-image-container" :src="currentImage" alt="Theme-Based logo" />
  </div>
  
  <div v-else class="home-page" :class="{'play-fade-in': playHomeFade}">
      <h1>Love You ^.^</h1>
      <p>
        This website was built to showcase my progress as a lifelong learner and professional. 
        I have always wanted to make my own website; to create a space that is curated by no-one other than myself.
        All the visuals, style, and theme are representative of my preferences in personal style, with the caveat
        that I am a human with limited bandwidth and capabiltity.

        The projects included as the focus of the website at the time of writing have yet to be documented / completed.
        The first project to be uploaded is the creating of this website itself. This is my first attempt at making a website.
        I have no doubt that this paragraph will be revised in the future, as my experience and skills blossom.
        
      </p>
      <div class="video-container">
        <router-link to="/projects" class="thumbnail-link thumbnail-sizing">
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
export default {
  name: 'HomePage',
  props: {
    isDarkMode: Boolean, // Receive the isDarkMode prop
  },
  data () {
    if (!sessionStorage.getItem("showSplash")) {
        return {
          sessionStorageMirror: true,
          playHomeFade: true,
        };
      }
    else {
      return {
        sessionStorageMirror: false,
        playHomeFade: false,
      };
    }
  },
  computed: {
    isSplashVisible() {
      return !sessionStorage.getItem("showSplash");
    },
    splashBackgroundColor() {
    return this.isDarkMode ? '#000000' : '#f5f5f5'; // Black for dark mode, white for light mode
    },
    currentImage() {
      return this.isDarkMode
        ? require("@/assets/PierceW.png")
        : require("@/assets/PierceDark.png");
    },
    currentVideo() {
      return this.isDarkMode
      ? require("@/assets/WaveWhite.mp4")
      : require("@/assets/WaveDark.mp4")
    }
  },
  mounted(){
    // Set a timer to hide the splash screen after 3 seconds but only after the first page load
    if (this.sessionStorageMirror) {
      console.log("Splash screen shown for the first time this session.");
      setTimeout(() => {
        this.triggerHomeFadeIn();
      }, 2600)
      setTimeout(() => {
        sessionStorage.setItem("showSplash", false);
        this.sessionStorageMirror=false;
      }, 3000)

      if (!sessionStorage.getItem("showSplash")) {
        console.log("Skipping splash screen due to localStorage.");
        this.playHomeFade=false;
      } else {
        this.sessionStorageMirror=false;
        sessionStorage.setItem("showSplash", false);
      }
    }
  },
  methods: {
    triggerHomeFadeIn() {
        this.playHomeFade = true; // Activate the fade-in animation
        // Reset fade animation control after it completes
        setTimeout(() => {
          this.playHomeFade = false;
        }, 1000); // Match this to the duration of the fade-in animation
    }
  }
};
</script>
  
<style scoped>
/* DEFINE WEB FONT */
/* DEFINE WEB FONT */
/* DEFINE WEB FONT */
@font-face {
  font-family: Pinyon;
  src: url('@/assets/fonts/PinyonScript-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
} 

/* MAIN PAGE STYLING */
/* MAIN PAGE STYLING */
/* MAIN PAGE STYLING */
.home-page {
  text-align: justify;
  max-width: 800px; /* Set a max-width for the content */
  margin: 0 auto; /* Center the container */
  padding: 20px; /* Add some padding */
}
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
h2{
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

/* SPLASH PAGE */
/* SPLASH PAGE */
/* SPLASH PAGE */
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Keep it above everything else */
  animation: fadeOut 3s forwards 1s; /* Fade-out animation */
}
.splash-screen img {
  max-width: 50%;
  max-height: auto;
  object-fit: contain; /* Ensure the image fits nicely */
}
.splash-image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center images horizontally */
  gap: 24px; /* Space between images */
}
/* MAIN PAGE COMING IN AFTER SPLASH */
.play-fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards; /* Fade-in after splash screen */
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
  </style>