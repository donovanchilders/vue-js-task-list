<template>
    <div>
        <label>
            <input type="checkbox" v-model="task.completed" @change="toggleTask" class="mr-2" />
            <span :class="{ 'completed': task.completed }">{{ task.name }}</span>
            <span class="delete-task-action" @click.prevent="deleteTask(task.id)" v-if="task.completed">&times;</span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'task-item',
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        toggleTask() {
            if (this.task.completed) {
                this.$store.dispatch('toggleCompleted', this.task);
            }
        },
        deleteTask(id) {
            this.$store.dispatch('deleteTask', id);
        }
    }
}
</script>

<style lang="scss" scoped>
    span.completed {
        text-decoration: line-through;
    }
    span.delete-task-action {
        background-color: #eee;
        border: solid 1px #ccc;
        border-radius: 50%;
        cursor: pointer;
        display: inline-block;
        font-weight: bold;
        margin: 0 .5rem; 
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
        vertical-align: middle;
        &:active, &:hover {
            background-color: #ddd;
        }
    }
</style>