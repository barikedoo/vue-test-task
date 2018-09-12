<template>
    <v-alert
        transition="scale-transition"
        absolute
        :value="alertDetails.showAlert"
        dismissible
        :type="alertDetails.type"> 
        <span class="subheading"> {{alertDetails.msg}}</span>
    </v-alert>
</template>

<script>
export default {
  props: ["alertDetails"],
  data() {
    return {
        
    };
  },
};
</script>

<style>
</style>
