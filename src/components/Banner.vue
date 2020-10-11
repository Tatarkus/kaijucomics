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
        return '/comics/' + this.comic.folder+ '/thumbnail/' + this.comic.th_src
      } else {
        return '/comics/' + this.comic.folder+ '/thumbnail/' + this.comic.th_alt_src
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
  }
}
</script>
