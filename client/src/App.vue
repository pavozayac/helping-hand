<template>  
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn @click="this.$emit('')">

      </v-btn>
    </v-app-bar>
    <app-drawer></app-drawer>
    <v-content>
    </v-content>
  </v-app>
</template>