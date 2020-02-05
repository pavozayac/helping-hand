<template>
  <nav>

    <v-app-bar app
      color="primary"
      dark
      :extended='extended'
    >
      <v-app-bar-nav-icon class="black--text" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <template v-slot:extension>
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
            extended: true,
            drawer: false,
            items: [
            { title: 'Dashboard', icon: 'announcement' },
            { title: 'Account', icon: 'alarm' },
            { title: 'Admin', icon: 'all_out' },
            ],
       }
    }
}
</script>