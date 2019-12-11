<template>
      <div class="m-5">
    <!-- <div class="row p-5"></div> -->
    <b-container>
        <b-row class="p-3">
        <h3 class="headings text-left">{{ message | capitalize }}</h3>
        </b-row>
        <b-row class="p-3"></b-row>
        <b-row>
            <b-col>
                <p class="text-left" v-html="text">{{ text }}</p>
            <!-- {{ text }} -->
            
            </b-col>
        </b-row>
    </b-container>
    <!-- <div v-for="image in images"> -->
    <b-container>
        <b-row>
        
<b-col lg="4" v-for="image in images" :key="image.id">
<b-img-lazy v-img:name :src="image.src" center fluid-grow blank-color="#FFB5DA" alt="img" class="my-3 pics" />
</b-col>
        
        </b-row>
    </b-container>
  </div>
  
</template>

<script>

export default {
  data () {
    return {
      text: `<p>This series was taken with a 35mm film camera in northern Minnesota and the Twin Cities. These images have a stillness that, while shot in 2016, could be from a future that we haunt, but no longer are part of. This selection of work was exhibited in 2018 at the 801 Gallery in Minneapolis, MN.</p>`,
      message: 'IN WINTER',
      images: [
        { src: './static/801-3.jpg' },
        { src: './static/801-4.jpg' },
        { src: './static/801-5.jpg' },
        { src: './static/801-7.jpg' },
        { src: './static/801-8.jpg' },
        { src: './static/801-10.jpg' },
        { src: './static/801-14.jpg' },
        { src: './static/801-16.jpg' },
        { src: './static/801-17.jpg' }

      ]
    }
  },

  methods: {
    triggerClick () {
      alert('clicked for more!')
    }
  }
}
</script>

<style>
img {
    object-fit: contain;
}

h1 {
    
    text-transform: uppercase;
}

p {
  text-align: justify;
}

</style>

<style scoped>
a {
  color: #FF69B4;
}
</style>