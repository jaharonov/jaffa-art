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
                <p class="text-left">{{ text }}</p>
            <!-- {{ text }} -->
            
            </b-col>
        </b-row>
    </b-container>
    <!-- <div v-for="image in images"> -->
    <b-container>
        <b-row>
        
<b-col lg="4" v-for="image in images" :key="image.id">
<b-img v-img:name :src="image.src" center fluid-grow blank-color="#FFB5DA" alt="img" class="my-3 pics" />
</b-col>
        
        </b-row>
    </b-container>
  </div>
  
</template>

<script>

export default {
  data () {
    return {
    //   text: '<p>This photo series is a collaborative part of a larger body of work by <a :href="url">Kelley Meister</a>. These images are an exploration and critique of atomic tourism, and were all shot in Utah, New Mexico, Arizona, and Nevada.</p>',
      message: 'IN WINTER',
      url: 'http://www.kelleymeister.com/',
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