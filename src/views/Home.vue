<template>
      <v-flex xs10 offset-xs1>
        <Carousel 
        :perPageCustom="[[480, 1], [768, 3]]"
        paginationEnabled
        navigationEnabled
        :perPage="1"
        >
        <Slide v-for="item in 6" :key="item.id">
          <SlideContent></SlideContent>
        </Slide>  

        </Carousel>

        <v-layout>
          <div class="fake-block">

          </div>
        </v-layout>
      </v-flex>
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
.VueCarousel-navigation-button {
  color: #fff!important;
  font-size: 30px;
}

.fake-block {
  height: 800px;
  width: auto;
}
</style>
