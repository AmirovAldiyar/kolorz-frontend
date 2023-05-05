<template>
  <div class="container">
    <div class="left-upper-background" :style="{background: leftUpperGradient}"></div>
    <div class="header"></div>
    <div class="main">
      <div class="color-change">
        <app-color-picker width="700" height="700" :mode=currentMode :recColor=recHex />
        <div class="mode-select">
          <div class="creativation"> CREATIVATION </div>
          <div class="formula">Creativity + Inspiration</div>
          <div class="mode-select-title">COLOR SCHEME</div>
          <app-mode-select class="main-mode" />
        </div>
      </div>
    </div>
    <div class="palette-main">
        <app-color-palette class="palette" :primaryColor=primaryColor />
        <div class="recommended">Recommended</div>
        <app-color-palette class="palette" :primaryColor=recHex :text=recQuote :author=recAuthor :mode=status />
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import AppColorPalette from '~/components/molecules/AppColorPalette.vue'
import AppColorPicker from '~/components/molecules/AppColorPicker.vue'
import AppModeSelect from '~/components/organisms/AppModeSelect.vue'
const generateHex = () => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      const temp = ((r << 16) | (g << 8) | b).toString(16)
      return "#" + ("000000" + temp).slice(-6)
    }
export default {
  components: { AppModeSelect, AppColorPicker, AppColorPalette },
  data() {
    return {
      recQuote: 'COLORS MUST FIT TOGETHER AS PIECES IN A PUZZLE OR COGS IN A WHEEL',
      recAuthor: 'Hans Hofmann',
      recHex: this.recHex,
      status: 'rec',
    }
  },
  watch: {
    primaryColor(oldx, nexx) {
      this.recHex = generateHex()
    }
  },
  computed: {
    ...mapGetters({primaryColor: 'colors/primaryColor', currentMode: 'mode/currentMode'}),
    leftUpperGradient() {
      return `linear-gradient(180deg, ${this.primaryColor} 0%, rgba(196, 196, 196, 0) 100%)`
    },
    colorWheelSize () {
      return window.innerWidth >= 1440 ? 500 : 350
    }
  },
  methods: {
    ...mapMutations({changeAllColors: 'colors/changeAllColors'}),
  },
}
</script>

<style scoped>
  .color-picker {
    width: 450px;
    height: 450px;
  }
  .container {
    width: 1440px;
    height: 100%;
  }
  .header {
    height: 105px;
    width: 100%;
  }
  .main {
    width: 100%;
    box-sizing: border-box;
    padding: 0 80px 100px 100px;
    display: flex;
    flex-direction: column;
  }
  .color-change {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .mode-select {
    margin-top: 60px;
    display: flex;
    width: 530px;
    flex-direction: column;
  }
  .mode-select-title {
    width: 100%;
    font-size: 16px;
    letter-spacing: 0.1em;
    margin: 120px 0 20px 22px;
  }
  .main-mode {
    margin-left: 55px;
  }
  .creativation {
    font-size: 60px;
    line-height: 64px;
    letter-spacing: 0.14em;
  }
  .formula {
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 0.1em;
    color: #9B9797;
  }
  .generate-button{
    margin: 25px auto 0 auto
  }
  .left-upper-background {
    position: absolute;
    left: 0;
    top: 0;
    width: 336px;
    height: 517px;
    opacity: 0.7;
    z-index: -1;
  }
  .palette-main {
      z-index: 2;
      width: 100%;
      box-sizing: border-box;
      padding: 0 80px 100px 100px;
      display: flex;
      justify-content: space-between;    
  }
  .recommended {
    position: relative;
    top: -20px;
    left: 150px;
    z-index: 1;
    width: 115px;
    height: 15px;
    font-size: 15px;
    background: #FFF;
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display: flex;
    padding: 15px 30px 15px 30px;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    vertical-align:middle;
  }
  @media (max-width: 1439px) {
    .container {
      width: 768px;
    }
    .main {
      padding: 0 40px 100px 50px;
    }
    .creativation {
      font-size: 30px;
      line-height: 34px;
      letter-spacing: 0.14em;
    }
    .formula {
      font-size: 10px;
      line-height: 10px;
      letter-spacing: 0.1em;
      color: #9B9797;
    }
    .mode-select {
      margin-top: 30px;
      display: flex;
      width: 530px;
      flex-direction: column;
    }
    .mode-select-title {
      width: 100%;
      font-size: 16px;
      letter-spacing: 0.1em;
      margin: 40px 0 20px 22px;
    }
    .left-upper-background {
      width: 200px;
    }
    .color-picker {
      margin-left: -15px
    }
  }
</style>
