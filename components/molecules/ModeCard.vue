<template>
  <app-button type="text" :class="{'mode-card-selected': name===currentMode}" class="mode-card" @click="changeMode">
      <img class="mode-icon" :src="icon" :alt="name" width="28px" v-if="showIcon">
      <span class="mode-name"> {{name}} </span>
  </app-button>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import AppButton from '../atoms/AppButton.vue'
export default {
  name: "ModeCard",
  components: { AppButton },
  props: {
    icon: {
      type: String,
      default: '/svg/tetradic.svg'
    },
    name: {
      type: String,
      default: 'Mode'
    }
  },
  methods: {
    ...mapMutations({changeCurrentMode: 'mode/changeCurrentMode'}),
    changeMode() {
      this.changeCurrentMode(this.name)
    }
  },
  computed: {
    ...mapGetters({currentMode: 'mode/currentMode'}),
    showIcon() {
      return window.innerWidth >= 1440
    }
  }
}
</script>

<style scoped>
  .mode-card {
    width: 230px;
    height: 50px;
    border: 2px solid #F1F1F1;
    box-sizing: border-box;
    border-radius: 7px;
    display: flex;
    align-items: center;
    background-color: white;
    transition: ease-in 0.2s;
  }
  .mode-card:hover {
    background-color: rgba(0,0,0,0.05) !important;
  }
  .mode-card:active {
    background-color: rgba(0,0,0,0.1) !important;
  }
  .mode-card-selected {
    background-color: #F1F1F1 !important;
  }
  .mode-icon {
    margin-left: 8px;
  }
  .mode-name {
    margin-left: 10px;
    text-transform: uppercase;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8)
  }
  @media (max-width: 1439px) {
    .mode-card {
    width: 150px;
    height: 40px;
  }
  .mode-name {
    margin: 0 auto 0 auto;
  }
  }
</style>
