<template>
  <router-link name="chapter" :to="{ params: { } }">
    <q-card class="my-card img" dark >
      <q-card-section horizontal>
          <q-img
            class="col-3 img"
            src="https://cdn.quasar.dev/img/parallax2.jpg"
          />

      <q-card-section class="q-pt-xs">
          <div class="text-overline text-grey" >Chapter {{chapter.number}}</div>
          <div class="text-h6 q-mt-sm q-mb-xs ">{{chapter.number}}. {{chapter.title}}</div>
          <div class=" text-overline text-grey"> Upload date:          </div>
      </q-card-section>
      </q-card-section>
    </q-card>


   
</router-link>
</template>

<script>

export default {
  name: 'ChapterThumbnail',
  props:{
    chapter:{}
  },
  data () {
    return {

    }
  },

}

</script>
<style>

a {  text-decoration: none;}

.my-card {
    filter: brightness(50%);
   -webkit-transition: all 0.5s ease;
   -moz-transition: all 0.5s ease;
   -o-transition: all 0.5s ease;
   -ms-transition: all 0.5s ease;
   transition: all 0.5s ease;
}

.my-card:hover {
   -webkit-filter: brightness(100%);
   filter: brightness(100%);
}
</style>

<style lang="sass" scoped>
.my-card
  width: 100%
  margin: 10px
  
</style>