<template>
    <div>
        <h1>MASTER COMPONENETS</h1>
        <Users/>
        <Products/>
    </div>
</template>
<script lang="ts">
import Users from "../components/Users.vue"
import Products from "../components/Products.vue"
export default ({
    name:'Master',
    components:{
        Users,
        Products
    }
})
</script>

<style scoped>
div{
    background-color: rgb(203, 201, 241);
    height: 800px;
    color: black;
    text-shadow: 20pt; 
    margin: 50px 0 0 0 ;
}
</style>