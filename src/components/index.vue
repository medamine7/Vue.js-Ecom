<template>
  <div>
    <v-container text-xs-center fluid class="pa-0 index-container white">
      <v-jumbotron  class="main-jumbo logo-container " height="30vw" color="white">
        <v-container fill-height>
          <v-layout wrap align-center>
            <v-flex >
              <img id="logo" src="../assets/images/logo.png" alt="HASNAE KAFTAN" >                
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <v-layout row wrap justify-end >
        <v-flex xs8 id="right-home-picture">
          <v-carousel hide-delimiters class="hero-carousel">
            <v-carousel-item v-for="(image,index) in images" :key="index"
            :src="image"
            transition="fade"
            reverse-transition="fade"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex class="text-xs-center white pa-5 mt-5" xs12>
          <v-layout justify-center>
              <v-flex xs7>
                <h2 class="display-1 indicator mb-4">Haute couture traditionelle</h2>
                <p id="portrait-text" class="body-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum natus saepe recusandae perferendis possimus cupiditate nam assumenda dolorem harum quidem ab voluptatum laudantium suscipit, quos dicta eligendi odio ipsam perspiciatis praesentium inventore quia dolores dignissimos aspernatur tempora. Facilis, commodi, quibusdam.</p>
                <v-btn large color="red" dark class="subheading wow fadeIn" depressed>Commander</v-btn>
              </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl pt-5> 
      <h2 class="display-1 indicator mb-4">Produits Populaires</h2>
      <v-layout row wrap justify-center>
        <v-flex xl8 lg8 md10 sm10 xs12>
          <v-layout wrap justify-center row>
            <v-flex xl8 lg8 md8 sm12 xs12>
              <v-card flat hover class="wow fadeInUp" data-wow-delay="0">
                <v-card-media src="/static/products/pietra-schwarzler-453095-unsplash.jpg" height="250px"></v-card-media>
                <v-card-title primary-title class="product-title"><strong>Kaftan Fasi </strong><v-spacer></v-spacer><span>1500MAD</span></v-card-title>
              </v-card>
            </v-flex>
            <v-flex v-for="i in 4" :key="i" xl3 lg4 md4 sm6 xs12>
              <v-card flat hover class="wow fadeInUp" data-wow-delay="">
                <v-card-media src="/static/products/pietra-schwarzler-453095-unsplash.jpg" height="250px"></v-card-media>
                <v-card-title primary-title class="product-title"><strong>Kaftan Fasi </strong><v-spacer></v-spacer><span>1500MAD</span></v-card-title>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>  
      <v-btn large dark class="subheading wow fadeIn" depressed>Voir le reste</v-btn>
    </v-container>
    <v-container fluid grid-list-xl pt-5 class="white"> 
      <h2 class="display-1 indicator mb-4">Qui somme nous?</h2>
      <v-layout row wrap justify-center>
        <v-flex xl3 lg3 md3 sm12 xs12>
          <img id="portrait" class="wow fadeInUp" src="/static/hasna.jpg" alt="">
        </v-flex>
        <v-flex class="text-xs-left" xl6 ls6 md6 sm12 xs12>
          <p id="portrait-text" class="title wow fadeInRight  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum natus saepe recusandae perferendis possimus cupiditate nam assumenda dolorem harum quidem ab voluptatum laudantium suscipit, quos dicta eligendi odio ipsam perspiciatis praesentium inventore quia dolores dignissimos aspernatur tempora. Facilis, commodi, quibusdam.</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        images : [
          '/static/naganath-chiluveru-345852-unsplash.jpg',
          '/static/pete-bellis-310093-unsplash.jpg',
          '/static/pete-bellis-189599-unsplash.jpg'
        ]
      }
    }
  }
</script>

<style lang="scss">
#logo{  
  width: 100%;
}

#right-home-picture{
  overflow: hidden;
  height: 91.2vh;
  img{
    width:180%;
  }
}

.fade{
   &-enter-active, &-leave-active, &-leave-to{
     transition: .3s ease-out;
     position: absolute;
     top: 0;
     left: 0;
   }

    &-enter, &-leave, &-leave-to{
      opacity: 0;
    }
}

.hero-carousel{
  height: 91vh;
  box-shadow: none;
}

.index-container{
  position: relative;
}

.main-jumbo{
  width: 30vw;
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 11%;

  h2{
    font-weight:bold;
  }
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

.product-title{
  font-family:karla;
  font-size : 15px;
}

.indicator{
  font-weight:bold;
}

#portrait{
  width: auto;  
  height: 250px;
  transition: .2s all;
  filter:grayscale(1);

  &:hover{
    filter:grayscale(0);
  }
}

#portrait-text{
  // text-align:justify;
}

</style>