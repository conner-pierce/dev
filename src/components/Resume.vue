<template>
    <div class="resume-container">
      <!-- Header -->
      <div class="header">
        <h1>Conner Pierce</h1>
        <div>cpiercework1@gmail.com</div>
        <!-- <div>208-863-8525</div> -->
        <div>
          <a href="https://www.linkedin.com/in/conner-pierce-43a929229/" class="link-style" target="_blank">LinkedIn</a>
        </div>
      </div>

      <!-- Download Button 
       
          :src="isHovered ? currentAnimatedGif : currentStaticGif"
          :key="gifKey"
          alt="Download Resume"

          :class="{'download-icon-dark': !isDarkMode, 'download-icon-light': isDarkMode}" 
          -->
      <button class="download-btn" @click="downloadResume">
        <!-- Transparent 1x1 image that prevents alt text from showing-->
        <img 
          :class="{'download-icon-light': isDarkMode, 'download-icon-dark': !isDarkMode}" 
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 

          @mouseenter="isHovered = true; console.log('isHovered on Hover:', isHovered)"
          @mouseleave="isHovered = false; console.log('isHovered on HoverExit:', isHovered)"
          alt="Download Button"
        />
      </button>

      <!-- Education Section -->
      <hr />
      <div class="section">
        <h2>Education</h2>
        <div class="flex-container">
          <div><strong>University of Arizona</strong></div>
          <div class="align-right">Tucson, AZ</div>
        </div>
        <div class="flex-container">
          <div>Bachelor of Science - Electrical and Computer Engineering, GPA: 3.34</div>
          <div class="align-right">August 2018 - May 2022</div>
        </div>
      </div>

      <!-- Skills Section -->
      <hr />
      <div class="section">
        <h2>Skills Summary</h2>
        <p><strong>Technical Skills:</strong> Software Troubleshooting, Hardware Troubleshooting, Reading Code, Software Version Upgrade Support, Program QA</p>
        <p><strong>Soft Skills:</strong> Teamwork, Leadership, Writing, Tutoring, Learning, Task Management, Escalation Management, Collaboration</p>
        <p><strong>Languages:</strong> C, C++, LaTeX, Python, Verilog, Arduino, MUMPS, SQL, JavaScript, HTML, CSS, Vue.js</p>
      </div>

      <!-- Experience Section -->
      <hr />
      <div class="section">
        <h2>Experience</h2>
        <div class="flex-container">
          <div><strong>Epic Systems</strong></div>
          <div class="align-right">In-person</div>
        </div>
        <div class="flex-container">
          <div>Technical Support Engineer (Full-time)</div>
          <div class="align-right">September 2022 - March 2024</div>
        </div>
        <ul>
          <li><strong>Scheduling Expert:</strong> Helped with implementation and maintenance of a proprietary scheduling tool for multiple customers.</li>
          <li><strong>Customer Service:</strong> Supported scheduling administrators in software troubleshooting and handled escalations for security and downtime prevention.</li>
          <li><strong>Internal Team:</strong> Coordinated and documented internal projects, often leading in project management and QA.</li>
        </ul>

        <!-- Additional Experience Entry -->
        <div class="flex-container">
          <div><strong>University of Arizona</strong></div>
          <div class="align-right">In-person & Remote</div>
        </div>
        <div class="flex-container">
          <div>Teaching Assistant and Tutor (Part-time)</div>
          <div class="align-right">August 2020 - May 2022</div>
        </div>
        <ul>
          <li><strong>Workgroup Lecture Leader:</strong> Led weekly workgroup sessions for an introductory physics course.</li>
          <li><strong>Tutor:</strong> Developed lesson plans and conducted independent tutoring sessions for students.</li>
        </ul>
      </div>

      <!-- Projects Section -->
      <hr />
      <div class="section">
        <h2>Projects</h2>
        <h3>Personal Portfolio Website</h3>
        <div class="flex-container">
          <div>Front-End Development</div>
          <div class="align-right">November 2024 - Present</div>
        </div>
        <ul>
          <li>
            Designed and built a responsive portfolio website using Vue.js, HTML, CSS, and JavaScript, showcasing technical skills and projects.
          </li>
          <li>
            Implemented light/dark mode functionality with a custom theme toggle, refining the user interface for accessibility and style.
          </li>
          <li>
            Optimized site performance and usability by solving technical challenges related to layout, design, and functionality.
          </li>
          <li>
            Developed the site as a practical learning experience, highlighting my passion for front-end development and long-term goal of becoming a full-stack developer.
          </li>
          <li>
            Gained proficiency in leveraging ChatGPT to troubleshoot issues, streamline workflows, and enhance outcomes.
          </li>
          <li>
            View the website: <a href="YOUR_WEBSITE_LINK" target="_blank">YOUR_WEBSITE_LINK</a>
          </li>
        </ul>
      </div>

      <!-- Personal Pursuits & Achievements Section -->
      <hr />
      <div class="section">
        <h2>Personal Pursuits & Achievements</h2>
        <h3>Technical Growth Through Web Development</h3>
        <div class="flex-container">
          <div>Front-End Enthusiast</div>
          <div class="align-right">November 2024 - Present</div>
        </div>
        <ul>
          <li>
            Dedicated to continuous learning in modern web technologies and frameworks, emphasizing user-centered design.
          </li>
          <li>
            Overcame stylistic and technical challenges while polishing a functional and visually appealing portfolio site.
          </li>
          <li>
            Used this project as a stepping stone to develop problem-solving skills essential for a career in software development.
          </li>
        </ul>
      </div>

    </div>
</template>

<script>

export default {
  name: "Resume-page",
  props: {
      isDarkMode: Boolean, // Receive the isDarkMode prop
    },
  data() {
    return {
      isHovered: false,
      gifKey: 0,
      DarkSprite: require("@/assets/DownloadDarkSprite.png"),
      LightSprite: require("@/assets/DownloadLightSprite.png"),
      resumePDF: require("@/assets/Resume June 2024.pdf"),
    };
  },
  methods: {
    downloadResume() {
      const link = document.createElement('a');
      link.href = '/Resume June 2024.pdf';
      link.download = 'ConnerPierceResume.pdf'; //default file name
      link.click();
    },
  },  
  mounted() {
    // Preload GIFs
    const preloadImages = [
      this.DarkSprite,
      this.LightSprite,
    ];
    preloadImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  },
};
</script>

<style scoped>
/* PAGE CONTAINER */
/* PAGE CONTAINER */
/* PAGE CONTAINER */
.resume-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  padding: 16px;
}

/* DOWNLOAD BUTTON POSITION + CLASS + SPRITE ANIMATION */
/* DOWNLOAD BUTTON POSITION + CLASS + SPRITE ANIMATION */
/* DOWNLOAD BUTTON POSITION + CLASS + SPRITE ANIMATION */
.download-btn {
  position: absolute;
  top: 70px;
  right: 60px;
}
.download-icon-dark {
  width: 30px; /* Set to the width of a single frame */
  height: 30px; /* Set to the height of a single frame */
  background-image: url('@/assets/DownloadDarkSprite.png');
  background-size: 840px 30px; /* Total width and height of the sprite sheet */
  transition: transform 0.3s ;
}
.download-icon-light {
  width: 30px; /* Set to the width of a single frame */
  height: 30px; /* Set to the height of a single frame */
  background-image: url('@/assets/DownloadLightSprite.png');
  background-size: 840px 30px; /* Total width and height of the sprite sheet */
  transition: transform 0.3s ;
}
.download-icon-light:hover, .download-icon-dark:hover {
  animation: play-sprite 1200ms steps(28) infinite; /* Adjust `steps()` based on the number of frames */
}
@keyframes play-sprite {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -840px 0; /* Adjust based on total width of the sprite sheet */
  }
}

/* ACTUAL RESUME STYLE */
/* ACTUAL RESUME STYLE */
/* ACTUAL RESUME STYLE */
.resume-content {
  margin-top: 40px; /* Add some space below the resume title/content */
}
.resume-page {
  position: relative;
  padding: 20px;
}
/* Link Styling */
.link-style {
  color: inherit;  /*Inherit color from the current theme (black or white) */
}
.header {
  text-align: center;
  margin-top: 20px;
}
hr {
  margin: 20px 0;
}
.section h2 {
  margin-top: 16px;
}
.flex-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.align-right {
  text-align: right;
}
ul {
  padding-left: 20px;
  margin-top: 8px;
}
h1, h2, h3 {
  margin: 8px 0;
}

</style>
