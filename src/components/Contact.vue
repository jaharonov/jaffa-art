<template>
  <div class="hello">
    <div class="m-5">
      <div class="row p-5"></div>
  <img src="../assets/self-1-svg.svg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3 pt-5" width="90%" height="auto" />
  <h1>CONTACT</h1>
  <form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  <!-- <img src="../assets/riotbear-9.jpg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3" width="90%" height="auto" />
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
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [
        { text: 'Select One', value: null },
        'Carrots', 'Beans', 'Tomatoes', 'Corn'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}




</style>