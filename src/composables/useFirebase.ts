/* eslint-disable import/prefer-default-export */
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export function useFirebase() {
  async function getRatesDocument() {
    const ratesCollection = collection(db, 'rates')
    const citySnapshot = await getDocs(ratesCollection)
    const rates = citySnapshot.docs.map((doc) => doc.data())
    return rates
  }

  return {
    getRatesDocument,
  }
}
