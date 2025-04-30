<!-- NEWER -->
<template>
    <div class="project-detail-page">
      <div class="content-wrapper">
        <h1>conner.dev</h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectDetail',
    props: {
        isDarkMode: Boolean,
    },
  };
  
  
  </script>
  
  <style scoped>
  .project-detail-page {
  display: flex;
  justify-content: center;
  padding: 2rem;
}
.content-wrapper {
  max-width: 800px;
  text-align: left;
}
  </style>
  