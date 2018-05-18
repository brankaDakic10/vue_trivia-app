<template>
    <div class="container">


        <div class="card" style="width: 14rem;">
            <img class="card-img-top" :src="randomJoke.iconUrl" alt="Card image cap">
            <div class="card-body">

                <p class="card-text" v-text="randomJoke.value"></p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
    </div>

</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import {store} from './../store'
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
        // created() {
        //     this.fatchRandomJoke();
        // },
        // dodaj next da bi dobavili  objekat
        beforeRouteEnter(to, from, next) {
            // this.fatchRandomJoke();
            store.dispatch('fatchRandomJoke', next);

        }
    }
</script>

<style>
</style>