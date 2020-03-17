<template>
<section class="p-sgd site-grid">


    <figure class="sgd-toggle-details" @click="toggleDetails()">
      <div >
        <svg-icon class="logo" name="eye" />
      </div>
    </figure>

    <!-- TOP HERO -->

    <div class="sgd-s-hero  -bg-pattern-light">
      <div>

        <logo/>

        <h2 class="title">
         Tyopgraphy
        </h2>

        <h6 class="title -sub">
          Design systems
        </h6>

        </div>
      </div>

    </div>




    <!-- DESIGN SYSTEM -->

    <div class="sgd-s-hero -off-white">
      <div>

        <div class="gc text -g-center">
          <div class="g-10  -text-center ">
            <div><p ><a href="https://www.interaction-design.org/literature/topics/keep-it-simple-stupid" target=":blank">KISS</a>, Typography is one of the main pillars in the foundation for a Design system. It's no need to overcomplicate it so try tp keep it simpel, it will be easier to maintain and keep the digtal profile intact over time. </p><p >It's very common to change/adjust and add fonts to the digital web context for a Brand graphical profile. </p>

              <i>Deep dive:</i><br>
              <a traget="_blank" href="https://www.designsystems.com/typography-guides/">Designsystems.com - Typography-guides</a><br>
            </div>
          </div>
        </div>

        <h6 class="title -sub -in-text">
          The design split
        </h6>

        <div class="gc text">
          <div class="g-3">
            <p>
              <strong class="header">Brand</strong>
              Font sused/ added and changed in the DBID, Digital Brand Identity. 
            </p>
          </div>
          <div class="g-3">
            <p>
              <strong class="header">Global</strong>
              Rules like font sizes / weights and other varitions. 
            </p>
          </div>
          <div class="g-3">
            <p>
              <strong class="header">Parts</strong>
              Uniqe typography for a specific part of the page. 
            </p>
          </div>
          <div class="g-3 -n/a">
            <p>
              <strong class="header">Pages</strong>
              Pages will inherit from the prevoius.
            </p>
          </div>
        </div>




        <h6 class="title -sub -in-text">
          CHECKLIST
        </h6>

        <div class="gc text -g-center">


          <div class="g-8">
            <div>
             <!--  <strong class="header">Base</strong> -->
              <ul>
                <li class="-done"><strong>Fonts</strong> <svg-icon class="icon" name="tick" /></li>
                <li class="-done"><strong>Content</strong> <svg-icon class="icon" name="tick" />
                  <div> Body copy - Reading text<br> Headers / Subheads - H1/H6<br> Preamble</div></li>
              </ul>
            </div>
          </div>


        </div>

      </div>
    </div>




    <!-- STYLGUIDE -->

    <div class="styleguide-grid">

      <!-- BODY  COPY -->
      <section class="sgd-s-typography -cover " id="to-sgd-typography" >

        <div class="sgd-gc -discrete -description -g-center">
          <div class="sgd-g-12 ">
            <h2 class="sgd-header -type -brand-global -center">Body copy</h2>
          </div>
          <div class="sgd-g-8 sgd-g-t-10">
            <div class="sgd-desc">
              The base font size may vary acoording font used. Also check responsive sizes and adjust the reading text according to breakpoints as needed. 
              In this system we are using the allaround system fonts <a href="https://polaris.shopify.com/design/typography#section-font-stack" target="_blank">setup</a> for a body copy.
            </div>
          </div>

            <div class=" sgd-details -left">
              
              <div class="card">
                <div class="sgd-color-card -grey1"><div class="body"></div><div class="shadow"></div></div>
              </div>

            </div>

            <div class=" sgd-details -right">
              <div>
                <div>
                  <div class="sgd-header-tag ">Font</div> <a href="https://polaris.shopify.com/design/typography#section-font-stack" target="_blank">System fonts</a> <br>
                </div>
                <div>
                  <div class="sgd-header-tag  ">Mobile </div> <strong>16px </strong> / 1.5
                </div>
                <div>
                  <div class="sgd-header-tag  ">Tablet</div> <strong>17px </strong> / 1.5
                </div>
                <div>
                  <div class="sgd-header-tag  ">Desktop</div> <strong>18px </strong> / 1.5
                </div>                
              </div>
            </div>

        </div>

        <div class="sgd-gc -g-center">
          <div class="sgd-g-7 sgd-g-t-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (p-tag)</p>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.(p-tag)</p>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (No p-tag)

            <!-- <p><i>Italic</i> perspiciatis <strong>strong</strong> unde omnis <u>underlined</u> iste natus error <a href="">link</a> sit voluptatem  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p> -->
          </div>

        </div>
      
      </section>

      <!-- PREAMBLE -->
      <section class="sgd-s-typography -cover -off-white" id="to-sgd-typography" >

        <div class="sgd-gc -discrete -description -g-center">
          <div class="sgd-g-12 ">
            <h2 class="sgd-header -type -brand-global -center">Preamble</h2>
          </div>
          <div class="sgd-g-8 sgd-g-t-10">
            <div class="sgd-desc">
              A preamble is an introductory and expressionary statement thats usally is a bit emphesized.
            </div>
          </div>
            <div class=" sgd-details -left">
              
              <div class="card">
                <div class="sgd-color-card -black"><div class="body"></div><div class="shadow"></div></div>
              </div>

            </div>

            <div class=" sgd-details -right">
              <div>
                <div>
                  <div class="sgd-header-tag ">Font</div> <a href="https://polaris.shopify.com/design/typography#section-font-stack" target="_blank">System fonts</a> <br>
                </div>
                <div>
                  <div class="sgd-header-tag  ">Mobile </div> <strong>16px </strong> / 1.5
                </div>
                <div>
                  <div class="sgd-header-tag  ">Tablet</div> <strong>17px </strong> / 1.5
                </div>
                <div>
                  <div class="sgd-header-tag  ">Desktop</div> <strong>18px </strong> / 1.5
                </div>                
              </div>
            </div>
        </div>

        <div class="sgd-gc -g-center">
          <div class="sgd-g-8">
            <p class="preamble">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          <div class="sgd-g-7 -discrete-secondary">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. (p-tag)</p>
          </div>

        </div>
      
      </section>

      <!-- HEADERS -->
      <section class="sgd-s-typography -off-white" id="to-sgd-typography">
        
        <div class="sgd-gc -discrete -description">
          <div class="sgd-g-12 ">
            <h2 class="sgd-header -type -brand-global -center">Headers</h2>
          </div>
          <div class="row">
          <div class="sgd-g-6 g-push-2 ">
            <div class="sgd-desc">
              A preamble is an introductory and expressionary statement thats usally is a bit emphesized.
            </div>
          </div>

          <div class="sgd-g-3 sgd-details">
            <div>
              <div class="sgd-header-tag ">Font:</div> Oswald / 1.5 / Bold <br>
            </div>
            
          </div>
          </div>

          <div class="sgd-g-2 sgd-details">
            <div>
              Header 1
            </div>
            <div>
              <div class="sgd-header-tag  ">Mob</div> <strong>18px</strong>
            </div>
            <div>
              <div class="sgd-header-tag  ">Tab</div> <strong>19px </strong>
            </div>
            <div>
              <div class="sgd-header-tag  ">Desk</div> <strong>21px </strong>
            </div>
          </div>

        </div>


        <div class="sgd-gc -g-center">

          <div class="sgd-g-8 ">
            <h1>Header 1 lorum ipsum</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <h2>Header 2 lorum ipsum</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <h3>Header 3 lorum ipsum</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <h4>Header 4 lorum ipsum</h4>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <h5>Header 5 lorum ipsum</h5>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            <h6>Header 6 lorum ipsum</h6>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
          </div>

  

        </div>

      </section>



        <!-- FONTS -->

        <section class="sgd-s-typography" id="to-sgd-typography" >
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
      title: 'AT | Styleguide | Typography'
    }
  },
   methods: {
    toggleDetails(){
      document.getElementsByTagName("BODY")[0].classList.toggle('-sgd-toggle-details')
    }
  }

}
</script>

<style lang="scss">

    @import "~/assets/scss/styleguide/styleguide-imports.scss";


    .eight-point-grid {
      position: fixed;
      z-index: 999;
      width: 100%;
      height: 100vh;
      display: block;

      .grid-col {
        position: absolute;
        width: 50%;
        height: 100vh;
        opacity: .4;
      }

      .center {
        width: 2px;
        background-color: red;
        left: 50%;
        margin-left: -2px;
      }

      .top {
        width: 100%;
        left: 0;
        top: 0;
        background: repeating-linear-gradient(
          to bottom,
          rgba(255,255,255,.14),
          rgba(255,255,255,.14) 8px,
          rgba(0,0,0,.12) 8px,
          rgba(0,0,0,.12) 16px,
          rgba(0,0,0,.03) 16px,
          rgba(0,0,0,.03) 24px,
          rgba(255,255,255,.14) 24px,
          rgba(255,255,255,.14) 31px,
          red 32px,
          rgba(255,255,255,.14) 32px,
          rgba(255,255,255,.14) 40px,
          rgba(0,0,0,.12) 40px,
          rgba(0,0,0,.12) 48px,
          rgba(0,0,0,.03) 48px,
          rgba(0,0,0,.03) 56px,
          rgba(255,255,255,.14) 56px,
          rgba(255,255,255,.14) 63px,
          red 63px,
          red 64px
        );

      }

      .right {
        background: repeating-linear-gradient(
          to right,
          rgba(255,255,255,.14),
          rgba(255,255,255,.14) 8px,
          rgba(0,0,0,.12) 8px,
          rgba(0,0,0,.12) 16px,
          rgba(0,0,0,.03) 16px,
          rgba(0,0,0,.03) 24px,
          rgba(255,255,255,.14) 24px,
          rgba(255,255,255,.14) 31px,
          red 32px,
          rgba(255,255,255,.14) 32px,
          rgba(255,255,255,.14) 40px,
          rgba(0,0,0,.12) 40px,
          rgba(0,0,0,.12) 48px,
          rgba(0,0,0,.03) 48px,
          rgba(0,0,0,.03) 56px,
          rgba(255,255,255,.14) 56px,
          rgba(255,255,255,.14) 63px,
          red 63px,
          red 64px
        );
        left: 50%;
      }
      .left {

         background: repeating-linear-gradient(
          to left,
          rgba(255,255,255,.14),
          rgba(255,255,255,.14) 8px,
          rgba(0,0,0,.12) 8px,
          rgba(0,0,0,.12) 16px,
          rgba(0,0,0,.03) 16px,
          rgba(0,0,0,.03) 24px,
          rgba(255,255,255,.14) 24px,
          rgba(255,255,255,.14) 31px,
          red 32px,
          rgba(255,255,255,.14) 32px,
          rgba(255,255,255,.14) 40px,
          rgba(0,0,0,.12) 40px,
          rgba(0,0,0,.12) 48px,
          rgba(0,0,0,.03) 48px,
          rgba(0,0,0,.03) 56px,
          rgba(255,255,255,.14) 56px,
          rgba(255,255,255,.14) 63px,
          red 63px,
          red 64px
        );

        right: 50%;
      }

    }


    .p-sgd {
      .sgd-toggle-details {
        border-radius: 400px;
        width: 64px;
        height: 64px;
        background-color: none;
        border: 4px solid $pink;
        position: fixed;
        top: 16px;
        left: 16px;
        z-index: 222;
        margin: 0;
        box-sizing: border-box;

        div {
          width: 64px;
          height: 64px;
        }

        svg {
          fill: $pink;
          height: 40px;
          width: 40px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .-sgd-view-details & {
          background-color: $pink;
          svg {
            fill: $white;
          }
        }

      }
    }





</style>
