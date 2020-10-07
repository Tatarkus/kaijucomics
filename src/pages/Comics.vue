<template>
  <q-page class="bg-dark">

<div class="col-6" style="min-width: 200px">

</div>
      <!--COMIC LIST COMPONENT-->

    <comic-viewer></comic-viewer>

    <div class="col-6" style="min-width: 200px">

    </div>
  </q-page>

</template>

<script>
import ComicList from "../../src/components/ComicList";
import ComicViewer from "components/ComicViewer";


export default {
  name: 'Comics',
  components: {
    ComicViewer

  },
  data() {
    return {
      comic: [
        {
          chapter: 1,
          pages: "th1.png",
          folder:'comic1'
        },
        {
          chapter: 2,
          th_src: "th2.jpg",
          folder:'comic2'
        },
        {
          chapter: 3,
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
