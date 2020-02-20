<template>

<section class="slice-one-form site-grid" :class="[theme,{'-sent': this.sent === 'sent', '-error': this.sent === 'error'}]" >
    <div class="gc">

      <div class="row">
        <div class="g-12">
          <div class="header-primary">
             <div class="label">Slice</div>
             <h2 class="header">{{title}}</h2>
          </div>
       
        </div>
      </div>

    </div>

    <div class="form-wrapper">

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
            <div class="btn" @click="submitForm">Send</div>
          </div>
        </div>
      </form>


      <!-- Thanks -->
      <div class="contact-thankyou" >
        <h2 class="header-primary -in-view">{{ sliceRaw.primary.thank_you_title[0].text }}</h2>
        <p>{{ sliceRaw.primary.thank_you_meassage[0].text }}</p>
      </div>

      <!-- Error -->
      <div class="contact-error" >
        <h2 class="header-primary -in-view">{{ sliceRaw.primary.error_title[0].text }}</h2>
        <p>{{ sliceRaw.primary.error_meassage[0].text }}</p>
      </div>

    </div>

    <!-- <svg-icon  name="activetalents-filled" /> -->

  </section>

</template>

<script>
export default {
  props: ['sliceRaw'],
  name: 'one-form',
  data() {
    return {
       raw: this.sliceRaw,
       theme: '-theme-' + this.sliceRaw.primary.theme.toLowerCase() || false,
       title: this.sliceRaw.primary.title1[0].text || false,
       text: this.sliceRaw.primary.preamble1[0].text || false,
       sent: false,
       formData: false
    }
  },
  methods: {
    submitForm(ev) {
      ev.preventDefault();
      const form = this.$refs.form;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.sent = 'sent';
        } else {
          this.sent = 'error';
        }
      };
      xhr.send(data);
    }

  },
  created() {

  }
}
</script>

<style lang="scss">

  .slice-one-form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 64vh;
    overflow: hidden;

    > svg {
      position: absolute;
      fill: #1a1a1a;
      height: 250vh;
      width: 250vh;
      z-index: 0;
    }

    .form-wrapper, .gc {
      z-index: 1;
    }

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

    .form-wrapper {
      position: relative;
    }


    .contact-thankyou,
    .contact-error {


      h2 {
        margin-bottom: 24px;
        font-family: $font-oswald;
        letter-spacing: .16em;
        font-weight: 300;  
        text-transform: uppercase;
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

    &.-theme-dark {
      .contact-thankyou,
      .contact-error {
        h2 {
          color: $white; 
        }
      }
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
        z-index: -1;
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
