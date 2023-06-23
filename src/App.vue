<template>
  <p class="fs-1">
    <span>D</span>esum@ths
  </p>
  <Navigation />
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  data() {
    return {
      texts_card: {

      }
    }
  }
}
</script>

<style>
#app {

  margin-top: 2em;
}

span {
  color: rgba(3.2, 85.3, 133.7, 1) !important;
  text-shadow: 0.1vw 0.1vw 0.2vw black;
}

body {
  background-image: linear-gradient(to right, rgba(19.3, 108.4, 160.2, 1), rgba(19.3, 108.4, 160.2, 0.7), rgba(19.3, 108.4, 160.2, 0.3));
  user-select: none;

}

.fs-1 {
  color: black;
  font-family: titre;
  font-size: 3.5vw !important;
  text-shadow: 0.3vw 0.3vw 0.5vw black;
  margin-bottom: 1em;
  line-height: 4vw;
}

.fs-1::before {
  display: block;
  content: "";
  width: 4vw;
  height: 4vw;
  background-image: url(../public/logoSite.png);
  background-size: cover;
  margin-left: 40vw;
  float: left;
  margin-right: 2vw;
  border-radius: 50%;
  box-shadow: 0.1vw 0.1vw 0.2vw rgba(3.2, 85.3, 133.7, 1) !important;
  animation: rotation 1.7s infinite;

}

#desumathLogo {
  width: 350px;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 1800px) {
  .fs-1 {
    font-size: 60px !important;
  }

  .fs-1::before {
    width: 90px;
    height: 90px;
    margin-left: 40vw;

  }
}

svg{
  animation: rotation 4s infinite;
}

@media screen and (max-width: 900px) {
  .fs-1 {
    font-size: 40px !important;
    line-height: 40px;
  }

  .fs-1::before {
    width: 40px;
    height: 40px;
    margin-left: 25vw;

  }
}

@font-face {
  font-family: titre;
  src: url(./assets/fonts/ClassroomPersonalUse-7Bv34.ttf);
}

@keyframes rotation {
  0% {
    transform: rotateY(0deg);
  }

  10% {
    transform: rotateY(36deg);
  }

  20% {
    transform: rotateY(72deg);
  }

  30% {
    transform: rotateY(108deg);
  }

  40% {
    transform: rotateY(144deg);
  }

  50% {
    transform: rotateY(180deg);
  }

  60% {
    transform: rotateY(216deg);
  }

  70% {
    transform: rotateY(252deg);
  }

  80% {
    transform: rotateY(288deg);
  }

  90% {
    transform: rotateY(324deg);
  }

  100% {
    transform: rotateY(360deg);
  }
}</style>
