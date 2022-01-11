<template>
    <div class="offset-3 col-md-6">
        <h1>DATA BIND</h1>
        <input type="text" v-model="message" class="form-control">
        <h1 style="white-space:pre-line">{{message}}</h1>
    </div>
</template>

<script lang="ts">
export default({
    name:'DataBind',
    data(){
        return{
            message:"Hello"
        }
    }
})
</script>