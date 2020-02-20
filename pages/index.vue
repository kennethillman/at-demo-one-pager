<template>
  <section class="at-demo-one-pager">
    
    <!-- Anchor  -->
    <div id="to-top"></div>

    <!-- Header -->
    <site-header :links="menu"/>
 
    <!-- Hero -->
    <div class="sgd-s-hero -bg-pattern-light -cover">
      <div>
        <logo/>
        <h2 class="title">{{document.title[0].text}}</h2>
        <h6 class="title -sub">{{document.preamble[0].text}}</h6>
      </div>
    </div>

    <!-- Slices -->
    <slices :slices-raw="allSlices" />

    <!-- Footer -->
    <site-footer />
    
    <!-- Prismic edit button -->
    <prismic-edit-button :documentId="documentId"/>

  </section>
</template>

<script>

import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"

import Logo from '~/components/Logo.vue'
import Slices   from '~/components/Slices.vue'
import SiteHeader   from '~/components/SiteHeader.vue'
import SiteFooter   from '~/components/SiteFooter.vue'

export default {
  components: {
    Logo,
    Slices,
    SiteHeader,
    SiteFooter
  },
  async asyncData({context, error, req}) {
    try{
      const api = await Prismic.getApi(PrismicConfig.apiEndpoint, {req})

      let document = {}
      let _slices = []
      const result = await api.getSingle('startpage')

      document = result.data
      _slices = document.body
      // console.log('_slices -> ' , _slices);

      let menu = {}
      const topMenu = await api.getSingle('menu')
      menu = topMenu.data

      // Load the edit button
      if (process.client) window.prismic.setupEditButton()

      return {
        document,
        documentId: result.id,
        menu,
        allSlices: _slices
      }
    } catch (e) {
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
