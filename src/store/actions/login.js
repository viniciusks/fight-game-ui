export default {
    login_act: function(state, data) {
        console.log(data)
        state.commit("login_mut", data)
    }
}