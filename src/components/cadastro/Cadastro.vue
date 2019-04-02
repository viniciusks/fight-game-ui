<template src="./cadastro.pug" lang="pug"></template>

<script>
export default {
    name: "Cadastro",
    data() {
        return {
            nome: '',
            login: '',
            email: '',
            senha: ''
        }
    },
    methods: {
        cadastrar() {
            var items = {
                nome: this.nome,
                login: this.login,
                email: this.email,
                senha: this.senha
            }
            
            this.$store.dispatch("add_usuario_act", items)
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

