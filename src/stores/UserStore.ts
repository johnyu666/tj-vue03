import {defineStore} from 'pinia'

export const useStore=defineStore({
    id:'users',
    state(){
        return {users:[]}
    },
    actions:{
        findAll(){
            this.users.push(...[{id:1,name:'john'},{id:2,name:'tom'}])
        },
        add(user){
            this.users.push(user)
        }
    }
})