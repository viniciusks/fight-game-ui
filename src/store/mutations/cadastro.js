import axios from 'axios'

export default {
    add_usuario_mut(state, data) {
        state.nome = data.nome
        state.login = data.login
        state.email = data.email
        state.senha = data.senha
        axios.post("http://localhost:8080/usuarios", state, {
            headers: {"Content-type": "application/json"}
        }).then((res) => {
            console.log(res)
            this.$router.push("/")
        })
    }
}