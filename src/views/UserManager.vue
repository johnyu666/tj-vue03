<template>
    <h1>用户：{{$route.params.id}}</h1>

    <router-link :to="{name:'detail'}">详细</router-link>|
    <router-link :to="{name:'setting'}">设置</router-link>
    <hr>
    <router-view></router-view>
</template>
<script lang="ts" setup>
import {ref,onMounted,watch} from "vue"
import {useRoute} from 'vue-router'
const route=useRoute()
watch(()=>route.params.id,(id,prev)=>{
    console.log(id,prev)
},{immediate:true})
</script>