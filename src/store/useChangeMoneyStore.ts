import { defineStore } from 'pinia'

export const useChangeMoneyStore = defineStore('changeMoneyStore', {
  state: () => ({
    ratePurchase: 0,
    rateSale: 0,
  }),
  actions: {
    setPurchase(ratePurchase: number) {
      this.ratePurchase = ratePurchase
    },
    setSale(rateSale: number) {
      this.rateSale = rateSale
    },
  },
})
