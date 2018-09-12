<template>
    <div class="header">
        <v-toolbar >
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn :to="{name:'home'}" exact flat>home</v-btn>
                <v-btn :to="{name:'about'}" flat>about us</v-btn>
                <v-btn :to="{name:'contact'}" flat>contacts</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.header {
    position: sticky;
    top: 0;
    margin-top:-1px;
    z-index: 9999;
}
</style>
