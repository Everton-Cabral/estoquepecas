<template>
    <div class="title">
        <img src="../img/radar.png" alt="" class="logo">
        <h1>
            Estoque de Peças
        </h1>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title{
    
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #D9D9D9;
    height: 95px;
    color: rgba(255, 255, 255, 0.729);
    display: flex;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
h1{
    margin-left: 40px;
    font-size: 25px;
}
.logo{
    height: 100%;
    margin-left: 30px;
}
@media (max-width: 650px) { 
.title{
    width: 100%;
}
}

</style>
