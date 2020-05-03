<template>
  <div class="home">
    <vue-particles
      color="#B39DDB"
      :particleOpacity="0.8"
      :particlesNumber="50"
      shapeType="circle"
      :particleSize="4"
      linesColor="#B39DDB"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.9"
      :linesDistance="250"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="particles-js"
    >
    </vue-particles>
    <div class="home-title">
        <h1>поиграх си</h1>
        <h1>с времето</h1>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#particles-js {
  height: 100%;
  cursor: pointer;
}
.home {
  height: 100vh;
  padding-left: 240px;
  position: relative;
}
.home-title {
  color: black;
  line-height: 90px;
  font-size: 60px !important;
  font-weight: 900;
  font-family: 'Exo 2', sans-serif;
  text-shadow: 1px 6px 0px #B39DDB;
  text-transform: uppercase;
  position: absolute;
  top: 33%;
  left: 33%;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
</style>
