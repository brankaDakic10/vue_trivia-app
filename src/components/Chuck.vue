<template>
    <div class="container">
        <p>Joke: {{randomJoke.value}}</p>

        
    </div>

</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        name: 'Chuck',
        computed: {
            ...mapGetters({
                randomJoke: 'getRandomJoke'
            })

            //  mozemo i ovako pozvati->randomJoke() ali bolje je koristiti prethodno
            //  niz mapGetters i raspakovati ga
            // randomJoke(){
            //     return this.$store.getters.getRandomJoke;
            // }

        },

        methods: {
            ...mapActions([
                'fatchRandomJoke'
            ])
        },
        created() {
            this.fatchRandomJoke();
        }
    }
</script>

<style>
</style>