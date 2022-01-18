<template>
    <div>
        <h1 class="text-center">--EmployeeList--</h1>
        <div class="offset-2 col-md-8">
        <!-- <b-table hover :items="EmpList"></b-table> -->
        <table class="table">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">First Name </th>
                <th scope="col">Last Name</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="Emp in EmpList" :key="Emp.id">
                <th scope="col">{{Emp.id}}</th>
                <th scope="col">{{Emp.email}}</th>
                <th scope="col">{{Emp.first_name}}</th>
                <th scope="col">{{Emp.last_name}}</th>
                <th scope="col">
                     <b-img :src="Emp.avatar" rounded="circle" alt="Circle image" height="40"></b-img>
                </th>
            </tr>
            </tbody>
        </table>
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