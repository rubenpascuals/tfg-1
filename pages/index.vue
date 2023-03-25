<template>
  <v-row justify="center" align="center">
    <v-col cols="15" sm="10" md="8">
      <v-card class="logo py-4 d-flex justify-center">
        
        <phebo_logo />

      </v-card>
      <v-card>
        <v-card-title class="headline text-center text-h2 text-yellow-darken-2">
          Bienvenidos a Phebo
        </v-card-title>
        <v-card-text  class=" text-center text-h6 text-grey-lighten-4">
          <br />
          <p>
            ¡Crea una cuenta y unete ya a nuestra comunidad de artistas!.
          </p>     
          <br />
<foto_bienvenida/>
<br />
  <v-expansion-panels> 
      <v-expansion-panel color="yellow-darken-2"  class=" rounded-pill"
      title="¿Quieres saber más sobre esta obra?"
      text="View on the Catskill—Early Autumn
            Thomas Cole American
            1836 37.         
            Currently on view at The Met Fifth Avenue in Gallery 759" 
      >
      </v-expansion-panel>
</v-expansion-panels>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/create"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
