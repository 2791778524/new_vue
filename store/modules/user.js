const user = {
    namespaced: true,
    state: {
        title: 0
    },
    actions: {
        getData(a,b) {
            console.log(a,b);
        }
    },
    mutations: {},
    getters: {}
}
export default user