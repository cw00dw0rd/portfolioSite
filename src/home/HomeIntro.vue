<template>
  <div class="mainIntro">
    <div class="intro">
      <img src="../assets/myPhoto.jpeg" alt="">
      <h1>Chris Woodward - Developer</h1>
      <p>
        Highly motivated and detail-oriented Full Stack Developer, who strives to deliver high quality, creative, and valuable solutions. Proven track record in multiple languages, libraries, and web frameworks. Experienced in starting and maintaining projects from scratch, as well as participating as a team member on large, established code bases. Portfolio showcases large-scale community project work done, completed classwork projects, and a variety of original web applications demonstrating proficiency in multiple stacks.
      </p>
    </div>
    <div id="triangle-left">

    </div>
    <h2>Click the logos to browse by the tools used.</h2>
    <div class="logoIntro">
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
    /* padding: 20px; */
    border-radius: 10px;
    height: 90vh;
    max-height: 90vh;
    margin-left: 250px;
    margin-right: 50px;
    background-color: #fafafa;
    z-index: 1;

  }
 .intro {
   padding: 5px;
   padding-right: 10px;
   border-top-right-radius: 8px;
   border-top-left-radius: 8px;
   display: inline-block;
   background-color: #2962ff;
   height: 50%;
 }
 .intro p, h1 {
   color: #fff;
 }
 .intro h1, p {
   text-align: justify;
  -moz-text-align-last: center;
  text-align-last: center;
 }
 .intro p {
   padding-left: 20.75vw;
 }
 .intro img {
   /* position: relative; */
   float: left;
   border-radius: 6px;
   transform: scale(.95);
   -webkit-filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.2));
   filter: drop-shadow(12px 12px 7px rgba(0,0,0,0.2));
 }
 .logoIntro {
   top: 10vh;
 }
 /* #triangle-left {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-right: 100px solid red;
  border-bottom: 50px solid transparent;
} */
</style>
