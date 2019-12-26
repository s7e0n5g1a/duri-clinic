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
          to="/about-us"
        >
          BOOK AN APPOINTMENT
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
          // {
          //   src: require('@/assets/dentist2.jpg'),
          // },
          {
            src: require('@/assets/dentist3.jpg'),
          },
          {
            src: require('@/assets/dentist4.jpg'),
          }
        ],
        //usmiech
        //<a href="https://pl.freepik.com/darmowe-zdjecie-wektory/usmiech">Uśmiech zdjęcie utworzone przez Racool_studio - pl.freepik.com</a>

        //dziewczynka
        //<a href="https://pl.freepik.com/darmowe-zdjecie-wektory/osoby">Osoby zdjęcie utworzone przez prostooleh - pl.freepik.com</a>

        //pisze cos na kartce
        //<a href="https://pl.freepik.com/darmowe-zdjecie-wektory/osoby">Osoby zdjęcie utworzone przez jcomp - pl.freepik.com</a>

        //kobieta tryzma kartke
        //<a href="https://pl.freepik.com/darmowe-zdjecie-wektory/tlo">Tło zdjęcie utworzone przez freepik - pl.freepik.com</a>

        //miasto
        //<a href="https://pl.freepik.com/darmowe-zdjecie-wektory/tlo">Tło plik wektorowy utworzone przez rawpixel.com - pl.freepik.com</a>
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

