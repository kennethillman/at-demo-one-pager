<template>
  <section class="at-demo-one-pager">
    

    <!-- ANCHOR  -->
    <div id="to-top"></div>


    <!-- HEADER / MENU / LOGO -->
    <site-header :links="menu"/>

 
    <!-- HERO -->
    <div class="sgd-s-hero -bg-pattern-light -cover">
      <div>
        <logo/>
        <h2 class="title">{{document.data.title[0].text}}</h2>
        <h6 class="title -sub">{{document.data.preamble[0].text}}</h6>
      </div>
    </div>


    <!-- SLICES - PRISMIC DYNAMIC LAYOUT -->
    <slices :slices-raw="allSlices" />


    <!-- TWITTER FEED -->
    <site-twitter :mode="'dark'"/>
    

    <!-- FOOTER -->
    <site-footer />
  

  </section>
</template>

<script>

import Logo from '~/components/Logo.vue'
import Slices   from '~/components/Slices.vue'
import SiteHeader   from '~/components/SiteHeader.vue'
import SiteFooter   from '~/components/SiteFooter.vue'
import SiteTwitter   from '~/components/SiteTwitter.vue'

export default {
  components: {
    Logo,
    Slices,
    SiteHeader,
    SiteTwitter,
    SiteFooter
  },
  async asyncData({ $prismic, error }) {
   
    const prismicStartpage = await $prismic.api.getSingle("startpage")
    const prismicMenu = await $prismic.api.getSingle("menu")

    if (prismicStartpage && prismicMenu ) {
      return { 
        document: prismicStartpage,
        menu: prismicMenu.data,
        allSlices: prismicStartpage.data.body
      }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
   
  }

}
</script>

<style lang="scss">

  @import "~/assets/scss/styleguide/styleguide-imports.scss";

  .at-demo-one-pager {

  }

</style>
