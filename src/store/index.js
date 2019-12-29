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
            let newTask = {
                id: (payload.id) ? payload.id : Math.random().toString(32).substr(2, 9),
                name: payload.name,
                completed: (payload.completed) ? payload.completed : false
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
        },
        updateLocalStorage(state) {
            let storage = window.sessionStorage;
            storage.setItem('dmc-todo-list', JSON.stringify(state.tasks));
        }
    },
    actions: {
        addTask ( {commit}, payload) {
            commit('addTask', payload);
            commit('updateLocalStorage');
        },
        toggleCompleted ( {commit }, payload) {
            commit('toggleCompleted', payload);
            commit('updateLocalStorage');
        },
        deleteTask ( {commit }, payload) {
            commit('deleteTask', payload);
            commit('updateLocalStorage');
        }
    },
    getters: {
        getTasks(state) {
            return state.tasks;
        },
        getTasksFromStorage(state) {
            let storage = window.sessionStorage;
            let items = storage.getItem('dmc-todo-list');
            if (items) {
                return items;
            }
            return null;
        }
    }
})
