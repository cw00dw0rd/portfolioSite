<template>
  <div class="intro">
    <h1>{{ msg }}</h1>
    <p>
      Eventually this site will be a full featured Vue.JS site, <br/>
      that will showcase my projects and experience across multiple languages and frameworks.
    </p>
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
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
