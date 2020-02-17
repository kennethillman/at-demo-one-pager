<template>
  <div>

    <!-- <h1>comp Slices -> {{slices}}</h1> -->

    <section v-for="(slice, index) in slices" :key="'slice-' + index">


      <!-- WIP / TEST / TEMPLATE -->
      <template v-if="slice.slice_type === 'twitter_post'">
        <one-twitter :sliceRaw="slice"/>
      </template>



      <!-- TEXT -->
      <template v-if="slice.slice_type === 'text'">
        <one-text :sliceRaw="slice"/>
      </template>


       <!-- IMAGE & TEXT -->
       <template v-if="slice.slice_type === 'image_and_text'">

        <one-text-image :sliceRaw="slice"/>

      </template>

      <!-- REFERENCE -->
      <template v-if="slice.slice_type === 'one_reference'">
        <one-reference :sliceRaw="slice"/>
      </template>

      <!-- MAP -->
      <template v-if="slice.slice_type === 'one_map'">
        <one-map :sliceRaw="slice"/>
      </template>

      <!-- FORM -->
      <template v-if="slice.slice_type === 'one_form'">
        <one-form :sliceRaw="slice"/>
      </template>

      <!-- <one-form :sliceRaw="slice"/> -->
      <!-- <one-text-image :sliceRaw="slice"/> -->

    </section>
  </div>
</template>

<script>

import wip   from '~/components/slices/wip.vue'
import oneText   from '~/components/slices/OneText.vue'
import oneTextImage   from '~/components/slices/OneTextImage.vue'
import oneReference   from '~/components/slices/OneReference.vue'
import oneMap   from '~/components/slices/OneMap.vue'
import oneForm   from '~/components/slices/OneForm.vue'
import oneTwitter   from '~/components/slices/oneTwitter.vue'

export default {
  props: [
    'slicesRaw'
  ],
  components: {
    wip,
    oneText,
    oneReference,
    oneTextImage,
    oneMap,
    oneTwitter,
    oneForm
  },
  data () {
    return {
      slices: this.slicesRaw
    };
  }

};
</script>

