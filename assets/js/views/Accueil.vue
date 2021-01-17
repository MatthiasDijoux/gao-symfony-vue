<template>
  <v-container>
    <datePicker :ordinateurs="ordinateurs" @addDate="selectDate($event)" />
    <addOrdi @addOrdi='add($event)'/>
    <v-col md="4">
      <v-pagination
        :length="pagination.pageCount"
        color="error"
        v-model="pagination.page"
        @input="getOrdinateurs"
        circle
      >
      </v-pagination>
    </v-col>

    <v-row>
      <v-col md="4" v-for="ordinateur in ordinateurs" :key="ordinateur.horaire">
        <ordinateurs :ordinateur="ordinateur" :date="date" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./accueil.js" />