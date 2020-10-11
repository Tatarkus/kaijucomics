<template>

  <div class="col center-col bg-dark">

    <h4 class=" comic-text text-center bg-dark">     
          Comics
    </h4>

    <router-link to='comic1'>
      <template v-for="comic in comics">
        <Banner :comic="comic" :key="comic.id"/>
      </template>
      
        <!-- :src ="'/comics/' + comic.folder+ '/thumbnail/' + comic.th_src"-->
    </router-link>

  </div>

</template>

<script>  
  import Banner from "./Banner"
  export default {
    name:'ComicList',
    components:{
      Banner
    },
    methods:{
      getUrl(comic, alt){
       
        console.log('/comics/' + comic.folder+ '/thumbnail/' + comic.th_src)
        return '/comics/' + comic.folder+ '/thumbnail/' + comic.th_src
      },
      hoverOnBanner(comic, alt){
        
      }
      
    },
    props:{
      comics:{},
      url:{},

    },
    data () {
				return {
						
				}
    }
}

</script>
<style>

 .comic-text{
  margin-top:0em;
  margin-bottom:0em;
  color: #DCDCDC;

}

  .center-col {
    display: block;
    margin-left: auto;
    margin-right: auto; 
    min-width: 60em;
    margin-top: 0.7em;
   
    
    
}

  .fila:last-child{ margin-bottom: 0 !important; }

  .comic-banner{
    
  
  margin-bottom: 0em;

}

  @media screen and (max-width: 768px) {

  .center-col {
    
    margin-left: auto;
    margin-right: auto;
    min-width: 20em;
    margin-top: 0em;
  }
   .comic-text{
      margin-top:0em;
  
    }
}
</style>
