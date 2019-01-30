<template>
  <div id="app">
    <div>
  <ul id="mySidenav" class="sidenav" v-scrollHandler="handleScroll">
    <li v-for="(tags, index) in projectTags" :key="index">
      <a :id="[tags+'Icon']"
      :style="{
        'top': (index === 0 ? '-150px' : (index * 100) - 150 +'px' ),
         'left': onMobile ? leftVals[index] : '',
         'zIndex': (index === 0 ? 2 : '')
        }">
        <img @click="scrollToEnd(tags)" :src="getIcon(index)"/>
      </a>
    </li>
  </ul>
</div>
  <transition name="fade">
  <li v-if="notHome" id="actionButton">
    <transition name="actionFade">
    <div v-if="actionButtonClicked" id="contactMe">
      <a href="mailto:cw00dw0rd@gmail.com">
    <i class="material-icons">border_color</i>
    </a>
  </div>
</transition>
  <transition name="actionFade">
  <div v-if="actionButtonClicked" id="goHome">
    <a @click="scrollToTop()">
      <i class="material-icons">home</i>
    </a>
  </div>
</transition>
    <a>
      <img @click="actionButtonClick()" :src='homeImage'><img/>
    </a>
  </li>
</transition>
    <router-view />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import ScrollDirective from './shared/scroll-directive'
import HomeImage from './assets/circleFace.png'

export default {
  name: 'app',
  data () {
    return {
      notHome: false,
      actionButtonClicked: false,
      leftVal: [],
      homeImage: HomeImage,
      mobileScreen: this.onMobile
    }
  },
  beforeCreated () {
    window.addEventListener('resize', this.onResize)
  },
  created () {
    window.addEventListener('resize', this.onResize)
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
      this.actionButtonClicked = !this.actionButtonClicked
      this.notHome = false
      this.scrolling = true
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      this.scrolling = false
    },
    actionButtonClick () {
      this.actionButtonClicked = !this.actionButtonClicked
    },
    getIcon (index) {
      return this.$store.state.projects.projectIcons[index]
    },
    onResize () {
      this.leftVal = []
      if (this.projectTags.length > 0) {
        if (window.innerWidth <= 900 || window.innerHeight <= 600) {
          this.mobileScreen = this.onMobile
          this.projectTags.forEach((val, i) => {
            this.leftVal.push((-2.1 + (3 * i)) + 'em')
          })
          // for (let i = 0; i <= this.projectTags.length; i++) {
          // }
        } else {
          this.leftVal = []
        }
      }
    },
    handleScroll (evt, el) {
      if (window.scrollY > 100 && this.scrolling !== true) {
        this.notHome = true
      } else {
        this.actionButtonClicked = false
        this.notHome = false
      }
    }
  },
  computed: {
    ...mapGetters({
      projectTags: 'projects/getTags'
    }),
    onMobile () {
      return !!((window.innerWidth <= 900 || window.innerHeight <= 600))
    },
    leftVals () {
      this.onResize()
      return this.leftVal
    }

  }
}
</script>
<style>
body {
  background-color: rgb(15,15,15);
}
#app {
  font-family: 'Montserrat',Helvetica, Arial, sans-serif;
  font-style: 'Montserrat Semi-Bold';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  -webkit-overflow-scrolling: touch;
}
.sidenav li{
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: block;
}
.sidenav a {
  margin-top: 15%;
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
  cursor: pointer;
}
#mySidenav a img{
  transition: .3s;
  width: 6.5vw;
  height: auto;
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
  filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.5));
}

#actionButton {
  cursor: pointer;
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
#actionButton i {
  position: absolute;
  left: 90px;
  font-size: 13vw;
}
#actionButton img {
  width: 20vw;
}
#contactMe i{
  bottom: 53vh;
}
#contactMe a {
  all: unset;
}
#goHome i{
  left: -15vw;;
  top: 10vh;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
  animation: pop-down .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.actionFade-enter-active, .actionFade-leave-active {
  transition: opacity .5s;
}
.actionFade-enter, .actionFade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@keyframes pop-down {
  0% {
    transform: scale(0);
  }
  25% {
    transform: scale(.9)
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and (min-width: 950px){
  #mySidenav a:hover {
     z-index: 2;
    transform: scale(1.45);
    -webkit-filter: brightness(115%);
    filter: brightness(115%);
    /* -webkit-filter: drop-shadow(12px 12px 7px rgba(195,29,29,.5));
    filter: drop-shadow(12px 12px 7px rgba(179,33,33,.5));  */
  }
}
@media screen and (max-width: 900px), (max-height: 600px) {
  .sidenav {
    left: -100px;
  }
  .sidenav li {
    float: left;
  }

  #mySidenav a img {
    width: 40px;
  }

  /* #mySidenav a img:hover {
    transform: scale(1.2);
  } */
  #mySidenav a img {
    position: fixed;
    z-index: 1;
    margin-top: 0;
    left: 10;
    top: 0;
  }
  #mySidenav li:nth-child(1) {
    z-index: 3;
  }
  #actionButton {
    margin-top: 76vh;
    right: 0px;
    transform: scale(.8)
  }
  #actionButton i {
    position: absolute;
    left: 12vw;
    font-size: 15vw;
  }
  #actionButton {
    margin-top: 66vh;
    right: 6vw;
    transform: scale(.6)
  }
  #contactMe i{
    bottom: 35vh;
    left: 5vw;
  }
  #contactMe a {
    all: unset;
  }
  #goHome i{
    left: -15vw;;
    top: 5vh;
  }
}
@media screen and (max-width: 500px) {
  #actionButton {
    margin-top: 76vh;
    right: 0px;
    transform: scale(.8)
  }
  #actionButton i {
    position: absolute;
    left: 12vw;
    font-size: 15vw;
  }
  #contactMe i{
    bottom: 20vh;
  }
  #contactMe a {
    all: unset;
  }
  #goHome i{
    left: -15vw;;
    top: 5vh;
  }
}
</style>
