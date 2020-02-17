<template>

<section class="slice-one-reference site-grid" :class="[theme]" :id="sliceRaw.primary.anchor_link[0].text">
    <div class="gc">

      <div class="row">
        <div class="g-12">
          <div class="header-primary">

             <div class="anchor">{{sliceRaw.primary.anchor_link[0].text}}</div> <div class="label">Slice</div>
             <h2 class="header">
              Reference
            </h2>

          </div>
        </div>
      </div>

      <div class="row reference">
        <div class="g-10 g-push-1">

          " {{sliceRaw.primary.ref_text[0].text}} "
          <div class="ref">
            <prismic-rich-text :field="sliceRaw.primary.ref_person"/>
            <span class="company"><prismic-rich-text :field="sliceRaw.primary.company"/></span>
          </div>
        </div>
      </div>




    </div>
  </section>

  <!-- <prismic-rich-text :field="sliceRaw.primary.title1"/> -->
  <!-- {{sliceRaw.primary.anchor_link[0].text}} -->
  <!--  {{sliceRaw.primary}} -->

</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'one-reference',
  data() {
    return {
       raw: this.sliceRaw,
       anchor: false,
       theme: '-theme-white',
       title: 'Title'
    }
  },
  methods: {
    fnTheme() {
     let color = this.raw.primary.theme.toLowerCase()
     let colorClass = '-theme-' + color
     this.theme = colorClass
    }
  },
  created() {
    this.fnTheme();
  }
}
</script>

<style lang="scss">

  .slice-one-reference {
      .reference {
        font-style: italic;
        text-align: center;
        font-size: 24px
      }
      .ref {
        font-style: normal;
        text-align: right;
        padding: 24px 0 4px;
      }
      .company {
        font-size: 14px;
        font-weight: 800;
      }
  }



</style>
