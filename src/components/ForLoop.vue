<template>
    <div class="offset-2 col-md-8">
        <b-table hover :items="users"></b-table>
    </div>
</template>
<script lang="ts">
export default({
    name:'ForLoop',
    data(){
        return{
            users:[
                {id:1,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:2,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:3,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:4,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:5,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:6,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:7,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:1,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:2,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:3,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:4,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:5,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:6,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
                {id:7,email:"harshad@exhibyte.com",name:"harshad",city:"surat",pin:526363},
            ]
        }
    }
})
</script>