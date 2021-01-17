<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    max-width="290"
  >
    <template v-slot:activator="{ on, attrs }">
      <div style="width:150px">
        <v-text-field
          v-model="date"
          prepend-icon="mdi-calendar"
          lang="fr"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </div>
    </template>
    <v-date-picker :min="min" v-model="date" @input="addDate()"></v-date-picker>
  </v-menu>
</template>

<script src='./datePicker.js' />