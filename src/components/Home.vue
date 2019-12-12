<template>
  <v-component>
    <v-carousel
      hide-delimiters
      height="100vh"
      cycle
      interval = "5000"
      continuous
      show-arrows-on-hover
    >
      <v-carousel-item
        transition="slide-x-transition"
        v-for="(item, i) in items"
        :key="i"
        :src = "item.src"
        alt = "aaa">
        <div class="display-3"></div>
        <v-btn
          absolute
          x-large
          dark
          rounded
          color="primary"
          elevation="24"
          :style="{left: '50%', transform:'translateX(-50%)', top: '40%'}"
          to="/add-journey"
        >
          Zaplanuj podróż
        </v-btn>
      </v-carousel-item>
    </v-carousel>
  </v-component>



</template>
<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          {
            src: require('@/assets/dentist.jpg'),
          },
          {
            src: require('@/assets/dentist2.jpg'),
          },
          {
            src: require('@/assets/dentist3.jpg'),
          },
          {
            src: require('@/assets/dentist4.jpg'),
          }
        ],
        mini: true,
      }
    },
  }
</script>
<style>
  .s {
    transition: all 2s ease;
  }
</style>

