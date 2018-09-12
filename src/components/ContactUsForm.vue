<template>
  <div>
        <v-form ref="contactUsForm" v-model="valid" lazy-validation>

          <v-text-field
          v-model="formData.name"
          :rules="nameRules"
          label="Name"
          placeholder="Enter your name"
          required
          validate-on-blur
          ></v-text-field>

          <v-text-field
          v-model="formData.phone"
          :rules="phoneRules"
          label="Phone (8-###)"
          placeholder=" "
          required
          mask="#-(###)-###-##-##"
          validate-on-blur
          ></v-text-field>

          <v-textarea
          name="input-7-1"
          v-model="formData.message"
          label="Message"
          required
          :rules="messageRules"
          auto-grow
          counter="250"
          placeholder="Enter the message here"
          validate-on-blur
          ></v-textarea>

          <v-btn
          :disabled="!valid"
          @click="submit"
          >
          submit
          </v-btn>

        </v-form>

      <CommonAlert :alertDetails="alertDetails"></CommonAlert>

    </div>
</template>

<script>

import CommonAlert from '@/components/CommonAlert'

export default {

  components: {
    CommonAlert
  },

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
        v => (v && v.length == 11) || 'Phone number must be 11 digits'
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length <= 250) || 'Message should be 250 characters maximum'
      ],
      alertDetails: {
        type: 'success',
        msg: '',
        showAlert: false
      }
    }),

    methods: {
      submit () {
        if (this.$refs.contactUsForm.validate()) {
          console.log('all good');

          this.$store.dispatch('setFormData', this.formData)

          // Имитируем запрос к серверу через промис и таймаут
          
          let request = new Promise((resolve, reject) => {
            
            setTimeout(()=>{
              
              let response = require('@/assets/serverResponse.json');

              if(response.code == 200) {
                resolve(response);
              } else {
                reject('No file available')
              }

            }, 2000)

          })
          .then((response)=>{
            console.log(response);
            this.alertDetails.showAlert = true;
            this.alertDetails.msg = 'Thank you for your request. We\'ll contact you';
            this.alertDetails.type = 'success';
            this.formData.phone = '';
            this.formData.message = '';

            setTimeout(() => {
              this.alertDetails.showAlert = false
            }, 3000);
          })
          .catch((error)=>{
            console.log(error);
            this.alertDetails.showAlert = true;
            this.alertDetails.msg = error.message? error.message : 'There was some trouble. Please try again later';
            this.alertDetails.type = 'error';

            setTimeout(() => {
              this.alertDetails.showAlert = false
            }, 3000);
          })
        }
      },

      updateFormName() {
        this.formData.name = this.$store.getters.formData.name;
      },
    },
    created() {
      this.updateFormName()
    }

}
</script>

<style>

</style>
