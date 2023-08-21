<template>
    <div class="relatorio">
        <h1>
            {{ $store.state.relatorio.Categoria }}      
        </h1>
        <h3>
            Quantidade Total {{ total}}
        </h3>
     <div class="pesquisa">
        <div class="formulario">
            <input type="text"
                 placeholder="Código"
                 class="codigo"
                 v-model="pesquisacod"
            > 
            <img src="../img/lupa.png" alt="Lupa" class="mobileno">
        </div>

        <div class="formulario">
            <input type="text"
                 placeholder="Cod Fabricante" 
                 class="codigo"
                 v-model="pesquisacodfab" 
            >
            <img src="../img/lupa.png" alt="Lupa" class="mobileno">
        </div>

        <div class="formulario">
            <input type="text" 
                placeholder="Aplicação" 
                class="aplicacao"
                v-model="pesquisaapli" 
            >
            <img src="../img/lupa.png" alt="Lupa" class="mobileno">
        </div>

        <img src="../img/voltar.png" alt="voltar" class="voltar" @click="voltar()">

     </div>   
 
     <div class="tabela">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th class="mobileno">Código do Fabricante</th>
                        <th>Aplicação</th>
                        <th>Marca do Fabricante</th>
                        <th>Quantidade</th>
                        <th>Observações</th>
                        <th class="mobileno">Corredor</th>
                        <th class="mobileno">Coluna</th>
                        <th class="mobileno">Estante</th>
                        <th class="mobileno">Prateleira</th>
                    </tr>
                </thead>
               
                <tbody>
                    <tr v-for=" (item, index) in relatorioFiltradoFinal" :key="index">
                        <td>{{ item.cod }}</td>
                        <td class="mobileno">{{ item.codFabricante }}</td>
                        <td>{{ item.carro }}</td>
                        <td>{{ item.marcaFabricante}}</td>
                        <td>{{ item.qtd }}</td>
                        <td>{{ item.obs }}</td>
                        <td class="mobileno">{{ item.corredor }}</td>
                        <td class="mobileno">{{ item.coluna }}</td>
                        <td class="mobileno">{{ item.estante }}</td>
                        <td class="mobileno">{{ item.prateleira}}</td>

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
          
            
        }
    },
    methods:{
        voltar(){
            this.$router.push('/')
        }
    },
    computed: {
        ...mapState([
            'relatorio',
        ]),
        relatorioFiltradoFinal(){
           
            /* const pesquisaLowerCase = this.pesquisacod.toLowerCase(); */
            
            return  this.relatorio.items.filter( item =>  {
                if(this.pesquisacod){
                  return  String(item.cod).toLowerCase().includes(this.pesquisacod.toLowerCase())   
                } else if(this.pesquisacodfab){
                  return  String(item.codFabricante).toLowerCase().includes(this.pesquisacodfab.toLowerCase())  
                } else if(this.pesquisaapli){
                  return  String(item.carro).toLowerCase().includes(this.pesquisaapli.toLowerCase())
                } else{
                    return this.relatorio.items
                }
            }                       
            )    
        },
        total(){
            return this.relatorio.items.reduce((acumulador, item) => acumulador + parseFloat(item.qtd), 0);

        } 
        
    },
    watch: {
        pesquisacod(){
            this.pesquisaapli = ''
            this.pesquisacodfab = ''
        },
        pesquisacodfab(){
            this.pesquisacod = ''
            this.pesquisaapli = ''
        },
        pesquisaapli(){
            this.pesquisacod = ''
            this.pesquisacodfab = ''
        }
    },
    monted:{

    }

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
.voltar{
    margin-left: 30px;
}
.voltar:hover{
    opacity: 0.5;
}


@media (max-width: 650px) { 
    .relatorio{
        padding: 0px;
    }
    h1{
        text-align: center;
    }
    .pesquisa{
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    th, td {
    padding: 2px;
  }
  
  th {
    font-size: 11px;
  }
  
  td {
    font-size: 10px;
  }
  .table{
    widows: 100%;
  }
  .mobileno{
      display: none;
  }
  .voltar{
    display: none;
  }
  .formulario{
    margin: 5px;
  }
  h3{
    text-align: center;
  }
}

</style>