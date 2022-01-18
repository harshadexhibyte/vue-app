<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link class="m-3 btn btn-outline-primary" to="/">Home</router-link>
          <router-link class="m-3 btn btn-outline-primary" to="/HelloWorld">HelloWorld</router-link>
          <router-link class="m-3 btn btn-outline-primary" to="/Master">Master</router-link>
          <router-link  class="m-3 btn btn-outline-primary" to="/ForLoop">ForLoop</router-link>
          <router-link class="m-3 btn btn-outline-primary" to="/DataBind">DataBind</router-link>
          <router-link class="m-3 btn btn-outline-primary" to="/SingUp">SingUp</router-link>
          <router-link class="m-3 btn btn-outline-primary" to="/EmployeeList">EmployeeList</router-link>
          <router-link class="m-3 btn btn-outline-primary" to="/PostApi">PostApi</router-link>
          <router-link  class="m-3 btn btn-outline-primary" to="/DeleteApi">Delete Api</router-link>
          <router-link  class="m-3 btn btn-outline-primary" to="/User/:1">User1</router-link>
          <router-link  class="m-3 btn btn-outline-primary" to="/User/:2">User2</router-link>
          <router-link  class="m-3 btn btn-outline-primary" to="/User/:3">User3</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view> 
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
    <!-- <DeleteApi/> -->
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
// import DeleteApi from './components/DeleteApi.vue'


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
    // DeleteApi
  
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
