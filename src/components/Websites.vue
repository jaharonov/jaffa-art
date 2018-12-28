<template>
  <div class="app">
    <div class="m-5">
      <b-row class="pb-5">
        <h3 class="headings text-center">Websites</h3>
      </b-row>
      <b-row class="p-5">
        <p class="text-left">I am available for website development and design. I can custom build an entire site for you, including e-commerce integration, etc., and am also happy to customize sites on Squarespace or other CMS platforms. Rates vary from $30-$60 per hour, with the low end being for friends and QTPOC clients. Please <a href="mailto:info@jaffaaharonov.com">email</a> me for more info and to discuss your needs for your next project!</p>
        <p class="text-left">The examples below were built for clients using a variety of platforms. I also made this website that you are currently viewing, using Vuejs, javascript, CSS, SASS, Bootstrap, Bootstrap Vue, and HTML. 
            <b-img src="/static/smiley.gif" height="25%"/></p>
      </b-row>
      <b-row id="about">
        <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/mctf-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://www.motorcitytapfest.com">Motor City Tap Fest</a></p></figcaption>
  </figure>
        </b-col>
    <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/nyc-chor-forum-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p>New website to be launched soon!</p></figcaption>
  </figure>
        </b-col>
            <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/taja-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://www.tajawillartist.com">Taja Will</a></p></figcaption>
  </figure>
        </b-col>
    <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/overtaps-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://www.overtaps.com">OverTaps</a></p></figcaption>
  </figure>
        </b-col>
    <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/north-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://www.northbycurrent.com">North By Current</a></p></figcaption>
  </figure>
        </b-col>
        </b-row>
  </div> 
  </div>
</template>

<style scoped>
a {
  color: #FF69B4;
}

#about {
  position: relative;
  z-index: 1;
}

.svg-thing {
  position: absolute;
  opacity: 0.5;
  z-index: -1;
}
</style>