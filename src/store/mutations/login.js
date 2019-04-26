import axios from 'axios'

export default {
    // Teste
    login_mut(state, data) {
        state.login = data.login
        state.senha = data.senha
        axios.post("http://localhost:8080/login", state, {
            headers: { "Content-type": 'application/json' }
        }).then((res) => {
            console.log(res)
            this.$router.push("/dados-jogador")
        })
    }
}