<template>
    <div class="container">
        <div class="categorias">
            <AppCategoria 
                img="pastilhadefreio.jpg" 
                descricao="Pastilha de Freio"
                @click="irParaRelatorio(0)"
            />
            
            <AppCategoria 
                img="sapatas.jpg" 
                descricao="Sapatas"
                @click="irParaRelatorio(2)"
            />

            <AppCategoria 
                img="barraaxial.png" 
                descricao="Barra Axial"
                @click="irParaRelatorio(1)"
            />
            <AppCategoria 
                img="terminaldedirecao.jpeg" 
                descricao="Terminal de Direção"
                @click="irParaRelatorio(3)"
            />
            <AppCategoria 
                img="tensor.jpg" 
                descricao="Tensor de Correia Dentada"
                @click="irParaRelatorio(4)"
            />
        </div>
    
        <p>{{ jsonData }}</p>
    </div>
</template>

<script>
import AppCategoria from './AppCategoria.vue'


export default {
    components:{
        AppCategoria,
    }, 
    data(){
        return{
            
        }
    },
    methods:{
        irParaRelatorio(params){
            this.$store.commit('exibirRelatorio', params)
            this.$router.push('/relatorio')
        }
    }

}
</script>

<style scoped>
.container{
    padding: 20px;
}
.categorias{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
@media (max-width: 650px) { 
    .categorias{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .container{
       padding: 0px;
        width: 100%;
    }
}


</style>
