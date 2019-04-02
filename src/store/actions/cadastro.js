export default {
    add_usuario_act: function(state, data) {
        console.log(state)
        state.commit("add_usuario_mut", data)
    }
}