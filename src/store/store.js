import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Imports
import cadastro_actions from "./actions/cadastro.js"
import cadastro_mutations from "./mutations/cadastro.js"
import cadastro_state from "./models/cadastro.js"

import login_actions from "./actions/login.js"
import login_mutations from "./mutations/login.js"
import login_state from "./models/login.js"

// Criação de constantes
const cadastro = {
    actions: cadastro_actions,
    mutations: cadastro_mutations,
    state: cadastro_state
}

const login = {
    actions: login_actions,
    mutations: login_mutations,
    state: login_state
}

// Exports
export default new Vuex.Store({
    modules: {
        cadastro: cadastro,
        login: login
    }
})