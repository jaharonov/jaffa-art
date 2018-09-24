<template>
  <div class="hello">
    <div class="m-5" id ="bw-images">
    <div class="row p-5"></div>
      <img v-for="image in images" :src="image.src" center fluid-grow  blank-color="#bbb" alt="img" class="my-3" width="90%" height="auto"/>

  <!-- <img src="../assets/riotbear-10.jpg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3 pt-5" width="90%" height="auto" />
  <img src="../assets/riotbear-9.jpg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3" width="90%" height="auto" />
  <img src="../assets/riotbear-8.jpg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3" width="90%" height="auto" />
  <img src="../assets/riotbear-7.jpg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3" width="90%" height="auto" />
  <img src="../assets/riotbear-4.jpg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3" width="90%" height="auto" />
  <img src="../assets/riotbear-3.jpg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3" width="90%" height="auto" />
  <img src="../assets/riotbear-2.jpg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3" width="90%" height="auto" /> -->
</div>
    
  </div> 
</template>

<script>
export default {

  data () {
    return {
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