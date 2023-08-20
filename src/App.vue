<template>
  <div class="app"> 
    <AppTitle />
    <RouterView></RouterView>
   

  </div>
  
</template>

<script>
import AppTitle from './components/AppTitle.vue';


export default {
 components:{
  AppTitle,
 }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
}

</style>
