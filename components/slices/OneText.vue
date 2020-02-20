<template>

<section class="slice-one-text site-grid" :class="[theme,spacing]" :id="anchor">
    <div class="gc">

      <div class="row">
        <div class="g-12">
          <div class="header-primary">

             <div class="anchor" v-if="anchor">{{anchor}}</div> <div class="label">Slice</div>
             <h2 class="header">
              {{ title }}
            </h2>

          </div>
        </div>
      </div>

      <div class="row" v-if="colTwoText">
        <div class="g-5 g-push-1" >
          <prismic-rich-text :field="colOne"/>
        </div>
        <div class="g-5">
          <prismic-rich-text :field="colTwo"/>
        </div>
      </div>

      <div class="row" v-if="!colTwoText">
        <div class="g-8 g-push-2">
          <prismic-rich-text :field="colOne"/>
        </div>
      </div>

      <div class="row button" v-if="link">
        <div class="g-12 ">
          <a :href="link" class="btn" target="_blank">{{linkLabel}}</a>
        </div>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'one-text',
  data() {
    return {
       raw: this.sliceRaw,
       anchor: this.sliceRaw.primary.anchor_link[0].text || false,
       theme: '-theme-' + this.sliceRaw.primary.theme.toLowerCase(),
       spacing: '-spacing-',
       title: this.sliceRaw.primary.title1[0].text,
       link: this.sliceRaw.primary.link.url,
       linkLabel: this.sliceRaw.primary.link_label[0].text,
       colOneText: this.sliceRaw.primary.col_one[0].text,
       colOne: this.sliceRaw.primary.col_one,
       colTwoText: this.sliceRaw.primary.col_two[0].text,
       colTwo: this.sliceRaw.primary.col_two
    }
  }
}
</script>

<style lang="scss">

  .slice-one-text {
    li {
      list-style-type: none;
      margin-bottom: .6em;
      font-weight: 600;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        background: url('../../assets/icons/tick.svg') no-repeat;
        height: 25px;
        width: 25px;
        right: 100%;
        top: 0;
        margin-right: 8px
      }

    }
    .button {
      margin-top: 2em;
    }

    // 600px
    @media screen and (min-width: 600px)  {
      .button {
        text-align: center;
      }
    }

    // 768px
    @media screen and (min-width: 768px)  {
      .button {
         margin-top: 3em;
      }
    }

  }

</style>
