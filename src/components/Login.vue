<template>
    <div>
        
        <div class="">
            <p v-if="loginInfo.errors.length">
                <ul>
                    <p v-for="er in loginInfo.errors" v-bind:key="er.id">
                        <b-alert class="alert alert-danger m-" show variant="danger">{{er}}</b-alert>
                    </p>
                </ul>
            </p>
        </div>
        <h1 class="text-center">Login</h1>
        <b-form class="offset-4 col-md-4 form" @submit="loginUser">
            <input type="text" class="form-control mt-4" v-model="loginInfo.username" placeholder="Enater your name :">
            <input type="password" class="form-control mt-4" v-model="loginInfo.password" placeholder="Enater your password :">
            <button type="submit" class="btn btn-outline-primary w-100 mt-3">Submit</button>
        </b-form>
    </div>
</template>

<script lang="ts">
export default({
    name:'Login',
    data(){
        return{
            loginInfo:{
                errors:[],
                username:null,
                password:null,
            }
        }
    },
    methods:{
        loginUser(e)
        {
            this.loginInfo.errors=[];
            
            if(this.loginInfo.username && this.loginInfo.password)
            {
                console.warn("no-error")
            }
            if(!this.loginInfo.username)
            {
                this.loginInfo.errors.push("User name is required ");
            }
            if(!this.loginInfo.password)
            {
                this.loginInfo.errors.push("Password is required ");("about/")
            }
            console.log(this.loginInfo.errors)
            e.preventDefault();
        }
    }

})
</script>