<template>
  <v-layout>
    <v-layout>
      <v-flex xs12>
        <Carousel 
        :perPageCustom="[[480, 1], [768, 3]]"
        paginationEnabled
        >
        <Slide v-for="item in 6" :key="item.id">
          <SlideContent></SlideContent>
        </Slide>  

        </Carousel>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import SlideContent from '@/components/SlideContent.vue'

  export default {

    components: {
      Carousel, 
      Slide,
      SlideContent
    },

    data() {
      return {

      }
    }
  }
</script>

<style>

</style>
