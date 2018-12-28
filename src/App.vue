<template>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/css?family=Audiowide" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Montserrat+Alternates" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Faster+One" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Sarabun" rel="stylesheet">


  </head>
  <div id="app" variant="transparent">
    <div class="fixed-top">
    <header>
    <b-navbar toggleable="md" type="primary" variant="success" class="nav-text">
  
  <b-navbar-toggle target="nav_collapse" class="nav-items" id="menu">MENU</b-navbar-toggle>

  <b-navbar-brand href="/" class="mb-5" id="h1-name">JAFFA AHARONOV</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
    </b-navbar-nav> -->

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
 
       <b-nav-item-dropdown class="nav-items" text="PROJECTS" right>
        <b-dropdown-item v-bind:to="'self'">SELF-PORTRAITS</b-dropdown-item>
        <b-dropdown-item v-bind:to="'winter'">WINTER</b-dropdown-item>
        <b-dropdown-item v-bind:to="'riis'">JACOB RIIS BEACH</b-dropdown-item>
        <!-- <b-dropdown-item href="#">BIGGIE LOVES YOU</b-dropdown-item> -->
        <b-dropdown-item v-bind:to="'lastvacation'">ATOMIC TOURIST</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item-dropdown class="nav-items" text="SERVICES" right>
        <b-dropdown-item v-bind:to="'photo'">PHOTOGRAPHY</b-dropdown-item>
        <b-dropdown-item v-bind:to="'websites'">WEBSITES</b-dropdown-item>
        <b-dropdown-item v-bind:to="'other'">OTHER</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item class="nav-items" v-bind:to="'about'">ABOUT</b-nav-item>
      <b-nav-item class="nav-items" v-bind:to="'collab'">COLLABS/ETC.</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</header>
<div class="row svg-thing">
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
   <b-col class="col-3"></b-col>
 </div>  
 <div class="row p-5"></div>
   
   
<!-- navbar-1.vue -->
    <router-view></router-view>
    <b-col md="4" class="absolute-bottom ml-auto svg-thing">
      
<svg xmlns="http://www.w3.org/2000/svg">
                <polygon fill="#FF69B4" points="198 98,4 27,303 0,0 0" height="2%"/>
            </svg>
   </b-col>
      <!-- <div class="row fixed-bottom"> -->   
    <footer type="primary" variant="success" class="p-3 footer fixed-bottom">
      <br/>
      <b-col md="4" class="instagram">
        <a href="https://www.instagram.com/jafqueen/" type="primary" target="_blank"><b-img src="/static/instagram-4-48.png"/></a>
   </b-col>
       <span class="m-5"> ©JAFFA AHARONOV 2018</span>
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
  position: relative; 
  left: 0;
  // bottom: 0;
  width: 100%;
  // background-color: #AEFF14;
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

.headings {
font-family: 'Montserrat Alternates', sans-serif;
text-transform: uppercase;
}

p {
font-family: 'Sarabun', sans-serif;
}

.svg-thing {
  position: absolute;
  opacity: 0.5;
  z-index: -1;
}

.instagram {
  position: absolute;
  opacity: 0.8;
  z-index: -1;
}

.pics:hover {
  opacity: 0.7;
}

@import './styles/custom-bootstrap.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';

</style>
