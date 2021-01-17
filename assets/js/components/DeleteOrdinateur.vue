<template>
  <v-row justify="end" class='mr-3'>
    <v-dialog v-model="dialog" persistent max-width="320">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red" icon dark v-bind="attrs" v-on="on">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline"> Suprimmer ce poste ? </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red darken-1" icon @click="dialog = false">
            <v-icon> mdi-cancel </v-icon>
          </v-btn>
          <v-btn
            color="teal darken-1"
            icon
            @click="(dialog = false), deleteOrdinateur(ordinateur)"
          >
            <v-icon> mdi-check </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script src="./deleteOrdinateur.js"/>