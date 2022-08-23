<template>
    <button @click="add">add</button>
</template>
<script lang="ts" setup>
import {ref} from  "vue"
import {useStore} from '@/stores/UserStore'
const store=useStore()
function add(){
    store.add({id:3,name:Math.random()+""})
}
</script>