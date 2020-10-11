<template>
    <q-img
    contain
    class="comic-banner"
    :src = "imagen"
    @mouseover="cambiarImagen= true"
    @mouseleave="cambiarImagen= false"
  />
</template>

<script>

export default {
  name: 'Banner',
  computed:{
    imagen(){
      console.log(this.cambiarImagen)
      if(this.cambiarImagen){
        return '/comics/' + this.comic.folder+ '/thumbnail/' + this.comic.thumb_files.main
      } else {
        return '/comics/' + this.comic.folder+ '/thumbnail/' + this.comic.thumb_files.alt
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
