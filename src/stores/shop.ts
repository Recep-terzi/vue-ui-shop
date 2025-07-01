import { defineStore } from 'pinia'

export const useShopStore = defineStore('user', {
  state: () => ({
    count:0,
    admin: {username:'recep',password:'1234'},
    adminIsLogin : true,
  }),
  actions: {
    increment(){
        this.count++;
    },
    setAdmin(){
      this.adminIsLogin = true;
    }
  }
})
