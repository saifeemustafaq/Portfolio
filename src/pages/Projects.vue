<template>
  <div class="projects fade-in">
    <main>
      <section class="projects-content">
        <h3><i><span class="jumbo">“</span>I love building projects that mix AI and web skills to make everyday tasks
            easier and productive for
            everyone.<span class="jumbo">”</span></i></h3>
        <div class="project-cards">
          <!-- Project 1 -->
          <div class="project-card">
            <img src="../assets/projectImages/hyperblog.svg" alt="Project 1" />
            <div class="text-container">
              <h4>HyperBlog.me</h4>
              <p>Reducing the content writing process from months to mere days. Winning Idea at MumbaiHack '23.</p>
              <div class="icons">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fas fa-code"></i></a>
                <a href="#"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="project-card">
            <img src="project1.jpg" alt="Project 2" />
            <div class="text-container">
              <h4>PDFBuddy</h4>
              <p>PDF buddy allows users to query and curate specific data from PDFs, with a user-friendly PDF interaction
                tool.</p>
              <div class="icons">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fas fa-code"></i></a>
                <a href="#"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="project-card">
            <img src="project1.jpg" alt="Project 3" />
            <div class="text-container">
              <h4>AI-Powered Email Writer</h4>
              <p>AI-powered email Writer that crafts brand-consistent emails with customization options.</p>
              <div class="icons">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fas fa-code"></i></a>
                <a href="#"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>

          <!-- Project 4 -->
          <div class="project-card">
            <img src="project1.jpg" alt="Project 4" />
            <div class="text-container">
              <h4>Classification Model Selection</h4>
              <p>Classification Models selection made easy with a Python Jupyter notebook.</p>
              <div class="icons">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fas fa-code"></i></a>
                <a href="#"><i class="fas fa-external-link-alt"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>
  
<script>
import Footer from '../components/Footer.vue';

export default {
  name: 'Projects',
  components: {
    Footer
  }
}
</script>
  
<style scoped>
* {
  /* border: 1px dashed red; */
  transition: 300ms;
}

h3 {
  text-align: center;
}

.project-cards {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 6rem auto;
  width: 80%;
}

.project-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12); */
  margin-bottom: 16px;
  width: 600px;
  height: 250px;
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 8px;
}

.project-card:hover {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  transform: scale(1.01);
}

.project-card img {
  /* Add Material UI image styles */
  width: 45%;
  height: 100%;
  border-radius: 8px;
}

.text-container {
  width: 45%;
  height: 100%;
}

.project-card h4 {
  /* Add Material UI heading styles */
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  font-family: monospace;
}

.project-card p {
  /* Add Material UI paragraph styles */
  font-size: 14px;
  margin-bottom: 16px;
}

.project-card .icons {
  /* Add Material UI icon styles */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-card .icons i {
  /* Add Material UI icon styles */
  font-size: 24px;
  margin-right: 8px;
}

.jumbo {
  font-size: xx-large;
}
</style>
