<template>
 
 <form @submit.prevent="submitForm">
    <label>Nombre de la obra:</label>
    <input type="text" v-model="obraNombre">

    <label>Autor de la obra:</label>
    <input type="text" v-model="obraAutor">

    <label>propietario de la obra:</label>
    <input type="text" v-model="obraPropietario">

    <label>desccripcion de la obra:</label>
    <input type="text" v-model="obraDescripcion">

    <label>precio de la obra:</label>
    <input type="number" v-model="obraPrecio">

    <label>etiquetas de la obra:</label>
    <input type="password" v-model="obraEtiquetas">

    <label>imagenes asociadas:</label>
    <input type="file" @change="obraImagenes">

    <button type="submit">Crear obra</button>
  </form>

</template>

<script>
import { useObrasStore } from '../stores/obras'

export default {
 setup() {
    const store = useObrasStore()

    const submitForm = async () => {
      const obraData = {

        obraNombre: '',
        obraAutor: '',
        obraPropietario: '',
        obraDescripcion:'',
        obraPrecio:'',
        obraEtiquetas:'',
        obraImagenes:'' 

      }
      await store.createObra(obraData)
    }

    return {
      submitForm,
    },

    definePageMeta({
        middleware: 'autenticado', // poner en todas las páginas que requieran autenticación
      })
  },
    }
    </script>