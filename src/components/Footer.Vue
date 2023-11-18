<template>
    <footer>
        <div class="social-icons">
            <a :href="'mailto:saifeesaifuddinq@gmail.com.com'" target="_blank">
                <img :src="images.gmail" alt="Gmail" />
            </a>
            <a :href="'https://github.com/SaifuddinSaifee'" target="_blank">
                <img :src="images.github" alt="GitHub" />
            </a>
            <a :href="'https://t.me/saifsaifee'" target="_blank">
                <img :src="images.telegram" alt="Telegram" />
            </a>
            <a :href="'https://twitter.com/SaifSaifee_dev'" target="_blank">
                <img :src="images.twitter" alt="Twitter" />
            </a>
        </div>
    </footer>
</template>

<script setup>
import gmailImage from "../assets/gmail.png";
import githubImage from "../assets/github.png";
import telegramImage from "../assets/telegram.png";
import twitterImage from "../assets/twitter.png";
</script>


<script>
export default {
    name: 'Footer',
    data() {
        return {
            images: {
                gmail: gmailImage,
                github: githubImage,
                telegram: telegramImage,
                twitter: twitterImage
            },
        }
    }
}
</script>