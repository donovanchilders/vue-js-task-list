<template>
    <li class="list-group-item pl-0">
        <label>
            <input type="checkbox" v-model="task.completed" @change="toggleTask" class="mr-2" />
            <span :class="{ 'completed': task.completed }">{{ task.name }}</span>
            <button type="button" class="close ml-2" aria-label="Close" @click.prevent="deleteTask(task.id)" v-if="task.completed" title="Delete task">
                <span aria-hidden="true">&times;</span>
            </button>
        </label>
    </li>
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
            this.$store.dispatch('toggleCompleted', this.task);
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
        text-align: center;
        vertical-align: middle;
        &:active, &:hover {
            background-color: #ddd;
        }
    }
</style>