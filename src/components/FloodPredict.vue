<template>
  <div class="hello">
    <div class="tabs is-centered">
      <ul>
        <li class="is-active"><a>Rainfall</a></li>
        <li><a>Flood Incident Count</a></li>
        <li><a>Flood Prediction</a></li>
      </ul>
    </div>

    <div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3f3094;
}

.is-active{
  background-color: #f79d49af;
}
</style>
