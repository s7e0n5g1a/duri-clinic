<template>
  <v-app>
<div>
  <Navbar/>
</div>
     <div>
       <router-view/>
     </div>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';

export default {

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
