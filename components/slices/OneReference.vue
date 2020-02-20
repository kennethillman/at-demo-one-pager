<template>

<section class="slice-one-reference site-grid" :class="[theme]" :id="sliceRaw.primary.anchor_link[0].text">
    <div class="gc">

    
        <div class="g-12">
          <div class="header-primary">

             <div class="anchor">{{sliceRaw.primary.anchor_link[0].text}}</div> <div class="label">Slice</div>
             <h2 class="header">
              References
            </h2>

          </div>


        <div class="reference-wrapper">

         <!--  

            (i) -> WORK IN PROGESS 

         <div class="reference">
            " {{sliceRaw.primary.ref_text[0].text}} "
            <div class="ref">
              <prismic-rich-text :field="sliceRaw.primary.ref_person"/>
              <span class="company"><prismic-rich-text :field="sliceRaw.primary.company"/></span>
            </div>
          </div> -->

          
          <div class="reference">
            " This is an reference, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            <div class="ref">
              <p>Jane Doe</p>
              <span class="company">Acme Lab</span>
            </div>
          </div>

          <div class="reference">
            " This is an reference, Lorem ipsum dolor sit amet, consectetur adipiscing elit.. "
            <div class="ref">
              <p>Elisabeth Andersson</p>
              <span class="company"></span>
            </div>
          </div>

          <div class="reference">
            " This is an reference, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. "
            <div class="ref">
              
              <span class="company">Acme TV</span>
            </div>
          </div>

        </div>

        </div>

    </div>
  </section>

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
      padding-bottom: 0; 
    
      .reference {
        font-style: italic;
        text-align: center;
        font-size: 16px;
        line-height: 30px;
        background-color: #1a1a1a;
        border-radius: 3px;
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
        padding: 48px 24px 104px;
        color: #aaa;
        margin: 0 0 24px;
        flex-basis: 0;
        flex-grow: 1;
        position: relative;
  
    
      }
      .ref {
        font-style: normal;
        padding: 16px 0 4px;
        font-size: 14px;
        color: $orange;
        line-height: 1.4;
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);

        p {
          margin: 0;
        }
      }
      .company {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        font-weight: 800;
        color: #666;
        text-transform: uppercase;
        min-height: 1em;
      }


    // 768px
    @media screen and (min-width: 768px)  {
      margin-top: 72px;

      .reference-wrapper {
        display: flex;
        justify-content: space-between;
      }

      .reference {
     
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 12px;
    
      }
     
    }

    // 1280px
    @media screen and (min-width: 1280px)  {
      margin-top: 96px;
    }

  }

</style>
