import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: []
    },
    mutations: {
        addTask(state, payload) {
            // Generate a new random ID for the task
            let newId = Math.random().toString(32).substr(2, 9);
            let newTask = {
                id: newId,
                name: payload
            };
            state.tasks.push(newTask);
        },
        deleteTask(state, payload) {
            let itemIndex = state.tasks.findIndex(task => task.id === payload);
            state.tasks.splice(itemIndex, 1);
        },
        toggleCompleted(state, payload) {
            let item = state.tasks.find(task => task.id === payload.id);
            item.completed = payload.completed;
        }
    },
    actions: {
        addTask ( {commit}, payload) {
            commit('addTask', payload);
        },
        toggleCompleted ( {commit }, payload) {
            commit('toggleCompleted', payload);
        },
        deleteTask ( {commit }, payload) {
            commit('deleteTask', payload);
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        }
    }
})
