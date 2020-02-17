<template>

  <section class="slice-one-text-image site-grid" :class="[theme,imagePosition]" :id="anchor">
    <div>



    <div class="teaser-image col">
      <figure>
        <img :src="imageUrl">
        <div class="triangel"></div>
      </figure>
    </div>

    <div class="teaser-text col">
      <div class="col-body">
        <div class="header-primary">
          <div class="anchor">Anchor</div> <div class="label">Slice</div>
        </div>
        <div class="header">{{ title }}</div>
        <template v-if="link">
          <a :href="link" class="btn" target="_blank">{{linkLabel}}</a> <br>
        </template>
      </div>
    </div>

    </div>

  </section>

<!--   <section class="slice-one-text-image site-grid -theme-dark -image-right">

    <div class="teaser-image col">

        <img src="https://images.unsplash.com/photo-1578540244871-974894517b7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3925&q=80">

    </div>

    <div class="teaser-text col">
      <div class="col-body">
        <div class="header-primary">
          <div class="anchor">Anchor</div> <div class="label">Slice</div>
        </div>
        <div class="header">At vero eos et accusamus et iusto odio dignissimos.</div>
        <a href="#" class="btn">Lorum ipsum</a>
      </div>
    </div>

  </section> -->


  <!-- <prismic-rich-text :field="sliceRaw.primary.title1"/> -->
  <!-- {{sliceRaw.primary.anchor_link[0].text}} -->
  <!-- {{sliceRaw.primary}} -->

</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'one-text-image',
  data() {
    return {
      raw: this.sliceRaw,
      anchor: this.sliceRaw.primary.anchor.length ? this.sliceRaw.primary.anchor[0].text : false,
      theme: '-theme-' + this.sliceRaw.primary.theme.toLowerCase() || false,
      imagePosition: '-image-' + this.sliceRaw.primary.image_position.toLowerCase() || false,
      title: this.sliceRaw.primary.title1[0].text || false,
      imageUrl: this.sliceRaw.primary.image.url || false,
      link: this.sliceRaw.primary.link.url || false,
      linkLabel: this.sliceRaw.primary.link_label[0].text || false
    }
  },
  methods: {

  },
  created() {

  }
}
</script>


<style lang="scss">


  .slice-one-text-image {

    display: block;
    padding:0;


    // - - - LAYOUT / FLEX

    .col {
      flex: 1;
      box-sizing: border-box;
    }

    .col-body {
      padding: 32px;
    }


    // - - - TYPOGRAPY

    .header-primary {
      text-align: left;
      margin-bottom: 16px;
    }

    .header {
      text-transform: uppercase;
      font-weight: 300;
      font-size: 24px;
      letter-spacing: .06em;
      margin-bottom: 24px;
      line-height: 1.14;
    }

    // - - - TRIANGLE

    .triangel {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 0;
      height: 0;
      border-left: 1em solid transparent;
      border-right: 1em solid transparent;
      border-bottom: 1em solid $white;
    }

    .teaser-image {
      position: relative;
      overflow: hidden;
      z-index: 0;
      figure {
        @include aspect-ratio-img(2.3,1);
      }
    }

    &.-theme-light {
     .triangel {
        border-left: 1em solid transparent;
        border-right: 1em solid transparent;
        border-bottom: 1em solid #f3f3f3;
      }
    }
    &.-theme-gray {
      .triangel {
        border-left: 1em solid transparent;
        border-right: 1em solid transparent;
        border-bottom: 1em solid #666;
      }
    }
    &.-theme-dark {
      .triangel {
        border-left: 1em solid transparent;
        border-right: 1em solid transparent;
        border-bottom: 1em solid #313131;
      }
    }

// - - - RESPONSIVE

    // 600px
    @media screen and (min-width: 600px)  {
      .header {
        font-size: 32px;
        line-height: 1.14;
      }
    }


    // 768px
    @media screen and (min-width: 768px)  {

      > div {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: 1280px;
        margin: 0 auto;
      }


      .header {
        font-size: 24px;
      }
      .col-body {
        padding: 24px;
      }

      .triangel {
        bottom: 50%;
        left: auto;
        right: 0;
        border-right: 1em solid $white;
        border-top: 1em solid transparent;
        border-bottom: 1em solid transparent;
        transform: translate(0, 50%);
      }

      &.-theme-light {
       .triangel {
          border-top: 1em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 1em solid #f3f3f3;
        }
      }
      &.-theme-gray {
        .triangel {
          border-top: 1em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 1em solid #666;
        }
      }
      &.-theme-dark {
        .triangel {
          border-top: 1em solid transparent;
          border-bottom: 1em solid transparent;
          border-right: 1em solid #313131;
        }
      }

      &.-image-right {
        > div {
          flex-direction: row-reverse;
          text-align: right;
        }
        .header-primary {
          text-align: right;
        }
        .triangel {
          position: absolute;
          bottom: 50%;
          right: auto;
          transform: rotate(180deg) translate(0, -50%);
        }

        .teaser-image {
          figure {

          }
        }

      }


      .teaser-image {
        figure {
          @include aspect-ratio-img(14,9);
        }
      }

    }

    // 1024px
    @media screen and (min-width: 1024px)  {
      .header {
        font-size: 32px;
      }
      .col-body {
        padding: 32px;
      }
      .triangel {
        font-size: 24px;
      }

    }

    // 1280px
    @media screen and (min-width: 1280px)  {

      .header {
        font-size: 40px;
        margin-bottom: 40px
      }
      .col-body {
        padding: 56px;
      }

    }



  }

</style>
