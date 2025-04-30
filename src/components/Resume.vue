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
    </div>
  </template>

};

<script>

export default {
  name: "Resume-page",
  props: {
      isDarkMode: Boolean, // Receive the isDarkMode prop
    },
};
</script>

<style scoped>
/* PAGE CONTAINER */
/* PAGE CONTAINER */
/* PAGE CONTAINER */
.resume-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  padding: 10px;
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
h1, h2, h3, h4 {
  margin: 8px 0;
}


.spacer {
  height: 50px;
}

</style>
