<template>
      <div class="m-5">
    <!-- <div class="row p-5"></div> -->
    <b-container>
        <div class="row p-3">
        <h3 class="headings text-left">{{ message | capitalize }}</h3>
        </div>
        <div class="row p-3"></div>
        <b-row>
            <b-col lg="2"></b-col>
            <b-col lg="8">
                <p>{{ text }}</p>
            <!-- {{ text }} -->
            
            </b-col>
        <b-col lg="2"></b-col>
        </b-row>
    </b-container>
    <!-- <div v-for="image in images"> -->
    <b-container>
        <b-row>
        
<b-col lg="4" v-for="image in images">
<b-img v-img:name :src="image.src" center fluid-grow blank-color="#FFB5DA" alt="img" class="my-3 pics" />
</b-col>
        
        </b-row>
    </b-container>
  <!-- </div> -->
  </div>
  
</template>

<script>
export default {

  data () {
    return {
      text: 'self portraits...',
      message: 'Self-Portraits',
      images: [
        { src: './static/pink-self-1.jpg' },
        { src: './static/pink-self-2.jpg' },
        { src: './static/pink-self-3.jpg' },
        { src: './static/pink-self-4.jpg' },
        { src: './static/pink-self-5.jpg' },
        { src: './static/pink-self-6.jpg' },
        { src: './static/pink-self-7.jpg' },
        { src: './static/pink-self-8.jpg' },

        { src: './static/riotbear-2.jpg' },
        { src: './static/riotbear-3.jpg' },
        { src: './static/riotbear-4.jpg' },
        { src: './static/riotbear-7.jpg' },
        { src: './static/riotbear-8.jpg' },
        { src: './static/riotbear-9.jpg' },
        { src: './static/pink-self-9.jpg' },
        { src: './static/pink-self-10.jpg' },
        { src: './static/pink-self-11.jpg' },
        { src: './static/pink-self-12.jpg' },
        { src: './static/pink-self-13.jpg' },
        { src: './static/pink-self-14.jpg' },
        { src: './static/pink-self-14.jpg' },
        { src: './static/pink-self-15.jpg' },
        { src: './static/pink-self-16.jpg' },
        { src: './static/pink-self-17.jpg' },
        { src: './static/riotbear-10.jpg' },
        { src: './static/self-1.jpg' },
        { src: './static/self-2.jpg' },
        { src: './static/self-3.jpg' },
        { src: './static/self-4.jpg' },
        { src: './static/self-5.jpg' },
        { src: './static/self-6.jpg' },
        { src: './static/self-7.jpg' },
        { src: './static/self-8.jpg' },
        { src: './static/self-9.jpg' },
        { src: './static/self-10.jpg' },
        { src: './static/self-11.jpg' },
        { src: './static/self-12.jpg' },
        { src: './static/self-13.jpg' },
        { src: './static/self-14.jpg' },
        { src: './static/self-15.jpg' },
        { src: './static/self-16.jpg' },
        { src: './static/self-17.jpg' }
      ]
    }
  }
}
</script>
<style>

</style>