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
      message: 'Photo Work',
      text: `<p>I am available for photo gigs, including performance documentation, portraits, celebrations, etc. Rates vary. Please <a href="mailto:info@jaffaaharonov.com" style="color:#FF69B4">email</a> me to discuss your needs!</p>`,
      // url: 'http://www.kelleymeister.com/',
      images: [
        { src: './static/work-1.jpg' },
        { src: './static/work-2.jpg' },
        { src: './static/work-3.jpg' },
        { src: './static/work-4.jpg' },
        { src: './static/work-5.jpg' },
        { src: './static/work-6.jpg' },
        { src: './static/work-7.jpg' },
        { src: './static/work-8.jpg' },
        { src: './static/work-9.jpg' },
        { src: './static/work-10.jpg' },
        { src: './static/work-11.jpg' },
        { src: './static/work-12.jpg' },
        { src: './static/work-13.jpg' },
        { src: './static/work-14.jpg' },
        { src: './static/work-15.jpg' },
        { src: './static/work-16.jpg' },
        { src: './static/work-17.jpg' },
        { src: './static/work-18.jpg' },
        { src: './static/work-19.jpg' },
        { src: './static/work-20.jpg' },
        { src: './static/work-21.jpg' },
        { src: './static/work-22.jpg' },
        { src: './static/work-23.jpg' },
        { src: './static/work-24.jpg' },
        { src: './static/work-25.jpg' },
        { src: './static/work-26.jpg' },
        { src: './static/work-27.jpg' },
        { src: './static/work-28.jpg' },
        { src: './static/work-29.jpg' },
        { src: './static/work-30.jpg' },
        { src: './static/work-31.jpg' },
        { src: './static/work-32.jpg' },
        { src: './static/work-33.jpg' },
        { src: './static/work-34.jpg' },
        { src: './static/work-35.jpg' },
        { src: './static/work-36.jpg' },
        { src: './static/work-38.jpg' },
        { src: './static/work-39.jpg' },
        // { src: './static/work-40.jpg' },
        { src: './static/work-41.jpg' },
        { src: './static/work-42.jpg' },
        { src: './static/work-43.jpg' },
        { src: './static/work-44.jpg' },
        { src: './static/work-45.jpg' },
        { src: './static/work-46.jpg' },
        { src: './static/work-47.jpg' },
        { src: './static/work-48.jpg' },
        { src: './static/work-49.jpg' },
        { src: './static/work-50.jpg' },
        { src: './static/work-51.jpg' },
        { src: './static/work-52.jpg' },
        { src: './static/work-53.jpg' },
        { src: './static/work-54.jpg' }

      ]
    }
  }
}
</script>

<style scoped>
a {
  color: #FF69B4;
}
</style>