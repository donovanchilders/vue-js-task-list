<template>
    <li class="list-group-item p-0">
        <label :class="{ 'completed': task.completed }" class="p-2 m-0 d-block" :title="task.completed ? 'Mark incomplete' : 'Mark complete'">
            <!-- eslint-disable vue/no-mutating-props-->
            <input type="checkbox" v-model="task.completed" @change="toggleTask" class="mr-2" />
            <span>{{ task.name }}</span>
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
    label {
        cursor: pointer;
        &:hover {
            background-color: #eee;
        }
        &.completed {
            background-color: #efefef;
            text-decoration: line-through;
        }
    }
</style>