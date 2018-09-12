<template>
    <div>
        <v-layout justify-center>
            <h2>Contacts</h2>
        </v-layout>

        <v-layout>
            <v-flex xs10 offset-xs1 sm8 offset-sm2 md6 offset-md3>
                <ContactUsForm></ContactUsForm>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>

import ContactUsForm from '@/components/ContactUsForm.vue'

export default {
    components: {
        ContactUsForm
    }
}
</script>

<style>

</style>
