<template>
  <div id="app">
    <v-app class="white">
      <v-jumbotron  class="main-jumbo logo-container" height="30vw" color="white">
        <v-container fill-height>
          <v-layout align-center>
            <v-flex>
              <img id="logo" src="./assets/images/logo.png" alt="HASNAE KAFTAN" >                
            </v-flex>
          </v-layout>
      </v-container>
      </v-jumbotron>
      <v-layout row wrap>
        <v-flex xs2 fill id="left-home-picture">
          <img src="./assets/images/henri-pham-348664-unsplash.jpg" alt="woman wearing a dress" >                
        </v-flex>
        <v-flex xs10>
          <v-toolbar flat color="white">
          <v-toolbar-title hidden>KAFTAN</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="navbar">
            <v-btn flat>Accueil</v-btn>
            <v-btn flat>Collection</v-btn>
            <v-btn flat>Commander</v-btn>
            <v-btn flat>Qui Somme nous?</v-btn>
            <v-btn flat>Contact</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <router-view></router-view>
        </v-flex>
        <v-container fluid pt-5 class="grey lighten-4"> 
          <v-container grid-list-xl text-xs-center> 
            <h2 class="display-1 mb-4">Produits Populaires</h2>
            <v-layout wrap justify-space-around>
              <v-flex v-for="i in 12" xs4 :key="i">
                <v-card flat hover class="wow fadeInUp" data-wow-delay="0s">
                  <v-card-media src="/static/products/pietra-schwarzler-453095-unsplash.jpg" height="200px"></v-card-media>
                  <v-card-title primary-title class="">Kaftan Fasi <v-spacer></v-spacer><strong>1500MAD</strong></v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
        </v-container>
      </v-container>
      </v-layout>
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
  font-family: 'montserrat', Helvetica, Arial, sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar{
  .btn{
    font-size: 12px;
    text-transform: uppercase;
  }  
} 

#logo{
  width: 100%;
}


#left-home-picture{
  height: 100vh;
  width: auto;
  overflow: hidden;

  img{
    margin: auto;
    height: 135%;
    position: absolute;
    width: auto;  
    position: relative;
    left: -86%;
  }
}

.main-jumbo{
  width: 30vw;
  position: absolute;
  z-index: 10;
  top: 10%;
  left: 11%;
}

.product-container{
  width:300px;
  height:300px;
  overflow: hidden;
  margin: auto;
  display:flex;
  flex-direction: column;
  justify-content: center;

  img{
    width: 100%;
  }
}
</style>
