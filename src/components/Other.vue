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
      message: 'Other Werk',
      text: `<p>I am available for video documentation, a/v installation and consultation, and video transcription. If you think you have other work I might be interested in, feel free to inquire.</p>`,
      // url: 'http://www.kelleymeister.com/',
      images: [
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