<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home data="Semple Props Data" /> -->
    <!-- <Master/> -->
    <!-- <DataBind/> -->
    <!-- <ForLoop/> -->
    <!-- <SingUp/> -->
    <!-- <Login/> -->
    <!-- <EmployeeList/> -->
    <!-- <PostApi/> -->
    <DeleteApi/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Master from './components/Master.vue'
// import DataBind from './components/DataBind.vue'
// import ForLoop from './components/ForLoop.vue'
// import SingUp from './components/SingUp.vue'
// import Login from './components/Login.vue'
// import EmployeeList from './components/EmployeeList.vue'
// import PostApi from './components/PostApi.vue'
import DeleteApi from './components/DeleteApi.vue'


export default {
  name: 'App',
  components: {
    // Home,
    // HelloWorld
    // Master
    // DataBind
    // ForLoop
    // SingUp
    // Login
    // EmployeeList
    // PostApi
    DeleteApi
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
