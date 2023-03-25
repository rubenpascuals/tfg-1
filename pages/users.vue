<template>
  <v-row justify="center" align="center">
  <v-card class="justify-center">
    <v-card-title class="headline text-center text-h2 text-yellow-darken-2">
      Bienvenido a Phebo
    </v-card-title>
    <v-card-text  class=" text-center text-h6 text-grey-lighten-4">
          <br />
          <p>
            Personaliza tu Perfil:
          </p>     
          <br />
          
    </v-card-text>
  </v-card>
</v-row>
</template>

<script>
export default {
  setup(){
    definePageMeta({
      middleware: 'autenticado', // poner en todas las páginas que requieran autenticación
    })
  },
}
</script>

<style scoped></style>
