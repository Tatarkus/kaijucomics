<template xmlns:style="http://www.w3.org/1999/xhtml">
  <q-layout class="">
    <q-header style="background-color: black"  reveal elevated>
      <!-- TODO: Only show banner if on desktop-->

    <div class=" banner" >


        <q-img

          :src="img_url"
          class="banner-img"


        />
    </div>

      <div class="row" >

          <q-toolbar class="bg-dark text-white q-my justify-center" >

            <q-btn-toggle
              v-model="model"
              flat stretch
              toggle-color="yellow"
              :options="[
          {label: 'Home', value: 'one'},
          {label: 'Links', value: 'two'},
          {label: 'About', value: 'three'},
          {label: 'Contact', value: 'three'}
        ]"
            />
          </q-toolbar>




    </div>
    </q-header>


    <q-page-container class="bg-dark">
      <router-view />
    </q-page-container>







  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {  },
  data () {
    return {
      img_url: 'banner1.png'
    }
  }
}
</script>

<style>
.banner{

  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  min-width: 10%;

}

.banner-img{



  min-width: 100%;
  height: 20vh;





}

@media screen and (max-width: 768px) {
  .banner{
    min-width: 100%;

  }
}
</style>
