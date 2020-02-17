<template>



  <section class="slice-one-map site-grid" :class="[theme]" :id="this.anchor">

    <div class="teaser-image col">

      <GMap
        ref="gMap"
        :center="{lat: cmsLocations[0].latitude, lng: cmsLocations[0].longitude}"
        :options="{fullscreenControl: true}"
        :zoom="13"
      >
        <GMapMarker
          v-for="location in cmsLocations"
          :key="location.id"
          :position="{lat: location.latitude, lng: location.longitude}"
        >
        </GMapMarker>
      </GMap>

    </div>

    <div class="teaser-text col">
      <div class="col-body">
        <div class="header-primary">
          <div class="anchor" v-if="anchor">{{anchor}}</div> <div class="label">Slice</div>
          <h2 class="header">{{ title }}</h2>
        </div>

        <prismic-rich-text :field="sliceRaw.primary.text"/>

      </div>
    </div>



  </section>



  <!-- <prismic-rich-text :field="sliceRaw.primary.title1"/> -->
  <!-- {{sliceRaw.primary.anchor_link[0].text}} -->


</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'one-map',
  data() {
    return {
      raw: this.sliceRaw,
      anchor: this.sliceRaw.primary.anchor[0].text || false,
      theme: '-theme-' + this.sliceRaw.primary.theme.toLowerCase() || false,
      title: this.sliceRaw.primary.title1[0].text || false,
      text: this.sliceRaw.primary.text[0].text || false,
      cmsLocations: this.sliceRaw.items[0].coordinates.latitude !== 0 ? [this.sliceRaw.items[0].coordinates] : [ { "latitude": 59.338675, "longitude": 18.068568000000013 } ]
    }
  },
  methods: {

  },
  created() {

  }
}
</script>


<style lang="scss">


  .slice-one-map {

    display: block;
    padding:0;

    .header-primary {
      text-align: center;
      margin-bottom: 16px;
    }

    .header {

    }

    .col {
      flex: 1;
      //width: 50%;
      box-sizing: border-box;

    }
    .col-body {
      padding: 32px;
    }

    .teaser-image {
      position: relative;
      overflow: hidden;
      z-index: 0;
      // display: none;

      figure {
        @include aspect-ratio-img(2.3,1);

        .triangel {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0);
          width: 0;
          height: 0;
          border-left: 16px solid transparent;
          border-right: 16px solid transparent;
          border-bottom: 16px solid $white;
        }
      }

    }

    // 600px
    @media screen and (min-width: 600px)  {
      .header {

      }
    }


    // 768px
    @media screen and (min-width: 768px)  {

      display: flex;
      align-items: center;
      flex-direction: row;

      &.-image-right {
        flex-direction: row-reverse;
        text-align: right;
        .header-primary {
          text-align: right;
        }
      }
      .header {

      }
      .col-body {
        padding: 24px;
      }

      .teaser-image {
        figure {
          @include aspect-ratio-img(16,12);
          .triangel {
            position: absolute;
            bottom: 50%;
            left: auto;
            right: 0;
            transform: translate(0, 50%);
            width: 0;
            height: 0;
            border-top: 24px solid transparent;
            border-bottom: 24px solid transparent;
            border-right: 24px solid $white;
          }
        }
      }

    }

    // 1024px
    @media screen and (min-width: 1024px)  {
      .header {

      }
      .col-body {
        padding: 32px;
      }

      .teaser-image {
        figure {
          @include aspect-ratio-img(16,9);
        }
      }

    }

    // 1280px
    @media screen and (min-width: 1280px)  {

          .header {

      }
      .col-body {
        padding: 56px;
      }

    }



  }

</style>
