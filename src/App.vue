<template>
  <div class="app"> 
    <AppTitle />
    <AppContainer />
    <button>Cadastrar Nova Categoria</button>

  </div>
  
</template>

<script>
import AppTitle from './components/AppTitle.vue';
import AppContainer from './components/AppContainer.vue'

export default {
 components:{
  AppTitle,
  AppContainer,
 }
}
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
</style>
