<template>
      <div class="m-5">
    <div class="row p-5"></div>
    <b-container p-5>
        
        <h1>{{ message | capitalize }}</h1>
        <div class="row p-3"></div>
        <b-row>
            <b-col lg="2"></b-col>
            <b-col lg="8">
                <p>This photo series is a collaborative part of a larger body of work by <a :href="url">Kelley Meister</a>. These images are an exploration and critique of atomic tourism, and were all shot in Utah, New Mexico, Arizona, and Nevada.</p>
            <!-- {{ text }} -->
            
            </b-col>
        <b-col lg="2"></b-col>
        </b-row>
    </b-container>
    <!-- <div v-for="image in images"> -->
        <b-container>
        <b-row>
        
<b-col lg="4" v-for="image in images">
<b-img v-img:name :src="image.src" center fluid-grow blank-color="#FFB5DA" alt="img" class="my-3" />
</b-col>
        
        </b-row>
    </b-container>
    <!-- <b-container>
        <b-row>
        <b-col lg="2"></b-col>
<b-col lg="8">
<b-img v-img :src="image.src" center fluid-grow blank-color="#FFB5DA" alt="img" class="my-3" />
</b-col>
        <b-col lg="2"></b-col>
        </b-row>
    </b-container> -->
  </div>
  <!-- </div> -->
  
</template>

<script>
export default {
  data () {
    return {
    //   text: '<p>This photo series is a collaborative part of a larger body of work by <a :href="url">Kelley Meister</a>. These images are an exploration and critique of atomic tourism, and were all shot in Utah, New Mexico, Arizona, and Nevada.</p>',
      message: 'Last Vacation Before the End of the World',
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