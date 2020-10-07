<template xmlns:style="http://www.w3.org/1999/xhtml">
  <q-layout class="" view="lHh Lpr lFf">
    <q-header style="background-color: black"  reveal elevated>
      <!-- TODO: Only show banner if on desktop-->

  

      <div class="row" >

          <q-toolbar class="bg-dark text-white q-my justify-center" >

            <q-btn-toggle
              v-model="model"
              flat stretch
              toggle-color="yellow"
              :options="[
          {label: 'Bunny Girl', value: 'one'},
          {label: 'Rocket Punch', value: 'two'},
          {label: 'Fuck!', value: 'three'},
        ]"
            />
          </q-toolbar>

    </div>


    </q-header>


    <q-page-container class="bg-dark">
      <router-view />



      <q-page-sticky expand position="top">
        <q-toolbar style="max-width: 50%" class=" bg-dark text-white q-my justify-around" >
          <q-btn-dropdown color="white" text-color="dark" label="Chapter 3">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Chapter 3</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Chapter 2</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Chapter 1</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-btn-dropdown color="white" text-color="dark" label="Page 25">
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Chapter 3</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Chapter 2</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label>Chapter 1</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>
      </q-page-sticky>

    </q-page-container>







  </q-layout>
</template>

<script>

export default {
  name: 'ViewerLayout',
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
  height: 10vh;





}

@media screen and (max-width: 768px) {
  .banner{
    min-width: 100%;

  }

  .banner-img{



    display: none;





  }
}
</style>
