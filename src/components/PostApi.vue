<template>
    <div>
    
        <h1 class="text-center">Create Job </h1>
        <b-form class="offset-4 col-md-4 form" @submit="CreateJob">
            <input type="text" class="form-control mt-4" v-model="createInfo.name" placeholder="Enater your name :">
            <input type="text" class="form-control mt-4" v-model="createInfo.job" placeholder="Enater job :">
            <button type="submit" class="btn btn-outline-primary w-100 mt-3">Submit</button>
        </b-form>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios,axios)

export default({
    name:'PostApi',
    data(){
        return{
            createInfo:{
                errors:[],
                name:null,
                job:null,
            }
        }
    },
    methods:{
        CreateJob(e)
        {
            this.createInfo.errors=[];
            console.log(this.createInfo)
            this.axios.post('https://reqres.in/api/users',this.createInfo).then((res) => {
               console.log(res.data) 
            })
            e.preventDefault();
        }
    }

})
</script>