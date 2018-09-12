<template>
  <div class="hello">
    <div class="m-5">
      <div class="row p-5"></div>
  <img src="../assets/self-1-svg.svg" center fluid-grow  blank-color="#bbb" alt="img" class="my-3 pt-5" width="90%" height="auto" />
  <h1>CONTACT</h1>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Food:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
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