import {ChuckService} from './../services/ChuckService';

export const ChuckModule = {
    state:{
                  //instanciram da je objekat
        randomJoke:null
    },
    getters:{
        getRandomJoke(state){
             return state.randomJoke
        }
    },
    mutations:{
        //vrsi se sinhrono
        setRandomJoke(state,joke){
            state.randomJoke = joke;
        }
    },
    actions:{
// vrsi se asinhrono
        fatchRandomJoke(store){
           ChuckService.getRandomJoke().then((joke)=>{
              store.commit('setRandomJoke',joke)
           })
        }
    }

}