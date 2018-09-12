<template>
  <v-app dark>
    

    <Header></Header>

    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  
  </v-app>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
    }
  }
}
</script>
