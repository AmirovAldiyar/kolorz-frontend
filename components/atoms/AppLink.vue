<template>
  <nuxt-link v-if="isSpa" class="link-container" :to='link'>
    <slot/>
  </nuxt-link>
  <a v-else class="link-container" :href="link">
    <slot/>
  </a>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    link: {
      type: String,
      default: ''
    },
    isSpa: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style>
  .link-container {
    opacity: 0.6;
    font-size: 20px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: black;
    text-decoration: none;
    transition: ease-in 0.2s;
  }
  .link-container:hover {
    opacity: 0.7;
  }
  .link-container:active {
    opacity: 0.85;
  }
</style>