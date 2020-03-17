<template>
  <section class="site-header"> 
    
    <!-- SITE HOME -->
    <figure class="site-home" @click="activeLink = undefined; addHashbang('#to-top')">
      <div v-scroll-to="'#to-top'" >
        <svg-icon class="logo" name="activetalents-filled" />
      </div>
    </figure>

    <!-- SITE NAVIGATION -->
    <nav class="site-menu">
      <ul>
        <li v-for="(item,index) in menuClean" :key="index">
          <div class="site-menu-item" :class="{'-active': item[1] === activeLink}" @click="activeLink = item[1]; addHashbang(item[1]);">
            <a href="#" v-scroll-to="item[1]">{{item[0]}}</a>
          </div>
        </li>
      </ul>
    </nav>

  </section>
</template>

<script>
export default {
  props: ['links'],
  name: 'site-header',
  data() {
    return {
       activeLink: undefined,
       menuRaw: this.links,
       menuClean: []
    }
  },
  methods: {

    clean(links){

      let _links = links.body[0].items;

      // The view model.
      let vm = this;

      _links.forEach(function(item,index) {

        let _item = []
        let clean_url = ''
        let item_text = item.link_label[0].text
        let item_url = item.link.url
        let item_id = index + 1

        if (item.link.url.includes('https://#')) {
          clean_url = item_url.replace('https://','');
          item_url = clean_url
        }

        _item.push(item_text)
        _item.push(item_url)
        _item.push(item_id)

        vm.menuClean.push(_item)

      });

    },
    addHashbang(hashbang){
      location.hash = hashbang;
    },
    onLoadScrollToHash(){
      if (location.hash) {
        setTimeout(() => this.$scrollTo(location.hash), 675);
        this.activeLink = location.hash
      } 
    } 
  },
  mounted(){
    this.onLoadScrollToHash()
  },
  created() {
    this.clean(this.menuRaw)
  }
}
</script>

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
    margin: 0;
    div {
      width: 64px;
      height: 64px;
    }

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

  .site-menu {

    position: fixed;
    top: 0;
    right: 0;
    padding: 24px;
    z-index: 20;

    li, ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: inline-block;
    }
    a {
      text-decoration: none;
      color: $white;
      display: block;
      background: $pink;
      height: 32px;
      //width: 32px;
      padding: 0 16px;
      line-height: 32px;
      text-align: center;
      margin: 0 0 0 8px;
      border-radius: 100px;
      text-transform: uppercase;
      font-size: 16px;
      font-family: $font-oswald;

      &:hover {
        background: darken($pink, 12);

      }
    }
    .-active {
      a {
        background: $purple;
      }
    }
  }

</style>
