import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    formData: {
      name: 'Default Vuex name',
      phone: '+79998887766',
      message: 'Default Vuex message'
    }
  },

  getters: {
    formData: (state) => {
      return state.formData;
    }
  },

  mutations: {
    _setFormData: (state, payload) => {
      state.formData = payload;
    }
  },

  actions: {
    setFormData: ({ commit }, payload) => {
      commit('_setFormData', payload);
    }
  }
})
