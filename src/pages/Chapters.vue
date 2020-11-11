<template>
 
  <q-page class="bg-dark">

<div class="col-6" style="min-width: 200px">

</div>
      <!--COMIC LIST COMPONENT-->

    <ChapterList :chapters=" this.comic.chapters"></ChapterList>

    <div class="col-6" style="min-width: 200px">

    </div>
  </q-page>

</template>




<script>
import ChapterList from "../../src/components/ChapterList";


export default {
  name: 'Chapters',
  props:{
    comic: Object
  },
  components: {
    ChapterList
  },
  data() {
    return {
      
    }
  },
  created:function(){
    
  }
}
</script>
<style>
</style>
