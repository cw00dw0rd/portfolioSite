<template>
  <div id="app">
  <ul id="mySidenav" class="sidenav">
    <li><a @click="scrollToEnd('meteor')" id="vueIcon"><img src="./assets/electronLogo.png" /></a></li>
    <button @click="scrollToEnd('meteor')">click me</button>
    <li><a id="pythonIcon"><img src="./assets/pythonLogo.png" /></a></li>
    <li><a id="reactIcon" ><img src="./assets/reactLogo.png"/></a></li>
    <li><a id="meteorIcon" ><img src="./assets/meteorLogo.png" /></a></li>
  </ul>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    scrollToEnd (tag) {
      document.getElementById(tag).scrollIntoView()
    }
  }
}
</script>
<style>
body {
  background: linear-gradient(to bottom, #ddd, #0b0b0b);
  /* background-attachment: fixed;
  height: 100%; */
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}
.sidenav li{
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: block;
}
.sidenav a {
  margin-top: 5%;
}
.sidenav a {
  position: fixed;
  left: 20px;
  transition: 0.5s;
  padding: 15px;
  width: 100px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  border-radius: 0 5px 5px 0;
  z-index: 1;
}

#mySidenav a:hover {
  /* left: 0; */
  z-index: 2;
  transform: scale(.45);
}

#vueIcon {
  transform: scale(.3,.3);
  top: 10px;
}

#pythonIcon {
  top: 110px;
  transform: scale(.3,.3);
}

#reactIcon {
  top: 210px;
  transform: scale(.3,.3);
}

#meteorIcon {
  top: 310px;
  transform: scale(.3,.3);
}

@media screen and (max-width: 600px), (max-height: 600px) {
  .sidenav li {
    float: left;
  }
  #mySidenav a:hover {
    /* left: 0; */
    z-index: 2;
    transform: scale(.25);
  }
  #mySidenav a {
    top: -110px;
    position: fixed;
    z-index: 1;
    margin-top: 0;
    transform: scale(.15,.15);
    /* left: 10; */
    /* top: 0; */
  }
  #vueIcon {
    transform: scale(.3,.3);
    left: 1em;
  }

  #pythonIcon {
    left: 4em;
    transform: scale(.3,.3);
  }

  #reactIcon {
    left: 7em;
    transform: scale(.3,.3);
  }

  #meteorIcon {
    left: 10em;
    transform: scale(.3,.3);
  }
}
</style>
