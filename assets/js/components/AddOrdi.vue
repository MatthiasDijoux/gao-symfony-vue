<template>
  <v-dialog v-model="dialog" max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" icon dark v-bind="attrs" v-on="on"
        ><v-icon>mdi-desktop-classic</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline"> Ajouter un ordinateur </v-card-title>

      <v-card-text
        ><v-form ref="form" v-model="valid" :lazy-validation="lazy">
          <v-text-field
            label="Nom"
            v-model="name"
            :rules="nameRules"
            prepend-icon="mdi-account"
            type="text"
          /> </v-form
      ></v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="green darken-1"
          text
          @click="addOrdinateur()"
          :disabled="!valid"
        >
          Ajouter
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src='./addOrdi.js' />