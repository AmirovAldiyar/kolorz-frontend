<template>
  <div class='mode-select-container'>
    <mode-card v-for="(mode, index) in modes" :key="index" :name="mode.name" :icon="mode.icon"/>
  </div>
</template>

<script>
import ModeCard from '../molecules/ModeCard.vue'
export default {
  components: { ModeCard },
  name: "AppModeSelect",
  data() {
    return {
      modes: [
      {
        name: 'square',
        icon: '/svg/square.svg'
      },
      {
        name: 'tetradic',
        icon: '/svg/tetradic.svg'
      },
      {
        name: 'complementary',
        icon: '/svg/complementary.svg'
      },
      {
        name: 'isosceles',
        icon: '/svg/isosceles.svg'
      },
      {
        name: 'analogous',
        icon: '/svg/analogous.svg'
      },
      {
        name: 'monochram',
        icon: '/svg/monochram.svg'
      },
      {
        name: 'triadic',
        icon: '/svg/triadic.svg'
      },
      {
        name: 'david star',
        icon: '/svg/davidstar.svg'
      }
    ]
    }
  }
}
</script>

<style scoped>
  .mode-select-container {
    width: 475px;
    height: 230px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .test {
    width: 230px;
    height: 50px;
    background-color: aliceblue;
  }
  @media (max-width: 1439px) {
    .mode-select-container {
      width: 310px;
      height: 175px;
    }
  }
</style>