<template>
  <div id="app">
  <ul id="mySidenav" class="sidenav" v-scrollHandler="handleScroll" :key="mobile">
    <!-- <li><a @click="scrollToEnd('meteor')" id="vueIcon"><img src="./assets/electronLogo.png" /></a></li>
    <button @click="scrollToEnd('meteor')">click me</button>
    <li><a id="pythonIcon"><img src="./assets/pythonLogo.png" /></a></li>
    <li><a id="reactIcon" ><img src="./assets/reactLogo.png"/></a></li>
    <li><a id="meteorIcon" ><img src="./assets/meteorLogo.png" /></a></li> -->
    <li v-for="(tags, index) in projectTags" :key="index">
      <a :id="[tags+'Icon']"
      :style="{
        'top': (index === 0 ? '-150px' : (index * 100) - 150 +'px' ),
         'left': leftVal[index]
        }">
        <img @click="scrollToEnd(tags)" :src="getIcon(index)"/>
      </a>
    </li>
  </ul>
  <transition name="fade">
  <li v-if="notHome" id="homeButton">
    <a>
      <img @click="scrollToTop()" :src='homeImage'><img/>
    </a>
  </li>
</transition>
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import ScrollDirective from './shared/scroll-directive'
import HomeImage from './assets/circleFace.png'

export default {
  name: 'app',
  data () {
    return {
      top: 10,
      topId: 0,
      mobile: false,
      notHome: false,
      leftVal: [],
      homeImage: HomeImage
    }
  },
  created () {
    this.getProjects()
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  directives: { ScrollHandler: ScrollDirective },
  methods: {
    ...mapActions('projects', ['getProjects', 'updateProjects']),
    scrollToEnd (tag) {
      document.getElementById(tag).scrollIntoView({ behavior: 'smooth' })
      this.notHome = true
    },
    scrollToTop () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      this.notHome = false
    },
    getIcon (index) {
      return this.$store.state.projects.projectIcons[index]
    },
    onResize () {
      this.leftVal = []
      if (window.innerWidth <= 600 || window.innerHeight <= 600) {
        for (let i = 0; i <= this.projectTags.length; i++) {
          this.leftVal.push((-8 + (4 * i)) + 'em')
        }
      } else {
        this.leftVal = []
      }
    },
    handleScroll (evt, el) {
      console.log(window.scrollY)
      if (window.scrollY > 10) {
        this.notHome = true
      } else {
        this.notHome = false
      }
    }
  },
  computed: {
    projectTags () {
      return this.$store.state.projects.projectTags
    },
    goMobile () {
      if (window.innerWidth < 600 && window.innerHeight < 600) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style>
body {
  /* background: linear-gradient(to bottom, rgb(28,28,28), #0b0b0b); */
  background-color: rgb(15,15,15);
  /* background-attachment: fixed;
  height: 100%; */
}
#app {
  font-family: 'Montserrat',Helvetica, Arial, sans-serif;
  font-style: 'Montserrat Semi-Bold';
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

#mySidenav a img{
  transition: .5s;
  transform: scale(.3,.3);
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
  filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
}

#mySidenav a img:hover {
  /* left: 0; */
  z-index: 2;
  transform: scale(.45);
}

#homeButton {
  list-style-type: none;
  transform: scale(.4);
  margin: 0;
  z-index: 2;
  margin-top: 62vh;
  position: fixed;
  right: 100px;
  transition: 0.5s;
  padding: 15px;
  width: 100px;
  border-radius: 0 5px 5px 0;
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
  filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media screen and (max-width: 600px), (max-height: 600px) {
  .sidenav li {
    float: left;
  }

  #mySidenav a img {
    transform: scale(.3,.3);
  }

  #mySidenav a img:hover {
    /* left: 0; */
    z-index: 2;
    /* transition: 0s; */
    transform: scale(.3);
  }
  #mySidenav a img {
    top: -95px;
    position: fixed;
    z-index: 1;
    margin-top: 0;
    transform: scale(.2,.2);
    /* left: 10; */
    /* top: 0; */
  }
}
</style>
