import mutations from "../requests/mutations.js";
import getters from "../requests/getters.js";
import actions from "../requests/actions.js";

export default {
    namespaced: true,
    state(){
        return {
            requests: []
        }
    },
    mutations,
    getters,
    actions
}