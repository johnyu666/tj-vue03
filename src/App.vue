<template>
  <el-dialog v-model="visible">
    <h1>数据 。。。。</h1>
  </el-dialog>
  <el-drawer v-model="visible"></el-drawer>
  <el-button @click="()=>visible=true" type="primary">ok</el-button>
  <el-table :data="store.users">
    <el-table-column sortable prop="id" label="ID"></el-table-column>
    <el-table-column label="名字">
        <template v-slot:default="scope">
            <el-tag type="success">{{scope.row.name}}</el-tag>
        </template>
    </el-table-column>
  </el-table>
  <user-adder></user-adder>
  <ul>
    <li v-for="u of store.users">{{u.name}}</li>
  </ul>

  <router-link to="/">首页</router-link>
  <router-link :to="{name:'about'}">关于</router-link>|
  <router-link v-for="i in [1,2,3]" :to="{name:'users',params:{id:i}}">用户管理:{{i}}</router-link>
  <button @click="nav">关于</button>
  <hr>
  <router-view></router-view>
</template>
<script lang="ts" setup>
import {ref,onMounted} from "vue"
import {useRoute,useRouter} from 'vue-router'
import {useStore} from '@/stores/UserStore'
import UserAdder from '@/components/UserAdder.vue'
const store=useStore()
const visible=ref(false)
const router=useRouter()

function nav(){
  router.push({name:"about"})
}
onMounted(()=>{
  store.findAll()
})
</script>