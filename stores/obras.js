import { defineStore } from 'pinia'
import { useUserStore } from './user'
import {db} from "firebase/firestore"
import {collection, onSnapshot,where, 
query,orderBy,addDoc,deleteDoc,doc,updateDoc}
from 'firebase/firestore'

export const useObrasStore = defineStore('obras', {
  state:() => ({

    obras:{},
    OfertasPorId:{},
    ids:[],
    listeningOfertas:false,

    }),
  
    getters: {
    uid: (state) => (useUserStore().uid),
    },
  
    actions: {

      async listenObras() {
        try{
        db.collection('obras').onSnapshot((querySnapshot) => {
          const useObrasStore = {}
          querySnapshot.forEach((doc) => {
              obras.push({
                obraId:change.doc.id,
                obraNombre:doc.obraNombre,
                obraAutor:doc.obraAutor,
                obraPropietario:doc.obraPropietario,
                obraDescripcion:doc.obraDescripcion,
                obraPrecio:doc.obraPrecio,
                obraEtiquetas:doc.obraEtiquetas,
                obraImagenes:doc.obraImagenes
            })
          })
          
          this.obras = obras
        
        })

        }   catch(error){
                console.error(error)}
      },

      async getObras(id) {
        if (this.listener === null) {// no está subscrito aún
          obrasPorId = query(collection(db, "obras"), where("userId", "==",id)) //db supongo que lo importas de firebaseinit
          this.listener =
          getObrasSnapshot=onSnapshot(ObrasPorId, (querySnapshot) => {
            const ofertas=[] // temporal para no modificar this.ofertas tantas veces 
            querySnapshot.forEach((doc) => ofertas[doc.id] = doc.data())

          // ahora copiamos a this.ofertas, si es un array, puedes usar:     
          // this.ofertas = ofertas 
          // si es un objeto, la variable ofertas local se inicializa a objeto vacío y en lugar de usar push, sería asignar usando el id 
          // en el forEach anterior: (doc) => ofertas[doc.id] = doc.data()

          },
        )}  
      },

      async getObraId(obraId) {
        try {
          const obraRef = db.collection('obras').doc(obraId)
          const obraDoc = await obraRef.get()
          if (obraDoc.exists) {
            this.obras = { 

                id: obraDoc.id,
                obraNombre:obraDoc.obraNombre,
                obraAutor:obraDoc.obraAutor,
                obraPropietario:obraDoc.obraPropietario,
                obraDescripcion:obraDoc.obraDescripcion,
                obraPrecio:obraDoc.obraPrecio,
                obraEtiquetas:obraDoc.obraEtiquetas,
                obraImagenes:obraDoc.obraImagenes 

            }
          } else {
            console.log('No existe la obra')
          }
        } catch (error) {
          console.error(error)
        }
      },
      
      async nuevaObra(obras){

        this.db.collection('obras').add({obras})

        console.log('Added document with ID: ', res.id);

        },

        async createObra(obraData) {
            try {
              const docRef = await db.collection('obras').add(obraData)
              console.log('Obra creada con ID: ', docRef.id)
            } catch (error) {
              console.error(error)
            }
          },


          
    async _doAction(promise) {  // internal function to capture auth errors
      try {
        this.clearError()
        return await promise
      }
      catch (error) {
        const code = error.code.substring(5)
        this.error = this.errorCode[code] ? this.errorCode[code] : code
        return null
      }
    },
  },
});

