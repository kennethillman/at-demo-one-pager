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

      <div class="row" >
        <div class="g-12 " >
          anchor: {{anchor}} <br>
          theme: {{theme}} <br>
          spacing: {{spacing}} <br>
          title: {{title}} <br>
          text: {{text}} <br>
          link: {{link}} <br>
          linkLabel: {{linkLabel}} <br>
        </div>
      </div>

      <div class="row button" v-if="link">
        <div class="g-12 ">
          <a :href="link" class="btn" target="_blank">{{linkLabel}}</a>
        </div>
      </div>
      <br><br>


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
       anchor: this.sliceRaw.primary.anchor[0].text || false,
       theme: '-theme-' + this.sliceRaw.primary.theme.toLowerCase() || false,
       spacing: '-spacing-' + this.sliceRaw.primary.spacing.toLowerCase() || false,
       title: this.sliceRaw.primary.title1[0].text || false,
       text: this.sliceRaw.primary.text[0].text || false,
       link: this.sliceRaw.primary.link.url || false,
       linkLabel: this.sliceRaw.primary.link_label[0].text || false
    }
  }
}
</script>

