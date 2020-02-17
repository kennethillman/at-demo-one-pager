<template>

<section class="slice-one-twitter site-grid" >
    <div class="gc">

      <div class="row">
        <div class="g-12">
          <div class="header-primary">

             <div class="anchor" >Twitter</div> <div class="label">Slice</div>
             <prismic-rich-text class="header" :field="sliceRaw.primary.title1"/>

          </div>
        </div>
      </div>

      <div class="row" >
        <div class="g-12 " >

          Post: {{sliceRaw.primary.post}} <br>
          When: {{sliceRaw.primary.when_to_post}} <br>



          <!-- <prismic-rich-text :field="colOne"/> -->
        </div>
      </div>


      <br><br>


    </div>
  </section>

  <!-- <prismic-rich-text :field="sliceRaw.primary.title1"/> -->
  <!-- {{sliceRaw.primary.anchor_link[0].text}} -->
  <!-- {{sliceRaw.primary}} -->


</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'one-twitter',
  data() {
    return {
       raw: this.sliceRaw
    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style lang="scss">





</style>
