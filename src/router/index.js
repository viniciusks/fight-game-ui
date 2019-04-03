import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Cadastro from '@/components/cadastro/Cadastro'
import DadosJogador from '@/components/dadosJogador/DadosJogador'
import Teste from '@/components/teste/Teste'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/dados-jogador',
      name: 'Dados Jogador',
      component: DadosJogador
    },
    {
      path: '/teste',
      name: 'Teste',
      component: Teste
    }
  ]
})
