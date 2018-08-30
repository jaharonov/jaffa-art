<template>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Faster+One" rel="stylesheet">

  </head>
  <div id="app" variant="transparent">
    <div class="fixed-top">
    <header>
    <b-navbar toggleable="md" type="primary" variant="success" class="nav-text">
  
  <b-navbar-toggle target="nav_collapse" class="nav-items" id="menu">MENU</b-navbar-toggle>

  <b-navbar-brand href="#" class="mb-5" id="h1-name">JAFFA AHARONOV</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
    </b-navbar-nav> -->

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
 
      <b-nav-item class="nav-items" href="#">PROJECTS</b-nav-item>
      <b-nav-item class="nav-items" href="#">ABOUT</b-nav-item>
    
      <!-- <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <template slot="button-content">
          <em>User</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Signout</b-dropdown-item>
      </b-nav-item-dropdown> -->
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</header>
<div class="row" id="svg-thing">
<div class="col-3">
<svg xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#FF69B4" points="198 98,4 27,303 0,0 0" />
            </svg>
   </div>
   <div class="col-3">
<svg xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#AEFF14" points="198 98,4 27,303 0,0 0" />
            </svg>
   </div>
   </div>
 </div>  
   
   
<!-- navbar-1.vue -->
    <router-view></router-view>
    <b-col md="4" class="fixed-bottom ml-auto">
<svg xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#FF69B4" points="198 98,4 27,303 0,0 0" height="2%"/>
            </svg>
   </b-col>
      <!-- <div class="row fixed-bottom"> -->
      
   
    <footer>
      <br/>
       <span class="p-5"> ©JAFFA AHARONOV 2018</span>
    </footer>
    <!-- </div> -->
    
    
  

  
</div>
  </html>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#navname {
  font-size: 1.5rem;
}

#menu {
  color: rgb(218, 248, 162);
}
footer {
  position: fixed; 
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #AEFF14;
  text-align: left;
  font-family: 'Montserrat Alternates', sans-serif;

}
#h1-name {
  font-size: 180%;
  // font-family: 'Audiowide', cursive;
  font-family: 'Faster One', cursive;


}

.nav-items {
font-family: 'Montserrat Alternates', sans-serif;

}
@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

</style>
