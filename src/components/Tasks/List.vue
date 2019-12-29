<template>
    <div>
        <div v-if="getTasks && getTasks.length" class="my-4">
            <Task :task="task" v-for="task in getTasks" :key="task.id" />
        </div>
        <div v-else class="my-4">
            <p>No Tasks.</p>
        </div>
        <AddTask />
    </div>
</template>

<script>
import Task from './Task';
import AddTask from './Add';

export default {
    name: 'task-list',
    components: {
        Task,
        AddTask
    },
    created() {
        // Create some demo tasks

        let existingTasks = this.$store.getters['getTasksFromStorage'];
        
        if (existingTasks) {
            let items = JSON.parse(existingTasks);
            items.forEach(item => {
                this.$store.dispatch('addTask', { name: item.name, id: item.id, completed: item.completed });
            });
        } else {
            this.$store.dispatch('addTask', { name: 'Go to the store' });
            this.$store.dispatch('addTask', { name: 'Go to the bank' });
            this.$store.dispatch('addTask', { name: 'Come home and make dinner' });   
        }
    },
    computed: {
        getTasks() {
            let tasks = this.$store.getters['getTasks'];
            return tasks;
        }
    }
}
</script>
