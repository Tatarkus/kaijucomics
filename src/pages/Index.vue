<template>
  <q-page class="bg-dark">


      <!--COMIC LIST COMPONENT-->
      <ComicList :comics="comics"></ComicList>


  </q-page>

</template>

<script>
import ComicList from "../../src/components/ComicList";


export default {
  name: 'Index',
  components: {
    ComicList

  },
  data() {
    return {
      comics: [
        {
          id: 1,
          th_src: "th1.png",
          folder:'comic1'
        },
        {
          id: 2,
          th_src: "th2.jpg",
          folder:'comic2'
        },
        {
          id: 3,
          th_src: "th3.jpg",
          folder:'comic3'
        }

      ]
    }
  }
}
</script>
<style>
</style>
