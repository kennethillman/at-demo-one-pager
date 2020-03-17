<template></template>

<script>

  export default {
    name: 'util-touch',
    methods: {
      utilTouch() {
        return ( 'ontouchstart' in window ) ||  
           ( navigator.maxTouchPoints > 0 ) ||  
           ( navigator.msMaxTouchPoints > 0  || false);
      }
    },
    mounted() {
      // Mounted is run clientside like if(process.client){}
      if (this.utilTouch()) {
        console.log('true ->', document.documentElement.classList)
        document.documentElement.className = document.documentElement.className.replace(/(?:^|\s)no-touch(?!\S)/g , 'touch');
      }
    }
  }

</script>

<!-- 

  (i) -> Touch detection is a hot topic:
         https://github.com/Modernizr/Modernizr/pull/2432

  (i) -> Solution:
         https://www.geeksforgeeks.org/how-to-detect-touch-screen-device-using-javascript/


  (file) -> nuxt.config.js

  head: {
    htmlAttrs: {
      class: 'no-touch'
    }
  }

-->


