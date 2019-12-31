<template>
    <div>
        <div>Choose storage type:</div>
        <div class="btn-group btn-group-toggle" data-toggle="buttons" v-if="storageScheme">
            <label class="btn btn-secondary" :class="{'active' : scheme === 'localStorage'}">
                <input type="radio" name="scheme" id="option1" autocomplete="off" v-model="scheme" value="localStorage" @click="switchScheme('localStorage')" /> Local
            </label>
            <label class="btn btn-secondary" :class="{'active' : scheme === 'sessionStorage'}">
                <input type="radio" name="scheme" id="option2" autocomplete="off" v-model="scheme" value="sessionStorage" @click="switchScheme('sessionStorage')"> Session
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: 'storage-switcher',
    data: () => ({
        scheme: null
    }),
    mounted() {
        this.scheme = this.$store.getters["getStorageScheme"];
    },
    computed: {
        storageScheme: function() {
            let scheme = this.$store.getters['getStorageSchemeState'];
            return scheme;
        }
    },
    methods: {
        switchScheme(type) {
            this.$store.dispatch('setStorageScheme', type);
        }
    },
    watch: {
        storageScheme(newVal) {
            this.scheme = newVal;
        }
    }
}
</script>