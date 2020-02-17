<template>

  <figure class="site-home" v-scroll-to="'#to-top'">
    <svg-icon class="logo" name="activetalents-filled" />
  </figure>


</template>

<style lang="scss">

  .site-home {
    border-radius: 400px;
    width: 64px;
    height: 64px;
    background-color: $pink;
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 222;

    svg {
      fill: $white;
      height: 40px;
      width: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -56%);
    }

  }



</style>
