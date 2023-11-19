<template>
  <div class="home">
    <main>
      <section class="introduction fade-in">
        <a class="resume" target="_blank" href="https://drive.google.com/file/d/15yH82lqPq4HoGzPvZovInjxdESxumGOI/view"><h1>Hi, I am Saifuddin👋</h1></a>
        <p>
          fueled by a passion for
          <span id="passion-span" class="passion-span">{{ currentPassion }}</span>
        </p>
        <p>
          <span class="proficiency-span">Vue.js</span> and
          <span class="proficiency-span">Python</span>—my go-to tools
          for turning ideas into reality!
        </p>
      </section>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
import logoImage from "../assets/LogoBlack.png";
import gmailImage from "../assets/gmail.png";
import githubImage from "../assets/github.png";
import telegramImage from "../assets/telegram.png";
import twitterImage from "../assets/twitter.png";
import Footer from "../components/Footer.vue";
</script>

<script>
export default {
  name: 'Home',
  data() {
    return {
      components: {
        Footer
      },
      images: {
        logo: logoImage,
        gmail: gmailImage,
        github: githubImage,
        telegram: telegramImage,
        twitter: twitterImage
      },
      passions: ["Front-end development", "Machine Learning", "UI/UX Design", "Data Science"],
      currentPassion: '',
      passionIndex: 0,
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 200,
      deletingSpeed: 100,
      typingDelay: 2000,
    };
  },
  computed: {
    currentCharacter() {
      return this.passions[this.passionIndex][this.loopNum];
    }
  },
  methods: {
    type() {
      const fullTxt = this.passions[this.passionIndex];

      if (this.isDeleting) {
        // Reduce the currentPassion string by one character
        this.currentPassion = fullTxt.substring(0, this.currentPassion.length - 1);
      } else {
        // Increase the currentPassion string by one character
        this.currentPassion = fullTxt.substring(0, this.loopNum + 1);
      }

      // Calculate the typing speed
      let typeSpeed = this.typingSpeed;
      if (this.isDeleting) {
        typeSpeed /= 2;
      }

      if (!this.isDeleting && this.currentPassion === fullTxt) {
        // If the full text is displayed, pause before starting to delete
        typeSpeed = this.typingDelay;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentPassion === '') {
        this.isDeleting = false;
        this.passionIndex++;
        typeSpeed = 500;

        // If it's the last passion, start from the first one again
        if (this.passionIndex >= this.passions.length) {
          this.passionIndex = 0;
        }
      }

      this.loopNum = this.isDeleting ? this.loopNum - 1 : this.loopNum + 1;

      setTimeout(this.type, typeSpeed);
    }
  },
  mounted() {
    this.type();
  }
}
</script>
