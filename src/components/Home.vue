<template>
    <div>
        <h1>My Home component</h1>
        <h1>{{data}}</h1>
        <b-button class="m-2" variant="outline-primary" v-on:click="MyBtnClick" >click me </b-button>
        <b-button class="m-2" variant="outline-primary" v-on:click="MyBtnClickToHide" >click me to hide component </b-button>
        <h2 v-if="show">CLICK TO HIDE DATA </h2>
        <h2 v-else>CLICK TO SHOW DATA</h2>

    </div>
</template>

<script lang="ts">
export default({
    name:'Home',
    props:{
        data:String
    },
    methods:{
        MyBtnClick()
        {
            console.log('Clicking Button Successfully')
        },
        MyBtnClickToHide()
        {
            this.show = !this.show
        }
    },
    data()
    {
        return {show:true}
    }
})
</script>