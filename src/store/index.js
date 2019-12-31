import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        storageScheme: 'sessionStorage',
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
        updateStorage(state) {
            let storage = window[state.storageScheme];
            storage.setItem('dmc-todo-list', JSON.stringify(state.tasks));
        },
        clearStorage(state) {
            let storage = window[state.storageScheme];
            storage.removeItem('dmc-todo-list');
        },
        setStorageScheme(state, payload) {
            localStorage.setItem('dmc-todo-list-storage-scheme', payload);
            state.storageScheme = payload;
        },
        saveStorageScheme(state, payload) {
            state.storageScheme = payload;
        }
    },
    actions: {
        addTask ( {commit}, payload) {
            commit('addTask', payload);
            commit('updateStorage');
        },
        toggleCompleted ( {commit }, payload) {
            commit('toggleCompleted', payload);
            commit('updateStorage');
        },
        deleteTask ( {commit }, payload) {
            commit('deleteTask', payload);
            commit('updateStorage');
        },
        clearStorage( {commit}) {
            commit('clearStorage');
        },
        setStorageScheme( {commit}, payload) {
            commit('setStorageScheme', payload);
        },
        saveStorageScheme( {commit}, payload) {
            commit('saveStorageScheme', payload);
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
        },
        getStorageScheme(state) {
            return localStorage.getItem('dmc-todo-list-storage-scheme');
        },
        getStorageSchemeState(state) {
            return state.storageScheme;
        }
    }
})
