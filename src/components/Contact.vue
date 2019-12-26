<template>
  <v-container fluid id ="contact_background" >
    <v-card  dark id="card">
      <v-row class="data" >
        <v-col class="data" :cols="4"  align="center">
          <v-row>
            <v-list-item>
              <v-list-item-content>
                <v-icon large color="#79ccc9">mdi-map-marker</v-icon>
                <h3 align="center">Address</h3>
                <h5 align="center">ulica włoska 12 <br/>  57-500 Warszawa</h5>
              </v-list-item-content>
            </v-list-item>
          </v-row>

        <v-row>
          <v-list-item>
            <v-list-item-content>
              <v-icon large color="#79ccc9">mdi-phone</v-icon>
              <h3 align="center">Phone Number</h3>
              <h5 align="center">+48 000 000 000</h5>
            </v-list-item-content>
          </v-list-item>
        </v-row>

        <v-row>
          <v-list-item>
            <v-list-item-content>
              <v-icon large color="#79ccc9">mdi-email-outline</v-icon>
              <h3 align="center">General Support</h3>
              <h5 align="center">kontakcik@wp.pl</h5>
            </v-list-item-content>
          </v-list-item>
        </v-row>
        </v-col>

        <v-col :cols="8" align="center">
          <v-row justify="center" >
            <h2 id="contactUs">Contact Us</h2>
          </v-row>

          <v-row class="text-field">
            <v-text-field
              label="Your e-mail address"
              outlined
              rounded
              solo
              light
              dense
            >
              <template v-slot:label>
<!--              <v-icon style="vertical-align: middle">mdi-email-outline</v-icon>-->
                Your e-mail address
              </template></v-text-field>
          </v-row>

          <v-row class="text-field">
            <v-text-field
              label="Your e-mail address"
              outlined
              rounded
              solo
              light
              dense
            >
              <template v-slot:label>
<!--                <v-icon style="vertical-align: middle">mdi-email-outline</v-icon>-->
                Your name
              </template></v-text-field>
          </v-row>

          <v-row class="text-field">
            <v-textarea
              label="Your message"
              no-resize
              outlined
              rounded
              solo
              light
              dense
              >
            </v-textarea>
          </v-row>

          <v-row class="text-field">
            <v-btn rounded color="#518c8b" id="send-message">Send Message</v-btn>
          </v-row>

        </v-col>

      </v-row>
      <v-row>
        <!--      <v-card-actions class="justify-center">-->
        <!--        <v-btn text>Button</v-btn>-->
        <!--        <v-btn text>Button</v-btn>-->
        <!--      </v-card-actions>-->
      </v-row>


    </v-card>
  </v-container>
</template>

<style>
  #contact_background {
    position: absolute;
    background-image:   url('../assets/contact-background.jpg');
    background-size: cover;
    height:90%;

  }
  #card {

    left: 50%;
    transform: translateX(-50%);
    top: 10%;
    height: 70vh;
    max-width: 50%;
    border-radius:50px;

  }
  .data {
    background-size: cover;
    height: 70vh;
    align-content: center;
    align: center;

  }
  #contactUs {
    margin-top: 7vh;
    margin-bottom: 4vh;
  }
  .text-field {
       width: 40vh;
    justify-content: center
     }
</style>