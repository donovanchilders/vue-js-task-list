<template>
    <form @submit.prevent="addTask" class="border p-3 my-4 bg-light">
        <fieldset>
            <legend>Add a new task</legend>
            <div class="row">
                <div class="col-lg-9">
                    <input type="text" v-model="name" class="form-control" required/>
                </div>
                <div class="col-lg-3 mt-3 mt-lg-0">
                    <button type="submit" :disabled="!this.name" class="btn btn-primary w-100">Add Task</button>
                </div>
            </div>
        </fieldset>
    </form>
</template>

<script>
export default {
    name: 'add-task',
    data: () => ({
        name: null
    }),
    methods: {
        addTask() {
            this.$store.dispatch('addTask', { name: this.name });
            this.name = null;
        }
    }
}
</script>
