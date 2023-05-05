 <template>
  <div class="palette-container">
    <div class="palette-title">Color Palette</div>
    <div class="palette-division-line" :style="{'background': 'linear-gradient(90deg, '+ this.primaryColor+' , white)'}"></div>
    <div class="palette-quote">
      <div class="quote-text">{{quote}}</div>
      <div class="right-text">
        <div class="quote-author">{{author}} </div>
        <div class="palette-creation-date"> Created: {{months[new Date().getMonth()]  +' '+ new Date().getDate() +'/'+ new Date().getFullYear()}}</div>
      </div>
    </div>
    <div class="palette-division-line" :style="{'background': 'linear-gradient(90deg, '+ this.primaryColor+' , white)'}"></div>
    <div class="palette-colors" :class="{'palette-colors-three': colors.length === 3}">
      <div class="palette-color" v-for="(color, index) in colors" :key="index">
        <div class="palette-sheet" :style="{'background': color}"></div>
        <div class="palette-hex">{{color[0] === '#' ? color : 'gradient'}}</div>
      </div>
    </div>
    <app-button class="palette-export-button">Export</app-button>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import AppButton from '../atoms/AppButton.vue'
export default {
  components: { AppButton },
  name: "AppColorPalette",
  data () {
    return {
      months:  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    }
  },
  props: {
    primaryColor: {
      type: String,
      default: '#000'
    }, 
    quote: {
      type: String,
      default: 'IT’S OK TO SHOW ALL YOUR COLORS.'
    },
    author: {
      type: String,
      default: 'Luis Guzman',
    },
    mode: {
      type: String,
      default: 'main',
    }
  },
  watch: {
    primaryColor (oldx, newx) {
        this.now = new Date()
    }
  },
  computed: {
    ...mapGetters({allColors: "colors/allColors", recColors: "colors/recColors"}),
    colors() {

      if (this.mode === 'rec') {
        if(this.recColors.length === 2){
          return [...this.recColors, `linear-gradient(180deg, ${this.recColors[0]}, ${this.recColors[1]})`]
        }
        return this.recColors
      }
      if(this.allColors.length === 2){
        return [...this.allColors, `linear-gradient(180deg, ${this.allColors[0]}, ${this.allColors[1]})`]
      }
      return this.allColors
    }
  }
}
</script>

<style scoped>
  .palette-container {
    padding: 40px 40px 55px 40px;
    width: 480px;
    height: 700px;
    background: #FFF;
    box-shadow: 4px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .palette-title {
    font-size: 60px;
    line-height: 64px;
    letter-spacing: 0.14em;
  }
  .palette-colors {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .palette-colors-three {
    padding: 0 30px 0 30px;
    box-sizing: border-box;
  }
  .palette-color {
    width: 85px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .palette-sheet {
    width: 85px;
    height: 200px;
    border-radius: 50px;
    box-shadow: 0 30px 42px -31px rgba(0, 0, 0, 0.6) inset;
  }
  .palette-hex {
    width: 100%;
    text-align: center;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.1em;
    color: #828282;
  }
  @media (max-width: 1439px) {
    .palette-container {
      transform: scale(0.8);
    }
  }
  .palette-division-line {
    width: 475px;
    height: 8px;
  }
  .palette-quote {
    font-size: 15px;
    line-height: 16px;
    letter-spacing: 10%;
    color: #9B9797;
    padding-left: 10px;
  }
  .right-text {
    display: grid;
    float: right;
    padding-right: 40px;
  }
  .quote-author {
    margin: auto 0 auto auto;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .palette-export-button {
    margin: 10px auto 0 auto;
  }

</style>