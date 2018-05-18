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
// dodajem  next isto kao i u beforeRouteEnter, 
// da bi pozivala ceo objekat iako smo ga inicijal na null
//dobavlja sledecu vrednost
        fatchRandomJoke(store,next){
           ChuckService.getRandomJoke().then((joke)=>{
              store.commit('setRandomJoke',joke);
              next();
           })
        }
    }

}