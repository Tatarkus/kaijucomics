<template>

  <div class="col bg-dark">

    <h4 class=" comic-text text-center bg-dark">     
          Chapters
    </h4>

    
      <template v-for="chapter in chapters">
        <ChapterThumbnail :chapter="chapter" :key="chapter.name"/>
      </template>
    
 
        <!-- :src ="'/comics/' + comic.folder+ '/thumbnail/' + comic.th_src"-->
   

  </div>

</template>

<script> 
import ChapterThumbnail from "./ChapterThumbnail" 
  export default {
    name:'ChapterList',
    components:{
      ChapterThumbnail
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
      chapters:{},
      url:{},

    },
    data () {
				return {
						
				}
    }
}

</script>
<style scoped>
.chapter-page{
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

@media screen and (max-width: 768px) {

  .chapter-page {

    margin-left: auto;
    margin-right: auto;
    width: 100%;


  }


}
