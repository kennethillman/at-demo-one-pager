<template>
  <section class="container">

    <prismic-edit-button :documentId="documentId"/>
    <div id="to-top"></div>

    <home/>


    <div class="menu" >
      <top-menu :links="menu"/>
    </div>

    <div class="sgd-s-hero">
      <div>
        <logo/>
        <h2 class="title">{{document.title[0].text}}</h2>
        <h6 class="title -sub">{{document.preamble[0].text}}</h6>

        <!-- <h6>{{allSlices}}</h6> -->

      </div>
    </div>

    <slices :slices-raw="allSlices" />

    <div class="sgd-s-hero -footer">
      <div>
        <logo/>
        <h2 class="title">Demo page</h2>
        <h6 class="title -sub">by Active Talents</h6>
      </div>
    </div>

  </section>
</template>

<script>

import Prismic from "prismic-javascript"
import PrismicConfig from "~/prismic.config.js"

import Logo from '~/components/Logo.vue'
import Home from '~/components/Home.vue'
import topMenu   from '~/components/Menu.vue'
import Slices   from '~/components/Slices.vue'

export default {
  components: {
    Logo,
    Home,
    topMenu,
    Slices
  },
  //  data () {
  //   return {
  //     slicess: []
  //   };
  // },

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

  .sgd-s-grid {
    min-height: 65vh
  }


  // - - - EDIT BUTTON - PRISMIC

  .wio-link {
    position: fixed;
    z-index: 10;
    right: 40px;
    bottom: 40px;
  }

  // - - - MENU

  .menu {
    position: fixed;
    top: 0;
    right: 0;
    padding: 24px;
    z-index: 20;
  }



</style>
