export default {
    registerCoach(state,Payload){
        state.coaches.push(Payload);
    },
    setCoaches(state, payload) {
        state.coaches = payload;
    }
}