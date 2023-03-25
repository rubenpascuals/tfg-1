<template>
    <form @submit.prevent="'handleSubmit'">
  
     <input
      type="text"
      placeholder=""
      v-model="nuevaobra"
     >
  
     <input
      type="text"
      placeholder=""
      v-model="nuevaobra"
     >
  
     <input
      type="text"
      placeholder=""
      v-model="nuevaobra"
     >
  
     <input
      type="text"
      placeholder=""
      v-model="nuevaobra"
     >
     
     <input
      type="text"
      placeholder=""
      v-model="nuevaobra"
     >
     
     <button>Add</button>
  
    </form>
    </template>
  
  <script>
  import {data} from '../stores/data'
  import {ref} from 'vue'
  
  export default {
    props: {
      error: {
        type: String,
        default: '',
      },
    },
    setup(){
      definePageMeta({
        middleware: 'autenticado', // poner en todas las páginas que requieran autenticación
      })
  
      const nuevaObra=ref('')
      const handleSubmit=()=>{
  
        if (nuevaObra.obra_nombre.length>0){
            data.nuevaObra({
              obra_nombre:nuevaObra.obra_nombre,
              obra_autor:nuevaObra.obra_autor,
              obra_propietario:nuevaObra.obra_propietario,
              obra_descripcion:nuevaObra.obra_descripcion,
              obra_precio:nuevaObra.obra_precio,
              obra_etiquetas:nuevaObra.obra_etiquetas,
              obra_imagenes:nuevaObra.obra_imagenes
            })
  
            nuevaObra.obra_nombre='',
            nuevaObra.obra_autor='',
            nuevaObra.obra_propietario='',
            nuevaObra.obra_descripcion='',
            nuevaObra.obra_precio='',
            nuevaObra.obra_etiquetas='',
            nuevaObra.obra_imagenes=''
  
        }
  
       }
       
       return {handleSubmit, nuevaObra}
       
    },
    computed: {
      rules() {
        return {
          required: (value) => !!value || 'Required',
          }
               
      },
      
    },
      }
      </script>