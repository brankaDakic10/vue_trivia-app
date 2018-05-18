<template>
    <div class="container">


        <div class="card" style="width: 14rem;">
            <img class="card-img-top" :src="randomJoke.iconUrl" alt="Card image cap">
            <div class="card-body">

                <p class="card-text" v-text="randomJoke.value"></p>
                <input type="text" class="form-control mb-2" 
                 placeholder="Enter joke category..."
                
                 @input="setCategory">
                <button @click="getNewJoke" class="btn btn-info">Get New Joke</button>
                
            </div>
        </div>
    </div>

</template>

<script>
    import { mapGetters, mapActions, mapMutations } from 'vuex'
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
            // ovo nam vise ne treba zbog store.dispatch
            // ...mapActions([
            //     'fatchRandomJoke'
            // ]),

            ...mapMutations([
             'setJokeCategory'
            ]),
            getNewJoke(){         
                                         //  prazna callback fja!
                store.dispatch('fatchRandomJoke',()=>{})
            },
             setCategory(event){
               this.setJokeCategory(event.target.value)
             }
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