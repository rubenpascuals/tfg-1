import { defineStore } from 'pinia'
import { useUserStore } from './user'
import {db} from "../firebase"
import {collection, onSnapshot,where, 
query,orderBy,addDoc,deleteDoc,doc,updateDoc}
from 'firebase/firestore'

export const useDataAccount = defineStore('account', {
  state: () => ({
      accounts:{},
      specificAccount:{},
      listeningAccounts:false,
      listeningSpecificAccount:false,
  }),
  
  actions: {
    async listenAccounts() {
      db.collection('accounts').onSnapshot((querySnapshot) => {
        const useDataAccount = {}
        querySnapshot.forEach((doc) => {
            accounts.push({
                accountId:change.doc.id,
                displayName:doc.displayName,
                rating:doc.ratings,
                monedero:doc.monedero,
                numRatings:doc.numRatings,
                averageRating:doc.rating/doc.numRatings
          })
        })
        this.accounts = accounts
      })
    },

    async getAccountById(accountId) {
        try {
          const accountRef = await db.collection('accounts').doc(accountId).get()
          this.account = accountRef.data()
        } catch (error) {
          console.error(error)
        }
      },

    async UpdateAssignedAccount(accountId, data){

        try {
            await db.collection('accounts').doc(accountId).update(data)
            this.account = data
          } catch (error) {
            console.error(error)
          }

    },

    async UpdateUserAccount(accountId, data){

        try {
            await db.collection('accounts').doc(accountId).update(data)
            this.account = data
          } catch (error) {
            console.error(error)
          }

    }

  },
})
