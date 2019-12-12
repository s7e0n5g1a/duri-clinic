<template>
      <v-app-bar height="90px" hide-on-scroll id="bar">
        <router-link
          to="/"
          tag="v-btn">
          <v-img
            id="logo"
            src="@/assets/logo1.png"
            max-width="100px"
          ></v-img>
        </router-link>
        <router-link
          to="/"
          tag="v-btn">
          <v-img
            src="@/assets/logo2.png"
            max-width="160px"
          ></v-img>
        </router-link>



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
  #bar {
    box-shadow: inset  0px 0px 16px 0px rgba(0,0,0,0.6);
  }
</style>
