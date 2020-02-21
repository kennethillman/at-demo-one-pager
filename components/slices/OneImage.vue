<template>

  <section class="slice-one-image site-grid">
    <div class="gc -maximize">
      <div class="row">
        <div class="g-12">
          <div class="header-primary">
            <div class="label">Slice</div>
          </div>
          <figure>
            <img :src="sliceRaw.primary.image.url" /> 
            <div class="image-text">
              <div class="photographer"><i>Photographer:</i> <prismic-rich-text :field="sliceRaw.primary.photographer" /></div><br>
              <div class="description"><prismic-rich-text :field="sliceRaw.primary.description" /></div> 
            </div> 
          </figure>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'one-image'
}
</script>

<style lang="scss">

  .slice-one-image {
    padding: 0!important;
    position: relative;

    .header-primary {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 100%);
      z-index: 4;
    }

    figure {
      @include aspect-ratio-img(16,9);
    }

    .image-text {
      text-align: right;
      position: absolute;
      right: 32px;
      bottom: 32px;
      display: none;
      
      font-size: 12px;
      .photographer,
      .description {
        background: rgba(0,0,0,.28);
      border-radius: 3px;
      padding: 8px;
      color: rgba(255,255,255,.55);
      }
      .description {
        margin-top: 4px;
        color: $white;
        font-style: italic;
        font-size: 13px;

      }
      a {
        color: $white;
        &:hover {
          color: $pink;
        };
      }
      p, div {
        display: inline-block;
        margin: 0;
      }
    }

    // 600px
    @media screen and (min-width: 600px)  {
      figure {
        @include aspect-ratio-img(2,1);
      }

    }

    // 768px
    @media screen and (min-width: 768px)  {

      figure {
        @include aspect-ratio-img(2.35,1);
      }

      .image-text {
        display: block;
      }


    }

    // 1024px
    @media screen and (min-width: 1024px)  {

          figure {
      @include aspect-ratio-img(2.67,1);
    }


    }

  }

</style>
