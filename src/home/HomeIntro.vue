<template>
  <div class="mainIntro">
    <div class="intro">
      <div class="">
        <img src="../assets/myPhoto.jpeg" alt="">
      </div>
      <h1>Chris Woodward - Developer</h1>
      <p>
        Highly motivated and detail-oriented Full Stack Developer, who strives to deliver high quality, creative, and valuable solutions. Proven track record in multiple languages, libraries, and web frameworks. Experienced in starting and maintaining projects from scratch, as well as participating as a team member on large, established code bases. Portfolio showcases large-scale community project work done, completed classwork projects, and a variety of original web applications demonstrating proficiency in multiple stacks.
      </p>
    </div>
    <p id="emailMe">Contact me at: <a href="mailto:cw00dw0rd@gmail.com">cw00dw0rd@gmail.com</a></p>
    <div id="iconSkills">
      <div id="frontend">
        <i class="material-icons">web</i>
        <div class="verticalLine">
        <h3>Frontend</h3>
        <p>Experience with all major frameworks and libraries.</p>
        <ul id="skills">
          <li>Vue.js</li>
          <li>React</li>
          <li>AngularJS</li>
          <li>Bootstrap</li>
          <li>Materialize</li>
          <li>jQuery</li>
        </ul>
      </div>
      </div>
      <div id="frontend" class="backend">
        <i class="material-icons">data_usage</i>
        <h3>Backend</h3>
        <p>Specializing in backend development.</p>
        <ul>
          <li>MongoDB Certified Developer</li>
          <li>Express, Django, Meteor, Linux Guru</li>
          <li>Experience as Server Admin</li>
          <li>Interaction with web service API's, REST, etc</li>
        </ul>
      </div>
      <div id="frontend">
        <i class="material-icons">build</i>
        <h3>Adaptive</h3>
        <p>Using the best tools for the job.</p>
        <ul>
          <li>Mocha, Jasmine, Jest</li>
          <li>Webpack, Gulp/Grunt</li>
          <li>Git, GitHub, GitLab</li>
          <li>AWS, Mongo Cloud, Digital Ocean</li>
        </ul>
      </div>
      <div id="frontend">
        <i class="material-icons">insert_emoticon</i>
        <h3>Customer Focused</h3>
        <p>Entrepreneur passionate about customer care.</p>
        <ul>
          <li>Years of customer service.</li>
          <li>Communication is key.</li>
          <li>Desire to leave an impact.</li>
          <li>Strong values of honesty &amp; integrity.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIntro',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mainIntro {
    border-radius: 10px;
    height: 90vh;
    max-height: 90vh;
    margin-left: 20vw;
    margin-right: 5vw;
    background-color: #fafafa;
    z-index: 1;
  }
 .intro {
   padding: 5px;
   padding-right: 1vw;
   border-top-right-radius: 8px;
   border-top-left-radius: 8px;
   display: inline-block;
   background-color: #2962ff;
   height: 45vh;
 }
 .intro p, h1 {
   color: #fff;
 }
 .intro {
   text-align: justify;
  -moz-text-align-last: center;
  text-align-last: center;
 }
 .intro p {
   padding-left: 20.75vw;
   font-size: 1.3vw;
 }
 .intro img {
   float: left;
   border-radius: 6px;
   transform: scale(.95);
   -webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.2));
   filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.2));
 }
 .logoIntro {
   top: 10vh;
 }
 #iconSkills {
   text-align: center;
   display: inline-block;
   height: 50vh;
 }
 #frontend {
   box-sizing: border-box;
   border-right-style: solid;
 }
 #frontend:last-child {
   border-right-style: none;
 }
 #frontend h3{
   margin-bottom: 0;
 }
 #frontend p {
   margin-top: 2px;
 }
 .material-icons{
   padding-left: 3.25vw;
   font-size: 8vw;
 }
 #frontend {
   float: left;
   width: 15vw;
   height: 40vh;
   font-size: .7em;
   text-align: left;
   overflow: hidden;
   padding: 1vw;
 }
 #frontend ul {
   padding-left: 2vw;
 }
 #emailMe {
   padding: 0;
   margin: 0;
 }
 @media screen and (max-width: 900px), (max-height: 600px) {
   .mainIntro {
     margin: 0 auto;
     width: 96vw;
   }
   .intro img {
     width: 20vw;
     height: auto;
   }
   .intro h1 {
     font-size: 3.5vw;
     text-align: left;
     -moz-text-align-last: left;
     text-align-last: left;
   }
   .intro p {
     font-size: 2.25vw;
     padding-left: 0;
   }
   #frontend {
     width: 20vw;
     margin: auto;
    text-align: left;
    font-size: 1.6vw;
   }
   #frontend ul {
     padding-left: 2.25vw;
     font-size: 1.6vw;
   }
   .material-icons{
     font-size: 5vw;
   }
}
@media screen and (max-width: 600px) {
  .intro h1 {
    font-size: 4vw;
    text-align: left;
    -moz-text-align-last: left;
    text-align-last: left;
  }
  .intro p {
    font-size: 3vw;
    padding-left: 0;
  }
}
@media screen and (max-height: 450px) {
  .mainIntro {
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
  }
  .intro img {
    width: 10vw;
    height: auto;
  }
  .intro h1 {
    font-size: 2vw;
    text-align: left;
    -moz-text-align-last: left;
    text-align-last: left;
  }
  .intro p {
    font-size: 1.25vw;
    padding-left: 0;
  }
  #frontend {
   margin: auto;
   text-align: left;
   font-size: 1.2vw;
  }
  #frontend ul {
    padding-left: 2.25vw;
    font-size: 1vw;
  }
  .material-icons{
    font-size: 3vw;
  }
}
</style>
