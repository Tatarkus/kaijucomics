<template>

    <router-link :to="{ name: 'chapters', params: {comic: comic } }">
    <q-img
    contain
    class="comic-banner"
    :src = "imagen"
    @mouseover="cambiarImagen= true"
    @mouseleave="cambiarImagen= false"
  />
  </router-link>
</template>

<script>

export default {
  name: 'ComicBanner',
  computed:{
    imagen(){
      console.log(this.cambiarImagen)
      if(this.cambiarImagen){
        return '/comics/' + this.comic.folder+ '/thumbnail/' + this.comic.thumb_files.alt
      } else {
        return '/comics/' + this.comic.folder+ '/thumbnail/' + this.comic.thumb_files.main
      }
        

    }
  },
  props:{
    comic:{}
  },
  data () {
    return {
      cambiarImagen: false
    }
  },

}
</script>
