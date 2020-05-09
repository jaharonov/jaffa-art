<template>
  <div class="app">
    <div class="m-5">
      <b-row class="pb-5">
        <h3 class="headings text-center">Websites</h3>
      </b-row>
      <b-row class="p-5">
        <p class="text-justify">I am available for website development and design. I can custom build an entire site for you, including e-commerce integration, etc., and am also happy to customize sites on Squarespace or other CMS platforms. Rates vary from $40-$85 per hour, with the low end being for friends and QTPOC clients. Please <a href="mailto:jaharonov@gmail.com">email</a> me for more info and to discuss your needs for your next project!</p>
        <p class="text-justify">The examples below were built for clients using a variety of platforms. I also made this website that you are currently viewing, using Vuejs, javascript, CSS, SASS, Bootstrap, Bootstrap Vue, and HTML. 
            <b-img src="/static/smiley.gif" height="25%"/></p>
      </b-row>
      <b-row id="about">
        <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img-lazy center src="/static/mctf-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://www.motorcitytapfest.com" target="_blank">Motor City Tap Fest</a></p></figcaption>
  </figure>
        </b-col>
    <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/nyc-chor-forum-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://www.nycchoreographersforum.com" target="_blank">NYC Choreographer's Forum</a></p></figcaption>
  </figure>
        </b-col>
            <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/taja-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://www.tajawillartist.com" target="_blank">Taja Will</a></p></figcaption>
  </figure>
        </b-col>
    <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/overtaps-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://www.overtaps.com" target="_blank">OverTaps</a></p></figcaption>
  </figure>
        </b-col>
    <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/bottomsafe-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://bottomsafe.com" target="_blank">BottomSafe</a></p></figcaption>
  </figure>
        </b-col>
          <b-col cols="lg-6 p-3">
          <figure height="75%">
  <b-img center src="/static/tdd-screenshot.png" fluid-grow/>
  <figcaption class="text-center"><p><a href="https://www.tapdancedetroit.org" target="_blank">Tap Dance Detroit</a></p></figcaption>
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