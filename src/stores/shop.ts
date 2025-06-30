import { defineStore } from 'pinia'

export const useShopStore = defineStore('user', {
  state: () => ({
    count:0
  }),
  actions: {
    increment(){
        this.count++;
    }
  }
})
