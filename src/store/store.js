import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Imports
import cadastro_actions from "./actions/cadastro.js"
import cadastro_mutations from "./mutations/cadastro.js"
import cadastro_state from "./models/cadastro.js"

// Criação de constantes
const cadastro = {
    actions: cadastro_actions,
    mutations: cadastro_mutations,
    state: cadastro_state
}

// Exports
export default new Vuex.Store({
    modules: {
        cadastro: cadastro
    }
})