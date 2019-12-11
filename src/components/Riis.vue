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
<b-img-lazy v-img:name :src="image.src" center fluid-grow blank-color="#FFB5DA" alt="img" class="my-3 pics" />
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
      text: 'This series is an ongoing documentation of the queer beach at Jacob Riis Beach in Queens, NY.',
      message: 'JACOB RIIS BEACH',
      images: [
        { src: './static/riis-1.jpg' },
        { src: './static/riis-2.jpg' },
        { src: './static/riis-3.jpg' },
        { src: './static/riis-4.jpg' },
        { src: './static/riis-5.jpg' },
        { src: './static/riis-7.jpg' },
        { src: './static/riis-6.jpg' },
        { src: './static/riis-15.jpg' },
        { src: './static/riis-16.jpg' },
        { src: './static/riis-8.jpg' },
        { src: './static/riis-9.jpg' },
        { src: './static/riis-10.jpg' },
        { src: './static/riis-11.jpg' },
        { src: './static/riis-12.jpg' },
        { src: './static/riis-13.jpg' },
        { src: './static/riis-14.jpg' }
      ]
    }
  }
}
</script>
