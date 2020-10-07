<template>

  <div class="col center-col bg-dark">

      <h4  class="text-center" style=" padding-top:10px ;margin-top:0; color: #DCDCDC" >Comics</h4>


    <router-link
      to='comic1'      >
    <div
      class="row fila "
      v-for="comic in comics"
      :key="comic.id"
      :th_src="comic.th_src">

  <q-img

    class="comic-banner"
    :src= "'/comics/' + comic.folder+ '/thumbnail/' + comic.th_src"

  >
  </q-img>



    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'ComicList',
  props:{
    comics:{}

  },
  methods:{
    data(){
      return
      {

      }
  }

  }
}




</script>
<style>

.center-col {

  margin-left: auto;
  margin-right: auto;
  width: 50%;



}
.fila {


  height: 200px;
  margin-bottom: 10px;


}
.fila:last-child{ margin-bottom: 0 !important; }

.comic-banner{

max-height: 100%;
width: 100%;


}

@media screen and (max-width: 768px) {

  .center-col {

    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 200px;


  }


}
</style>
