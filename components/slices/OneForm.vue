<template>

<section class="slice-one-form site-grid" :class="[theme,spacing]" :id="anchor">
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





    </div>

      <form action="https://formspree.io/xgevzbap" method="POST" ref="form" > <!-- v-if="!sent" -->
            <div class="gc contact-form">
              <div class="g-5 g-push-1 text">

                  <div>
                    <label for="name" hidden>Name:</label>
                    <input type="text" name="name" placeholder="Your Name" ref="formname" required>
                  </div>
                  <div>
                    <label for="email" hidden>Email:</label>
                    <input type="email" name="email" placeholder="Your Email" ref="formemail" required/>
                  </div>
              </div>
              <div class="g-5 text ">
                <div>
                  <label for="message" hidden>Message:</label>
                  <textarea  rows="3" name="message" placeholder="Tell us, how can we help you?" ref="formmeassage"  required></textarea>
                </div>
              </div>

              <div class="g-12 -text-center  contact-send"><br>
                <div class="btn" @click="submitForm">Send</div></div>
            </div>
      </form>


        <!-- Thanks -->
        <div class="gc contact-thankyou" >
          <div class="g-12">
            <h2 class="header-primary -in-view">Thank you!</h2>
            <p>We will get back to you ASAP.</p>
          </div>
        </div>

        <!-- Error -->
        <div class="gc contact-error" >
          <div class="g-12">
            <h2 class="header-primary -in-view">Oops! An error!</h2>
            <p>Please use our direct e-mails below.</p>
          </div>
        </div>

  </section>

  <!-- <prismic-rich-text :field="sliceRaw.primary.title1"/> -->
  <!-- {{sliceRaw.primary.anchor_link[0].text}} -->
  <!-- {{sliceRaw.primary}} -->


</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'one-form',
  data() {
    return {
       raw: this.sliceRaw,
       // anchor: this.sliceRaw.primary.anchor[0].text || false,
       // theme: '-theme-' + this.sliceRaw.primary.theme.toLowerCase() || false,
       // spacing: '-spacing-' + this.sliceRaw.primary.spacing.toLowerCase() || false,
       // title: this.sliceRaw.primary.title1[0].text || false,
       // text: this.sliceRaw.primary.text[0].text || false,
       // textThanks: this.sliceRaw.primary.textThanks[0].text || false,
       // textError: this.sliceRaw.primary.textError[0].text || false
       anchor:  false,
       theme: '-theme-dark',
       spacing: false,
       title: 'Contact form',
       text:  false,
       textThanks:  false,
       textError:  false
    }
  },
  methods: {

  },
  created() {

  }
}
</script>

<style lang="scss">

  .slice-one-form {

    strong {
      font-size: 18px;
      margin-bottom: 6px;
      line-height: 1;
      display: block;
    }

    .contact-form {
      transition: 0.5s ease all;
      opacity: 1;
      position: relative;
      z-index: 2;
    }

    .contact-thankyou,
    .contact-error {

      h2 {
        margin-bottom: 24px;
      }
      p {
        font-size: 22px;
      }
      transition: 0.5s ease all;
      text-align: center;
      opacity: 0;
      position: absolute;
      left: 50%;
      top: 50px;
      transform: translate(-50%, -50px);
    }

    &.-sent {
      .contact-thankyou {
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }

    &.-error {
      .contact-error{
        opacity: 1;
        transform: translate(-50%, 0);
      }
    }

    &.-error,
    &.-sent {
      .contact-form {
        opacity: 0;
        transform: translate(0, 50px);
      }
    }



    .section-body {
      position: relative;
      width: 100%;
    }

    input,
    select,
    textarea {
      -webkit-appearance: none;
      border: 0;
      border-radius: 0;
      height: 50px;
      line-height: 50px;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.23);
      font-size: 18px;
      background: transparent;
      transition: 0.5s ease all;
      &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #fff;
        opacity: 1; /* Firefox */
      }
      &:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #fff;
      }

      &::-ms-input-placeholder { /* Microsoft Edge */
        color: #fff;
      }
    }

    textarea {
      height: auto;
      line-height: 1.4;
    }

    .contact-send {
      margin-bottom: 50px;
    }

    .contact-details {
      margin-bottom: 50px;
      font-size: 14px;
      > div {
        margin-bottom: 30px;
      }
    }

    @media screen and (min-width: 768px)  {
      textarea {
        height: 120px;
      }

      .contact-details > div:nth-child(2) {
        text-align: center;
      }

      .contact-details > div:last-child {
        text-align: right;
      }

    }

  }



</style>
