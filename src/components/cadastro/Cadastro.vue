<template src="./cadastro.pug" lang="pug"></template>

<script>
import { setInterval, setTimeout } from 'timers';
export default {
    name: "Cadastro",
    data() {
        return {
            nome: '',
            login: '',
            email: '',
            senha: '',
            conf_senha: '',
            erro_cadastro: '',
            sucesso_cadastro: false
        }
    },
    methods: {
        cadastrar() {
            if(this.nome == '' || this.login == '' || this.email == '' ||
                this.senha == '' || this.conf_senha == ''){
                    this.erro_cadastro = 'campos_vazios'
            }
            else {
                if(this.senha == this.conf_senha) {
                    var items = {
                        nome: this.nome,
                        login: this.login,
                        email: this.email,
                        senha: this.senha
                    }
                    this.sucesso_cadastro = true

                    setTimeout(this.$store.dispatch("add_usuario_act", items), 1000)
                } else{
                    this.erro_cadastro = 'senhas_diferentes'
                }
            }
        }
    },
    computed: {
        model() {
            return this.$store.state.cadastro.model
        }
    }
}
</script>

<style>

</style>

