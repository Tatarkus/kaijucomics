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
      
    }
  }
}
</script>
<style>
</style>
