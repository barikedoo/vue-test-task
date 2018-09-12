<template>
        <v-form ref="contactUsForm" v-model="valid" lazy-validation>

          <v-text-field
          v-model="formData.name"
          :rules="nameRules"
          label="Name"
          placeholder=" "
          required
          ></v-text-field>

          <v-text-field
          v-model="formData.phone"
          :rules="phoneRules"
          label="Phone (10 digits)"
          placeholder=" "
          required
          mask=" (###)-###-##-##"
          prefix="+7"
          ></v-text-field>

          <v-textarea
          name="input-7-1"
          v-model="formData.message"
          label="Message"
          required
          :rules="messageRules"
          auto-grow
          counter="250"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through"
          ></v-textarea>

          <v-btn
          :disabled="!valid"
          @click="submit"
          >
          submit
          </v-btn>

          <v-btn @click="clear">clear</v-btn>

          <v-btn @click="log">log</v-btn>

        </v-form>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      formData: {
        name: '',
        phone: '',
        message: '',
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length >= 3) || 'Name must be at least 3 characters'
      ],
      phoneRules: [
        v => !!v || 'Phone is required',
        v => (v && v.length == 10) || 'Phone number must be 10 digits'
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length <= 250) || 'Message cannot be longer than 250 characters'
      ],
    }),

    methods: {
      submit () {
        if (this.$refs.contactUsForm.validate()) {
          console.log('all good');

          this.$store.dispatch('setFormData', this.formData)

          let request = new Promise((resolve, reject) => {

            setTimeout(()=>{
              
              let response = require('@/assets/serverResponse.json');

              if(response.code == 200) {
                resolve(response);
              } else {
                throw SyntaxError('No file available')
              }

            }, 2000)
          })
          .then((response)=>{
            console.log(response);
          })
          .catch((error)=>{
            console.log(error)
          })
        }
      },

      clear () {
        this.$refs.contactUsForm.reset()
      },

      log() {
      console.log({name: this.name, phone: '+7' + this.phone, msg: this.message })
    }
    },
    
}
</script>

<style>

</style>
