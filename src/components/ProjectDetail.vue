<!-- NEWER -->
<template>
  <div class="project-detail-page">
    <div class="content-wrapper">
      <h1>conner.dev</h1>
      <hr />
      <p>
        You are currently using the first project! This website was built to showcase my progress as a lifelong learner and professional. I have always wanted to make my own website; to create a space that is curated by no one other than myself. The visuals, style, and theme are the product of my personal taste and ability to follow through on a vision.
      </p>
      <p>
        This is my first attempt at making a website. I started this project with little to no experience in working with website backend or frontend. I did however get a great tip from my partner to use Vuetify. Vuetify is a Vue component framework that allows for easy integration of HTML and CSS. In other words, Vuetify allows you to build the necessary components needed to make a website run all in one place, instead of working with separate languages and files. Getting started was one of the hardest parts of this entire project. Retrospectively, the instructions were really straightforward, but the first steps required using windows command prompt to install the Vue CLI which really threw me off. My partner also helped me kick off the technical setup. We ran into a few different error codes when initially trying to access the website. As you will see more later, ChatGPT was crucial for bypassing technical error codes like this. In essence we needed to install a couple of extra packages, such as vuetify/styles and materialdesignicons.css to ensure proper compatibility. Having never coded in Vue, HTML, or CSS, having the ability to generate code through an LLM is one of the best use cases I have seen for these tools. Once I was able to access my website from localhost in my browser every following step became easier and more rewarding. After getting the initial website up I took to pen and paper (on my IPad) to draft some high-level design for the site. 
      </p>

      <div class="image-row">
        <div class="image-container">
          <img :src="images.IMG1" alt="Home Page Image" class="project-image"/>
          <div class="caption">Home</div>
        </div>
        <div class="image-container">
          <!-- <img :src=currentImage alt="Project 1" class="image-sizing" /> -->
          <img :src="images.IMG2" alt="Project Page Image" class="project-image"/>
          <div class="caption">Projects</div>
        </div>
        
      </div>
      <div class="image-row">
        <div class="image-container">
          <img :src="images.IMG3" alt="Project Details Page Image" class="project-image"/>
          <div class="caption">This Page!</div>
        </div>
        <div class="image-container">
          <img :src="images.IMG4" alt="Style Brainstorm Image" class="project-image"/>
          <div class="caption">Style</div>
        </div>
      </div> 
      

      <p>
        To get started, I asked ChatGPT to generate the basic framework I had drafted. Here is a snippet of my original prompt:
        <em><br>Please generate a very basic website in Vue. I want the website to have the following characteristics: -A bar at the top of the screen with 3 buttons that navigate to different pages. These buttons will be labeled "Home", "Projects", and "Resume"... there should be a bar across the top which persists throughout all of the pages, which link out to their respective pages.</em>
        
      </p>
        
      <p>
        After implementing ChatGPT’s code and using it also to fix the errors in the code it spat out, we had a functioning website, complete with a working navigation bar at the top of the screen, and headers and paragraphs on each of the pages.
        
      </p>
      <p>
        Now that the website had a framework, the remaining front end work consisted of either small detail adjustments or additional pieces of functionality and design. I’m going to focus on the functionality and design changes because smaller detail adjustments were fairly straightforward. Small changes consisted of implementing 
        <span id="special-font">new fonts from the internet,</span>
        changing the style of the navigation bar to feel more modern,
        <router-link to="/egg1" class="project-titleNew">changing the behavior of hyperlinks to match the theme</router-link>
        and making a picture be selectable as a hyperlink.

      </p>
      <p>
        /*Here we are going to go over 3 changes: The dark/light mode, the resume conversion from LATEX -> learning about row/col and flexbox, navbar dropdown*/
      </p>
      <p>
        The project momentum really started to pick up when working on new features. 3 features in particular I had challenges implementing: The dark-mode & light-mode toggle, the navigation bar dropdown that takes you directly to a project, and the conversion of my resume from LATEX into CSS & HTML.
      </p>
      <p>
        The toggle is what I implemented first. I personally prefer dark-mode, so I wanted to make sure when I worked on the website that I didn’t have to stare at light-mode the whole time. Prompt:
        <br>
        <em>What I am thinking is that in the nav bar there should be a pill shaped switch that can change the color of the nav bar, text, and background color of the page. </em>
        <br>
        I was able to get up and running quickly with a very standard pill shaped slider. The CSS animation for the white dot worked as intended, but the theme changing effect needed to be troubleshot. I asked ChatGPT to run through how the theme change functionality works and step by step I learned how the local storage theme variable, JavaScript watch and data functions, and conditional HTML logic determines which CSS class should be applied.

      </p>
      <!-- 
      <pre class="code-block" :class="{ 'code-block-dark': isDarkMode, 'code-block-light': !isDarkMode }">
          <code class='language-javascript'>
          data() {
            return {
              isDarkMode: false, // Set to false by default for light mode
            };
          },
          watch: {
            isDarkMode(newValue) {
              // You can save the preference to local storage if needed
              localStorage.setItem('isDarkMode', newValue);
            }
          }</code>
        </pre>
         -->
      

      <p>/* Here is where more details go for the specific development of the aforementioned features: The dark-mode & light-mode toggle, the navigation bar dropdown that takes you directly to a project, and the conversion of my resume from LATEX into CSS & HTML. */
      </p>

      <p>
        With all of these functionality features, the website is far more usable. When it comes to my design philosophy, my approach is to try my best to reduce dead clicks. If you’re unfamiliar, a dead click is when a user clicks on part of the screen expecting something to happen, but nothing does. For example, if a user was on the projects page, they might expect that clicking the name of the website project would take them to a more detailed page on that project, even though the designed flow of the website hook is to take the user to that page via clicking on the image. To generalize this idea one step further, I wanted to make sure that whichever way you think makes sense to get to certain places of the site, that it should work. In other words, there needs to be more than one way to get to the same place, so that many users will find navigating the site intuitive. This is why there are always at least two ways to get to any other page from whatever page you are on.
      </p>
      <p>
        I also knew that I wanted the site to be built for vertical scrolling in mind. This way it would be easier to adapt to mobile in the future...

      </p>
      
    </div>
  </div>
</template>

<script>
import IMG1 from '@/assets/PNGs/Homepage.png';
import IMG2 from '@/assets/PNGs/ProjectsPage.png';  
import IMG3 from '@/assets/PNGs/ProjectDetailsPage.png';
import IMG4 from '@/assets/PNGs/Brainstorming.png';

export default {
  name: 'ProjectDetail',
  props: {
      isDarkMode: Boolean,
  },
  //mounted() {
    //Prism.highlightAll();
  //},
  data() {
    return {
      images: {
        IMG1: IMG1,
        IMG2: IMG2,
        IMG3: IMG3,
        IMG4: IMG4
      }
    }
  },
};
//import Prism from 'prismjs';


</script>

<style scoped>
.project-detail-page {
  display: flex;
  justify-content: center;
  padding: 2rem;
}

/* Link Styling */
.project-titleOld {
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

/* Add underline on hover */
.project-titleOld:hover {
  text-decoration: underline;
}

/* Link Styling */
.project-titleNew {
  color: inherit;  /*Inherit color from the current theme (black or white) */
  text-decoration: none; /* Remove default underline */
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

/* Add underline on hover */
.project-titleNew:hover {
  text-decoration: underline;
}

.image-row {
  display: flex;       /* Align children in a row */
  justify-content: space-between; /* Optional: adds space between images */
  gap: 1rem;           /* Adjust spacing between images */
  margin-top: 1rem;    /* Add some spacing above the image row */
}

.project-image {
  max-width: 100%;      /* Set each image width to fit within the row */
  height: auto;        /* Maintain aspect ratio */
  display: block;      /* Ensure proper alignment */
}


.image-wrapper-left {
  text-align: left; /* Left-align the image */
  margin: 1rem 0;   /* Optional spacing around the image */
}

.image-wrapper-right {
  text-align: right; /* Right-align the image */
  margin: 1rem 0;   /* Optional spacing around the image */
}

.content-wrapper {
  max-width: 800px;
  text-align: left;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-top: 1rem;
  text-align: justify;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
#special-font {
  display: inline;
  font-family: Pinyon, sans-serif;
  font-size: 1.5rem;

}
.image-container {
  flex: 1; /* Distribute containers evenly */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.image-container img {
  width: 100%; /* Make images responsive */
  height: 500px; /* Maintain aspect ratio */
  max-height: 500px; /* Set a max width for consistency */
  object-fit: fill; /* Crop or fit the image nicely */
}

.caption {
  position: relative;
  bottom: 37px;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Dark background with transparency */
  color: white;
  text-align: center;
  padding: 8px;
  font-size: 14px;
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s, transform 0.3s;
}
.image-container:hover .caption {
  opacity: 1;
  transform: translateY(0);
}

.code-block {
  font-family: 'Courier New', Courier, monospace;
  border-radius: 25px;
  margin-top: 20px;
  margin-left: -10px;
}
.code-block-light {
  background-color: #ebebeb;
  color: transparent;
}

.code-block-dark {
  background-color: #2d2d2d; /* Dark background */
  color: transparent; /* Light text color */
}

:deep(pre[class*="language-"]) {
  text-shadow: none !important;
  margin: none !important;
  padding: 0 !important;
}

</style>
