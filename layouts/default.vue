<template>
  <div class="wrapper">
    <app-header class="main-header"/>
    <nuxt/>
  </div>
</template>

<script>
import appHeader from '~/components/organisms/appHeader.vue'
export default {
  components: { appHeader },

}
</script>

<style>
body, input, textarea, button {font-family: Tahoma, sans-serif}
body {
  margin: 0;
}
.main-header{
  position:absolute;
  top:0;
  width: 100%;
}
.wrapper {
  position: relative;
  width: 1440px;
  height:100%;
  margin: 0 auto 0 auto;
}
@media (max-width: 1439px) {
  .wrapper{
    width: 768px;
  }
}
</style>
