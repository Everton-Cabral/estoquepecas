import { createStore } from 'vuex';
import datajson from '@/data.json'

const store = createStore({
  state() {
    return{
        data: datajson,
        categoria: '',
        relatorio: [],
        relatorioFiltrado: [],
    }
    
  },
  mutations: {
   exibirRelatorio(state, params){
    state.relatorio = state.data[params]
   },


  },
  actions: {
    
  },
  getters: {
    
  }
});

export default store;
