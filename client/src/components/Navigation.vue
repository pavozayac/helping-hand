<template>
  <nav>

    <v-app-bar app
      color="primary"
      dark 
      :extended='onTop'
      max-height='400'
      :prominent='onTop'
      v-scroll='checkScroll'
    >
      <v-app-bar-nav-icon class="black--text" @click="drawer = !drawer" v-if='!onTop'>
      </v-app-bar-nav-icon>

      <v-toolbar-title class='font-weight-bold black--text montserrat' v-if='!onTop'>Helping Hand</v-toolbar-title>

      <v-container fluid v-if='onTop'>
        <v-row no-gutters>
          <v-col class='d-inline-flex justify-space-around align-self-center'>
            <v-img class='align-self-center' src='../assets/logo-dark.png' max-height='100' max-width='100' contain />
          </v-col>
        </v-row>
      </v-container>

      <template v-slot:extension v-if='onTop'>
        <v-container class='pr-10 pl-10' fluid>
          <v-row>
            
            <v-col v-for='item in items' :key='item.title' class='d-inline-flex justify-space-around'>
              <v-btn block class='d-flex align-center black--text' depressed text link background="primary">{{ item.title }}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
    </v-app-bar>
  
    <v-navigation-drawer
      app
      temporary
      v-model='drawer'
      color='primary'>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon color="white">
            <v-icon color="black">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="black--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
    data () {
        return { 
            onTop: true,
            extended: true,
            drawer: false,
            collapsed: false,
            items: [
            { title: 'Strona Główna', icon: 'house' },
            { title: 'Wybrane', icon: 'stars' },
            { title: 'Aplikuj', icon: 'person_add' },
            { title: 'FAQ', icon: 'insert_comment'},
            { title: 'Kontakt', icon: 'phone'}
            ],
       }
    },
    methods: {
      checkScroll(){

          if (window.scrollY == 0){
            this.onTop = true
          } else {
            this.onTop = false
          }

      }
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');

.montserrat {
    font-family: Montserrat, sans-serif;
}
</style>