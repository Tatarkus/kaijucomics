<template>
<div class="col-10">



  <div class="row chapter-page text-amber">
    <q-img

      class="comic-banner"
      src= '/comics/comic1/1.jpg'

    ></q-img>
  </div>
</div>
</template>

<script>
export default {
name: "ComicViewer"
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
</style>
