<template>

<section class="slice-one-clients site-grid" :class="[theme]">
    <div class="gc -maximize">

      <div class="row">

        <div class="g-12">
          <div class="header-primary">
              <div class="label">Slice</div>
             <h2 class="header">
              {{ title }}
            </h2>
          </div>

          <div class="logos">
            <figure v-for="(logo, index) in sliceRaw.items" :key="'logo-' + index">
                <img :src="logo.svg_logo.url">
            </figure>
          </div>

        </div>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'one-clients',
  data() {
    return {
       raw: this.sliceRaw,
       theme: '-theme-' + this.sliceRaw.primary.theme.toLowerCase() || false,
       title: this.sliceRaw.primary.title1[0].text || false
    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style lang="scss">
  
  .slice-one-clients {
    padding-bottom: 48px;

    .logos {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 0 24px;
      figure {
        box-sizing: border-box;
        padding: 3vw;
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 30%;
      }
    } 

   @media screen and (min-width: 600px)  {
    .logos {
      flex-wrap: nowrap;
      figure {
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: initial;
      }
    }
   }

  }

</style>
