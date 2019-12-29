<template>
    <footer class="main border-top pt-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <p>
                        <small>&copy; 2019 Donovan Childers - Yet another To-do list built with Vue.js </small>
                    </p>
                </div>
                <div class="col-lg-6 text-lg-right">
                    <button class="btn btn-sm btn-link" @click.prevent="clearSessionStorage">Clear Session Storage</button>
                    <div v-if="sessionCleared"><small>Cleared! <a href="">Reload</a> to show all default items</small></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer-component',
    data: () => ({
        sessionCleared: false
    }),
    methods: {
        clearSessionStorage() {
            this.$store.dispatch('clearStorage');
            this.sessionCleared = true;
        }
    }
}
</script>