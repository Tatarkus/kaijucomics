<template>
  <q-page class="page">


    <div class="main-row">
     
    
    <div class="col side-bar">
      
    </div>
    
    <ComicList :comics="comics"></ComicList>
    <div class="">
    
      
    </div>
      <!--COMIC LIST COMPONENT-->
      

    <div class="col side-bar" >
      
    </div>
    </div>


    
 <q-page-sticky  v-if="this.$q.platform.is.mobile" position="top" >

    <h4 class=" comic-text text-center bg-dark">
        
        Comics
    </h4>
         
  </q-page-sticky>

  
  

  </q-page>



</template>

<script>
import ComicList from "../../src/components/ComicList";

//@mouseover.native
export default {
  name: 'Index',
  components: {
    ComicList

  },
  data() {
    return {
      comics: ""
    }
  },
  /*created: function () {
    var _this = this;
    $.getJSON('comics.json', function (comics) {
    _this.comics = json;
    console.log(json)
    console.log(comics)
    });*/
  created:function(){
    fetch('comics.json')
    .then(r=>r.json())
    .then(json=> {
      this.comics=json.comics
    })
    
  }
}
</script>
<style>


  .page{
    background-color:#808080;
    padding-top: 0em;
    min-height: 1px;

  }

.main-row {
  
  background-color:#808080;
  display: flex;
  
}
  .side-bar {
    width: 25%;
    min-width: 10px;

  }
  @media screen and (max-width: 768px) {

    .side-bar {
      display:none;

    }

    .page{
      background-color:#808080;
      padding-top: 0em;
    }

    
  }

</style>
