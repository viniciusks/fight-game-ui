export default {
    add_usuario_mut(state, data) {
        state.nome = data.nome
        state.login = data.login
        state.email = data.email
        state.senha = data.senha
    }
}