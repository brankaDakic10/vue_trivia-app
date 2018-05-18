import {ChuckService} from './../services/ChuckService';

export const ChuckModule = {
    state:{
                  //instanciram da je objekat
        randomJoke:null,
        // posto je input string,posle pravi mutaciju setJokeCategory,
        // pa u ChuckServisu dodjaj category
        jokeCategory:''
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
        },
        setJokeCategory(state, jokeCategory){
            console.log('provera',jokeCategory)
            state.jokeCategory = jokeCategory;
        }
    },
    actions:{
// vrsi se asinhrono
// dodajem  next isto kao i u beforeRouteEnter, 
// da bi pozivala ceo objekat iako smo ga inicijal na null
//dobavlja sledecu vrednost
        fatchRandomJoke(store,next){
                                    ///prosledi store.state.jokeCategory
           ChuckService.getRandomJoke(store.state.jokeCategory).then((joke)=>{
              store.commit('setRandomJoke',joke);
              next();
           })
        }
    }

}