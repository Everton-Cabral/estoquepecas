<template>
    <div class="categoria" :style="{ backgroundImage: `url(${require(`@/img/${img}`)})`}">
       
          <div class="descricao">
            {{ descricao }} 
          </div>
        
       
    </div>
</template>

<script>
export default {
    props:['img','descricao']
}
</script>

<style scoped>
.categoria{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 450px;
    height: 250px;
    margin-top: 50px;
    border-radius: 15px;
    margin: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    background-size: 100% 100%;
  
}
.descricao{
    font-size: 40px;
    color: rgba(255, 255, 255, 0.854);
    background-color: rgba(0, 0, 0, 0.245);
    width: 100%;
    display: flex;
    justify-content: center;
   
    
}

.categoria:hover {
    opacity: 0.6;
    cursor: pointer;
}

@media (max-width: 650px) { 
  .categoria{
    width: 320px;
    height: 150px;
  }
}
</style>
