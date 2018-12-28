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
      message: 'Last Vacation Before the End of the World: Atomic Tourism',
      text: `<p>This photo series is a collaborative part of a larger body of work by <a :href="url">Kelley Meister</a>. These images are an exploration and critique of atomic tourism, and were all shot in Utah, New Mexico, Arizona, and Nevada.</p>`,
      url: 'http://www.kelleymeister.com/',
      images: [
        { src: './static/lv-1.jpg' },
        { src: './static/lv-2.jpg' },
        { src: './static/lv-3.jpg' },
        { src: './static/lv-4.jpg' },
        { src: './static/lv-5.jpg' },
        { src: './static/lv-6.jpg' },
        { src: './static/lv-7.jpg' },
        { src: './static/lv-8.jpg' },
        { src: './static/lv-9.jpg' },
        { src: './static/lv-10.jpg' },
        { src: './static/lv-11.jpg' },
        { src: './static/lv-12.jpg' },
        { src: './static/lv-13.jpg' },
        { src: './static/lv-14.jpg' },
        { src: './static/lv-15.jpg' },
        { src: './static/lv-16.jpg' },
        { src: './static/lv-17.jpg' },
        { src: './static/lv-18.jpg' },
        { src: './static/lv-19.jpg' },
        { src: './static/lv-20.jpg' },
        { src: './static/lv-21.jpg' },
        { src: './static/lv-22.jpg' },
        { src: './static/lv-23.jpg' },
        { src: './static/lv-24.jpg' },
        { src: './static/lv-25.jpg' },
        { src: './static/lv-26.jpg' },
        { src: './static/lv-27.jpg' },
        { src: './static/lv-28.jpg' },
        { src: './static/lv-29.jpg' },
        { src: './static/lv-30.jpg' },
        { src: './static/lv-31.jpg' },
        { src: './static/lv-32.jpg' },
        { src: './static/lv-33.jpg' },
        { src: './static/lv-34.jpg' },
        { src: './static/lv-35.jpg' },
        { src: './static/lv-36.jpg' }

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