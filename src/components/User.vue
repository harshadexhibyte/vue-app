<template>
    <div>
        <h1>Currunt User is : </h1>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios,axios)

export default({
    name:'User',
})
</script>