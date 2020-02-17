<template>
  <section class="container">

    <!-- <prismic-edit-button :documentId="documentId"/> -->
    <div id="to-top"></div>

    <!-- <div class="menu" >
      <top-menu :links="menu"/>
    </div> -->


    <div class="hero site-grid">
      <div>

        <logo/>

        <h2 class="title">
          Design delivery
        </h2>

        <h6 class="title -sub">
          Step 1 - Digital brand Identity
        </h6>

        <div class="gc text">

          <div class="g-5 g-push-1">
            <div><p>The <strong>DBID </strong>(Digital brand indentity) set the brand web foundation. Initialy we just need the basics, this will evolve, additions aswell as changes can occure as the design get more defined.</p>
            </div>
          </div>
          <div class="g-5">
            <div>
              <ul>
                <li><strong>Logo</strong> (Svg) <svg-icon class="icon" name="tick" />
                  <li> Original, Two color, Stroked, Favicon</li>
                </li>
                <li><strong>Colors</strong> (Hex) <svg-icon class="icon" name="tick" />
                <li> Plain, Gradients</li>
                </li>
                <li><strong>Patterns</strong> (Svg) <svg-icon class="icon" name="tick" /></li>
                <li><strong>Fonts</strong> <svg-icon class="icon" name="tick" />
                  <li> Web font files (Self hosting)</li>
                  <li> Google fonts (Link)</li>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>



    <div class="styleguide-grid">

        <!-- LOGO -->

        <section class="sgd-s-logo-display -light "  id="to-sgd-logo">
          <div class="sgd-gc">

            <div class="sgd-g-12">
              <h2 class="sgd-header -type -global">Logo</h2>
            </div>

            <div class="sgd-row">

              <div class="sgd-g-12 card">
                <svg-icon class="logo" name="activetalents-filled" />
                <svg-icon class="logo" name="activetalents-line" />
              </div>

            </div>

          </div>
        </section>


        <!-- COLORS -->

        <section class="sgd-s-colors  -card-shadow"  id="to-sgd-colors">
          <div class="sgd-gc">

            <div class="sgd-g-12">
              <h2 class="sgd-header -type -global">Color palette</h2>
            </div>

            <div class="sgd-g-12">
              <div class="sgd-header-tag">Primary</div>
            </div>

            <div class="sgd-row">
              <div class="sgd-g-3 card">
                <div class="sgd-color-card -pink"><div class="body"></div><div class="shadow"></div></div>
              </div>
              <div class="sgd-g-3 card">
                <div class="sgd-color-card -purple"><div class="body"></div><div class="shadow"></div></div>
              </div>
              <div class="sgd-g-3 card">
                <div class="sgd-color-card -orange"><div class="body"></div><div class="shadow"></div></div>
              </div>
              <div class="sgd-g-3 card">
                <div class="sgd-color-card -blue"><div class="body"></div><div class="shadow"></div></div>
              </div>

            </div>



            <div class="sgd-g-12">
              <div class="sgd-header-tag">Grey scale</div>
            </div>

            <div class="sgd-row color-card-small">

              <div class="sgd-g-2 card ">
                <div class="sgd-color-card -black"><div class="body"></div><div class="shadow"></div></div>
              </div>
              <div class="sgd-g-2 card ">
                <div class="sgd-color-card -white"><div class="body"></div><div class="shadow"></div></div>
              </div>
              <div class="sgd-g-2 card">
              <div class="sgd-color-card -grey1"><div class="body"></div><div class="shadow"></div></div>
              </div>
              <div class="sgd-g-2 card">
                <div class="sgd-color-card -grey2"><div class="body"></div><div class="shadow"></div></div>
              </div>
              <div class="sgd-g-2 card">
                <div class="sgd-color-card -grey3"><div class="body"></div><div class="shadow"></div></div>
              </div>
              <div class="sgd-g-2 card">
                <div class="sgd-color-card -grey4"><div class="body"></div><div class="shadow"></div></div>
              </div>

            </div>



            <div class="sgd-row">



            </div>



          </div>
        </section>


        <!-- FONTS -->

        <section class="sgd-s-typography -off-white" id="to-sgd-typography" >
          <div class="sgd-gc">
            <div class="sgd-g-12">
              <h2 class="sgd-header -type -global">Fonts</h2>
            </div>


            <div class="sgd-g-12 font font-system ">
              <div class="font-name">System font</div>
              <div class="font-glyphs">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Xx Yy Zz Åå Ää Öö</div>
              <div class="font-glyphs -pb">1234567890</div>

              <div class="font-glyphs -italic">Italic Aa Bb Cc 123</div>
              <div class="font-glyphs -bold -pb">Bold Aa Bb Cc 123</div>

              <div class="font-code"><strong>$font-system</strong>: "-apple-system", BlinkMacSystemFont, "Apple Color Emoji", “Segoe UI”, Roboto, “Helvetica Neue”, Helvetica, Arial, sans-serif;</div>
            </div>

            <div class="sgd-g-12 font font-oswald">
              <div class="font-name">Oswald</div>
              <div class="font-glyphs">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Xx Yy Zz Åå Ää Öö</div>
              <div class="font-glyphs -pb">1234567890</div>

              <div class="font-glyphs -italic">Italic Aa Bb Cc 123</div>
              <div class="font-glyphs -bold -pb">Bold Aa  B bCc 123</div>

               <div class="font-code"><strong>$font-oswald: </strong>: "Oswald", sans-serif;</div>
            </div>



          </div>
        </section>


    </div>


  </section>
</template>

<script>

import Logo from '~/components/Logo.vue'


export default {
  components: {
    Logo
  },
  head() {
    return {
      title: 'AT | Design delivery | Partial | Step 1'
    }
  }
}
</script>

<style lang="scss">

  @import "~/assets/scss/styleguide/styleguide-imports.scss";









</style>
