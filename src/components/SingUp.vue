<template>
    <div>
        <h1 class="text-center">SingUp</h1>
        <b-form class="offset-4 col-md-4 form">
            <input type="text" class="form-control mt-4" v-model="singup.usename" placeholder="Enater your name :">
            <input type="password" class="form-control mt-4" v-model="singup.password" placeholder="Enater your password :">
            <input type="radio" id="student" value="student" v-model="singup.loginType">
            <label class="m-2 p-2" for="student" >student</label>
            <input type="radio" id="admin" value="admin" v-model="singup.loginType">
            <label class="m-2 p-2" for="admin">admin</label><br>
            <input type="checkbox" id="email" value="sms1" v-model="singup.notificationType">
            <label class="m-2 p-2" for="email" >Get Email notifications ?</label>
            <input type="checkbox" id="sms" value="sms2" v-model="singup.notificationType">
            <label class="m-2 p-2" for="sms">Get SMS notifications ?</label><br>
            <v-button v-on:click="singUpUser" class="btn btn-outline-primary w-100">Submit</v-button>
        </b-form>
    </div>
</template>

<script lang="ts">
export default({
    name:'SingUp',
    data(){
        return{
            singup:{
                username:null,
                password:null,
                loginType:null,
                notificationType:[]
            }
        }
    },
    methods:{
        singUpUser()
        {
            console.log(this.singup)
        }
    }

})
</script>