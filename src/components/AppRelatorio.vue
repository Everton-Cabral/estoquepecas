<template>
    <div class="relatorio">
        <h1>
            {{ $store.state.relatorio.Categoria }}
        </h1>
     <div class="pesquisa">
        <div class="formulario">
            <input type="text"
                 placeholder="Código"
                 class="codigo"
                 v-model="pesquisacod"
            > 
            <img src="../img/lupa.png" alt="Lupa"
        >
        </div>

        <div class="formulario">
            <input type="text"
                 placeholder="Cod Fabricante" 
                 class="codigo"
                 v-model="pesquisacodfab" 
            >
            <img src="../img/lupa.png" alt="Lupa">
        </div>

        <div class="formulario">
            <input type="text" 
                placeholder="Aplicação" 
                class="aplicacao"
                v-model="pesquisaapli" 
            >
            <img src="../img/lupa.png" alt="Lupa">
        </div>

        <div class="formulario">
            <input type="text" 
                placeholder="Marca da Fabricante" 
                class="fabricante"
                
            >
            <img src="../img/lupa.png" alt="Lupa">
        </div>

     </div>   
 
     <div class="tabela">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Código do Fabricante</th>
                        <th>Aplicação</th>
                        <th>Marca do Fabricante</th>
                        <th>Quantidade</th>
                        <th>Observações</th>
                    </tr>
                </thead>
               
                <tbody>
                    <tr v-for=" (item, index) in relatorioFiltradoFinal" :key="index">
                        <td>{{ item.cod }}</td>
                        <td>{{ item.codFabricante }}</td>
                        <td>{{ item.carro }}</td>
                        <td>{{ item.marcaFabricante}}</td>
                        <td>{{ item.qtd }}</td>
                        <td>{{ item.obs }}</td>

                    </tr>
                </tbody>
            </table> 
        </div>
 
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            pesquisacod: '',
            pesquisacodfab:'',
            pesquisaapli:'',
            relatorioFiltrado: ''
        }
    },
    computed: {
        ...mapState([
            'relatorio',
        ]),
        relatorioFiltradoFinal(){
            const pesquisaLowerCase = this.pesquisacod.toLowerCase();
            return  this.relatorio.items.filter( item => 
            String(item.cod).toLowerCase().includes(pesquisaLowerCase) 
        ) 
            
        }
        
    
     
    },
/*     watch: {
       
        pesquisa(){
            const pesquisaLowerCase = this.pesquisa.toLowerCase();
            console.log('moveu')
        this.relatorio.items = this.relatorio.items.filter( item => 
            String(item.cod).toLowerCase().includes(pesquisaLowerCase) 
        ) 
   }
        } */
    }



</script>

<style>
.relatorio{
    padding: 20px;
    display: flex;
    flex-direction: column
}
.pesquisa{
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
   
   
}
.formulario{
    display: flex;
    justify-content: center;
    margin: 0px 15px 0px 0px;
}
input{
    height: 30px;
    font-size: 18px;
    text-align: center;
    border-radius: 5px;
}

.codigo{
    width: 150px;

}
.fabricante{
    width: 180px;
}

.aplicacao{
    width: 200px;  
}
img{
    height: 40px;
}
img:hover{
    cursor: pointer;
}
table {
    width: 100%;
    border-collapse: collapse;
}
th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
}
thead {
    position: sticky;
    top: 0;
    background-color: #f2f2f2;
    z-index: 1;
}

</style>