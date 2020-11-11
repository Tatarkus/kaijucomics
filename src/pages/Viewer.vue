<template>
  <q-page class="page">


    <div class="main-row">
     
    
    <div class="col side-bar">
      
    </div>
    
    AFASFASDFADFFAF
    <div class="">
    
      
    </div>
      <!--COMIC LIST COMPONENT-->
      

    <div class="col side-bar" >
      
    </div>
    </div>


    


  
  

  </q-page>



</template>

<script>


//@mouseover.native
export default {
  name: 'Viewer',
  components: {

  },
  data() {
    return {
      comics: ""
    }
  },

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
