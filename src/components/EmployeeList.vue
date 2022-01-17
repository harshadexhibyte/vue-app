<template>
    <div>
        <h1 class="text-center">--EmployeeList--</h1>
        <div class="offset-2 col-md-8">
        <b-table hover :items="EmpList"></b-table>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios,axios)

export default({
    name:'EmployeeList',
    data(){
        return{
            EmpList:[],
        }
    },
    mounted(){
        Vue.axios.get('https://reqres.in/api/users?page=2').then(res => {
        console.log(res.data.data)
        this.EmpList=res.data.data
        })
    }

})
</script>