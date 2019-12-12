<template>
      <v-app-bar height="90px" hide-on-scroll>
        <v-img
          id="logo"
          src="@/assets/logo1.png"
          max-width="100px"
        ></v-img>
        <v-img
          src="@/assets/logo2.png"
          max-width="160px"
        ></v-img>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>



        <v-row>
            <router-link
              to="/about-us"
              tag="v-btn">
              <div class="menus">ABOUT US</div>
            </router-link>

          <v-spacer></v-spacer>
            <router-link
              to="/services"
              tag="v-btn">
              <div class="menus">SERVICES</div>
            </router-link>

          <v-spacer></v-spacer>

          <router-link
              to="/specialists"
              tag="v-btn">
              <div class="menus">OUR SPECIALISTS</div>
            </router-link>
          <v-spacer></v-spacer>

          <router-link
              to="/contact"
              tag="v-btn">
              <div class="menus">CONTACT</div>
             </router-link>
          <v-spacer></v-spacer>


        </v-row>



      </v-app-bar>
</template>
<style>
  .menus {
    font-size: 1.2vw;
    font-weight: 600;
    font-family: "Arial", Times;
    color: #235c5b;
  }
</style>
