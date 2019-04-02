export default {
    logar(state, data) {
        state.login = data.login
        state.senha = data.senha
        console.log(state)
    }
}