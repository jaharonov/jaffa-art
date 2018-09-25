<template>
      <div class="m-5">
    <div class="row p-5"></div>
    <b-container p-5>
        
        <h1>{{ message | capitalize }}</h1>
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
<b-img v-img :src="image.src" center fluid-grow blank-color="#FFB5DA" alt="img" class="my-3" />
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
      message: 'Black and White Self Portraits',
      images: [
        { src: './static/riotbear-2.jpg' },
        { src: './static/riotbear-3.jpg' },
        { src: './static/riotbear-4.jpg' },
        { src: './static/riotbear-7.jpg' },
        { src: './static/riotbear-8.jpg' },
        { src: './static/riotbear-9.jpg' },
        { src: './static/riotbear-10.jpg' }
      ]
    }
  }
}
</script>
<style>

</style>