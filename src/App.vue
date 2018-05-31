<template>
  <div id="app" >
    <v-app v-cloack class="grey lighten-4">
      <v-layout row wrap>
        <v-flex xs2 fill id="left-home-picture">
          <img src="./assets/images/henri-pham-348664-unsplash.jpg" alt="woman wearing a dress" >                
        </v-flex>
        <v-flex xs12>
          <v-toolbar flat color="white">
            <v-toolbar-title hidden>KAFTAN</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="navbar">
              <v-btn to="/" flat>Accueil</v-btn>
              <v-btn flat>Collection</v-btn>
              <v-btn flat>Commander</v-btn>
              <v-btn :to="{name:'aboutUs'}" flat>Qui Somme nous?</v-btn>
              <v-btn flat>Contact</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <router-view></router-view>
        </v-flex>
      </v-layout>
      <!-- footer starts here -->
      <v-footer color="" class="pa-3 pt-5 footer wow fadeInUp" dark height="auto">
        <v-layout row wrap class="text-xs-left" justify-center>
          <v-flex lg2 md3 sm4 xs12>
            <h2 class="footer-heading pb-3">Collection</h2>
            <ul class="wow fadeInLeft">
              <li><a href="">Swiri</a></li>
              <li><a href="">Rbati</a></li>
              <li><a href="">Fasi</a></li>
              <li><a href="">Chamali</a></li>
            </ul>
          </v-flex>
          <v-flex lg2 md3 sm4 xs12>
            <h2 class="footer-heading pb-3">Commande</h2>
            <ul class="wow fadeInTop">
              <li><a href="">Statut de commande</a></li>
            </ul>
          </v-flex>
          <v-flex lg2 md3 sm4 xs12>
            <h2 class="footer-heading pb-3">Qui somme nous?</h2>
            <ul class="wow fadeInRight">
              <li><a href="">Hasna Kaftan</a></li>
            </ul>
          </v-flex>
          <v-flex xs12>
            <div class="text-xs-center mt-3">&copy; Hasna Kaftan {{ new Date().getFullYear() }} Tous droits réservées </div>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',

    created(){
      window.addEventListener("scroll",()=>{
        parallax();

      }); 

      function parallax(){
        var scrolled =window.scrollY;
        document.querySelector('#left-home-picture img').style.top=-(scrolled*0.3)+'px';
      }
    }

  }
</script>

<style lang="scss">
@import './assets/css/animate.css';

#app {
  font-family: 'karla', Helvetica, Arial, sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#left-home-picture{
  height: 100vh;
  width: auto;
  overflow: hidden;
  position: absolute;
  z-index:1;

  img{
    margin: auto;
    height: 135%;
    width: auto;  
    position: relative;
    left: -86%;
  }
}

.navbar{
  .btn{
    font-size: 13px;
    text-transform: uppercase;
  }  
} 

.footer-heading{
    font-weight:bold;
    text-transform:capitalize;
}

[v-cloack]{
  display:none;
}

.footer{
  z-index:3;
  a{
    text-decoration:none;
    color: #afafaf;
  }

  li{
    list-style:none;
   font-size:16px;
  }
}
</style>
