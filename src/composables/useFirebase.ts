/* eslint-disable import/prefer-default-export */
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useChangeMoneyStore } from '@/store'

export function useFirebase() {
  const store = useChangeMoneyStore()
  async function getRatesDocument() {
    const ratesCollection = collection(db, 'rates')
    const rateSnapshot = await getDocs(ratesCollection)
    const rates = rateSnapshot.docs.map((doc) => doc.data())
    const ratePurchase = rates[0].purchase_price
    const rateSale = rates[0].sale_price
    store.setPurchase(ratePurchase)
    store.setSale(rateSale)
  }

  return {
    getRatesDocument,
  }
}
