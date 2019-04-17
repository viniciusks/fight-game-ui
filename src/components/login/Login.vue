<template src="./login.pug" lang="pug"></template>

<script>
import { setTimeout } from 'timers';
export default {
    name: 'Login',
    data() {
        return {
            msg: 'Welcome to the Fight Game!',
            login: '',
            pass: '',
            erro_login: false,
            sucesso_login: false
        }
    },
    methods: {
        login_usuario() {
            if(this.login == '' || this.pass == ''){
                this.erro_login = true
            } else {
                this.erro_login = false
                this.sucesso_login = true

                var items = {
                    login: this.login,
                    senha: this.pass
                }

                setTimeout(() => {
                    this.$store.dispatch("login_act", items)
                }, 1000)
            }
        }
    }
}
</script>

<style scoped>
a {
    font-size: 14px;
}
</style>
