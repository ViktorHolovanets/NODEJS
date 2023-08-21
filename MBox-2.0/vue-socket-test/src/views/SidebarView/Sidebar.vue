<template>
  <section>
    <div class="sidebar-block">
      <div class="side-img-bl" data-aos="fade-down" data-aos-delay="150">
        <button class="pl-bttn ms-0 mb-1">
          <router-link to="/home">
            <img class="img-side" src="../../assets/icons/mbox_home_animation.png" >
          </router-link>
        </button>
        <button class="pl-bttn ms-0 mb-1">
          <router-link to="/search">
            <img class="img-side" src="../../assets/icons/mbox_search.png">
          </router-link>
        </button>
        <button class="pl-bttn m-0">
          <router-link to="/music">
            <img class="img-side" src="../../assets/icons/mbox_music.png">
          </router-link>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>