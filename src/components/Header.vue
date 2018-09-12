<template>
    <v-toolbar>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn :to="{name:'home'}" exact flat>home</v-btn>
            <v-btn :to="{name:'about'}" flat>about us</v-btn>
            <v-btn :to="{name:'contact'}" flat>contacts</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    
}
</script>

<style>

</style>
