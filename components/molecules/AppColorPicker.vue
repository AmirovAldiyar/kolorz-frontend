<template>
<div :style="{'--hexB': hexB, 
              '--slvalue': slvalue,
              '--bvalue': bvalue,
              }">
    <div class="colorWheel">
      <canvas width = "700" height="700" ref = "ColorWheelCanvas" :style="{'filter': 'brightness('+saturation+')'}" class = "ColorWheelCanvas"></canvas>
      <input :style="{top: y+'px', left: x+'px', background: hexB}" ref="button" type="button"  class="mainColorPicker" @mouseup = "mouseuphandler" @mousedown = "mousedownhandler">
      <app-color-picker-color-wheel-color-picker :x=x :y=y :hexB=hexB :mode=mode :y_0=y_0 :x_0=x_0 :saturation=saturation :recColor=recColor />
    </div>
    <div class="saturationBar">
      <input id="myRange" type="range" min="1" max="255" value="255" class="slider" @input = "OnSliderChange">
    </div>
    <div class="colorCode">
      <a class="colorCodeFormatText">HEX</a>
      <div class="colorCodeDisplay"></div>
      <input v-model="hexB" type="text" class="colorCodeHex">

    </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import AppColorPickerColorWheelColorPicker from '../atoms/AppColorPickerColorWheelColorPicker.vue'
export default{
  props: {
        mode: {
            type: String,
            default: 'square'
        },
        recColor: {
            type: String,
            default: '#ffffff'
        }
  },
  data() {
    return {
      saturation: this.saturation,
      hexB: this.hexB,
      slvalue: this.slvalue,
      bvalue: this.bvalue,
      x: this.x,
      y: this.y,
    }
  },
  components: { AppColorPickerColorWheelColorPicker },
  watch: {
  hexB(newVal, oldVal) {
      this.changePrimaryColor(newVal)
  }
  },
  mounted () {  
    this.loadImage()
  },
  directives () {
    this.loadImage()
  },
  methods: {
    ...mapMutations({changePrimaryColor: 'colors/changePrimaryColor'}),
    addEvent(obj, type, fn){ 
    if(obj.addEventListener)
      obj.addEventListener( type, fn, false );
    },
    mousedownhandler(e) {  
      this.down = true;
    },
    mouseuphandler(e) {  
      this.down = false;
    },
    loadImage () {
    const vm = this
    vm.canvas = vm.$refs.ColorWheelCanvas;
    vm.context = vm.canvas.getContext('2d');
    const image = new Image();
    image.onload = function() {
        vm.context.drawImage(image, 0, 0, image.width, image.height,
                                  0, 0, vm.canvas.width, vm.canvas.height);
       }
    image.onload()
    image.src = '/png/color-wheel.png';
    this.x = this.canvas.offsetTop + 350 - 15;
    this.y = this.canvas.offsetLeft + 350 - 15;
    this.x_0 = this.canvas.offsetLeft + 350;
    this.y_0 = this.canvas.offsetTop + 350;
    const slider = document.getElementById("myRange");
    this.saturation = slider.value/255;
    const temp = 255-slider.value
    this.bvalue = 'rgb('+slider.value+', '+ slider.value +', '+ slider.value +')';
    this.slvalue = 'rgb('+temp+', '+ temp +', '+ temp +')';
    this.context.drawImage(image, 0, 0, image.width, image.height,
                                  0, 0, this.canvas.width, this.canvas.height);
    setTimeout(() => {
      this.context.drawImage(image, 0, 0, image.width, image.height,
                                  0, 0, this.canvas.width, this.canvas.height);

      this.addEvent(this.canvas,"mouseup", this.mouseuphandler);
      this.addEvent(this.canvas,"click", this.clickhandler);
      this.addEvent(this.canvas,"mousemove", this.mousemovehandler);
      this.addEvent(this.$refs.button,"mousemove", this.mousemovehandler);
      this.addEvent(this.$refs.button0,"mousemove", this.mousemovehandler);
      this.addEvent(this.$refs.button1,"mousemove", this.mousemovehandler);
      this.addEvent(this.$refs.button2,"mousemove", this.mousemovehandler);
    }, 100)
    },
    mousemovehandler(e) {  
      if (this.down && this.isButtonInCanvas(e)) {
        this.clickhandler(e);
      }
    },
    clickhandler(e) {
      if (this.isButtonInCanvas(e)) {
      const position = this.findPos(this.canvas);
      const x = e.pageX - position.x;
      const y = e.pageY - position.y;
      this.x = this.canvas.offsetLeft + x - 20;
      this.y = this.canvas.offsetTop + y - 20;
      const p = this.context.getImageData(x, y, 1, 1).data;
      const hex = "#" + ("000000" + this.rgbToHex(p[0], p[1], p[2])).slice(-6);
      this.hex = hex;
      this.hexB = "#" + ("000000" + this.rgbToHexB(p[0], p[1], p[2])).slice(-6);
      }
    },
    isButtonInCanvas (e) {
      const position = this.findPos(this.canvas);
      const x_ = e.pageX - position.x + this.canvas.offsetLeft - this.x_0;
      const y_ = e.pageY - position.y + this.canvas.offsetTop - this.y_0;
      const distance = Math.sqrt((x_*x_) + (y_*y_))
      return distance <= 350
    },
    findPos(obj){
      let currentLeft = 0;
      let currentTop = 0;
      if (obj.offsetParent){
        do{
          currentLeft += obj.offsetLeft;
          currentTop += obj.offsetTop;
        }while((obj = obj.offsetParent));
        return {x: currentLeft, y: currentTop};
      }
      return undefined;
    },
    rgbToHex(r, g, b){
      return ((r << 16) | (g << 8) | b).toString(16);
    },
    rgbToHexB(r, g, b){
      r = r - (r*(1-this.saturation));
      g = g - (g*(1-this.saturation));
      b = b - (b*(1-this.saturation));
      return ((r << 16) | (g << 8) | b).toString(16);
    },
    OnSliderChange() {
      const slider = document.getElementById("myRange");
      this.saturation = slider.value/255;
      const temp = slider.value;
      this.bvalue = 'rgb('+slider.value+', '+ slider.value +', '+ slider.value +')';
      this.slvalue = 'rgb('+temp+', '+ temp +', '+ temp +')';
      const image = new Image();
      image.src = '/png/color-wheel.png';
      image.style.filter = "brightness("+this.saturation+")";
      const p = this.context.getImageData(this.x - this.canvas.offsetLeft + 20, this.y - this.canvas.offsetTop + 20, 1, 1).data;
      this.hexB = "#" + ("000000" + this.rgbToHexB(p[0], p[1], p[2])).slice(-6);
    },
},
}
</script>

<style>
.colorCode {
  float: right;
  padding: 30px 35% 0 0;
}

.colorCodeFormatText {
  font-size: 18px;
  display: inline-block;
  vertical-align: middle;
  color: rgb(125, 125, 125);
  line-height: 21px;
  margin-right: 10px;
  margin-top: 2px;
  font-family: 'Ropa Sans', 'Ropa Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.colorCodeDisplay {
  background: var(--hexB);
  display: inline-block;
  vertical-align: middle;
  width: 15px;
  height: 33px;
  margin-right: 10px;
  border-radius: 7px;
}

.colorCodeHex {
  display: inline-block;
  vertical-align: middle;
  font-family: 'Ropa Sans', 'Ropa Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: rgb(125, 125, 125);
  width: 106px;
  height: 40px;
  border-radius: 10px;
  border-style: solid;
  border: 2px solid, rgb(125, 125, 125);
  box-sizing: border-box;
}

.mainColorPicker { 
  z-index: 100;
  position: absolute;
  width: 50px;
  height: 50px;
  border-color: white;
  border-width: 2px;
  border-radius: 50%; 
  border-style: solid;
}

.mainColorPicker:active {
  width: 56px;
  height: 56px;
  transition-duration: 0s;

}
.ColorWheelCanvas {
  border-color: black;
  border-width: 5px;
  z-index: 2;
  margin-bottom: 40px;
}

.slidecontainer {
  width: 670px;
}

.slider {
  -webkit-appearance: none;
  width: 670px;
  height: 8px;
  opacity: 1;
  -webkit-transition: .2s;
  background: linear-gradient(90deg, black, white);
  transition: opacity .2s;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  stroke: white;
  border-color: var(--slvalue);
  border-width: 3px;
  border-radius: 50%; 
  cursor: pointer;
  background-color: var(--bvalue);
  filter: drop-shadow(0 4px 20px rgb(0, 0, 0, 0.8)), drop-shadow(0 -4px 20px rgb(0, 0, 0, 0.8));
}

.slider::-moz-range-thumb {
  width: 22px;
  height: 22px;
  stroke: white;
  border-color: var(--slvalue);
  border-width: 3px;
  border-radius: 50%; 
  filter: drop-shadow(0 4px 20px rgb(0, 0, 0, 0.3));
  filter: drop-shadow(0 -4px 20px rgb(0, 0, 0, 0.3));
  cursor: pointer;
  background-color: var(--bvalue);
}
</style>
