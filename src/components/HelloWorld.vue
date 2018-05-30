<template>
<v-container text-xs-center fluid class="pa-0">
    
    <v-layout row wrap justify-end >
      <v-flex xs9 id="right-home-picture">
          <v-carousel hide-delimiters="true" class="hero-carousel">
            <v-carousel-item
              :src="'/static/naganath-chiluveru-345852-unsplash.jpg'"
              transition="fade"
              reverse-transition="fade"
            ></v-carousel-item>
            <v-carousel-item
              src='/static/edwin-andrade-158037-unsplash.jpg'
              transition="fade"
              reverse-transition="fade"
            ></v-carousel-item>
            <v-carousel-item
              src='/static/pete-bellis-189599-unsplash.jpg'
              transition="fade"
              reverse-transition="fade"
            ></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss">
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
</style>
