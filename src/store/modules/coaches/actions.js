export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            // id: new Date().toDateString(),
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas,
        };

        const response = await fetch(`https://test-56a9c-default-rtdb.firebaseio.com/coaches/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(coachData)
        });
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to fetch!');
        }

        // context.commit('registerCoach', {
        //     ...coachData,
        //     id: userId
        // });
    },
    async loadCoaches(context) {
        const response = await fetch(`https://test-56a9c-default-rtdb.firebaseio.com/coaches.json`);
        const responseData = await response.json();
        if (!response.ok) {
            throw new Error(responseData.message || 'Failed to fetch!');
        }
        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas,
            }
            coaches.push(coach);
        }
        context.commit('setCoaches', coaches);
    }
}