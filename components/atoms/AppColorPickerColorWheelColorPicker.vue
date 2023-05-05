<template>
<div>
    <div>
        <input type="button"  
               class="ColorPicker"
               v-bind:key="pickerPosition"
               v-for="pickerPosition in p" 
               :style="{top: pickerPosition[1]+'px', left: pickerPosition[0]+'px', background: pickerPosition[2]}" 
               disabled>
    </div>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
import {
  complementary,
  square,
  triadic,
  isosceles,
  tetradic,
  analagous,
  davidStar,
  monochrome,
    } from '~/utils/pickersCoordinates.js'
import {
  complementary as ucomplementary,
  square as usquare,
  triadic as utriadic,
  isosceles as uisosceles,
  tetradic as utetradic,
  analagous as uanalagous ,
  davidStar as udavidStar,
  monochrome as umonochrome,
    } from '~/utils/utils.js'
const rgbToHexB = (r, g, b, saturation) =>{
      r = r - (r*(1-saturation));
      g = g - (g*(1-saturation));
      b = b - (b*(1-saturation));
      return ((r << 16) | (g << 8) | b).toString(16);
}

export default {
    data () {
        return {
            p: this.p,
            color: this.colors,
        }
    },
    props: {
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        },
        hexB: {
            type: String,
            default: '#000'
        },
        mode: {
            type: String,
            default: 'square'
        },
        x_0: {
            type: Number,
            default: 0
        },
        y_0: {
            type: Number,
            default: 0
        },
        saturation: {
            type: Number,
            default: 0
        },
        recColor: {
            type: String,
            default: '#ffffff'
        }
    },
    watch: {
        hexB(newx, oldx) {
            this.colors = [this.hexB];
            const canvas = document.createElement('canvas');
            canvas.height = 1;
            canvas.width = 1;
            const image = new Image();
            image.src = '/png/color-wheel.png';
            image.style.filter = "brightness("+this.saturation+")";
            if (this.mode === 'complementary') {
                this.p = complementary(this.x-this.x_0+15, this.y-this.y_0+15);
                for (let j = 0; j < this.p.length; j++) {
                    this.p[j][1] = this.p[j][1] + this.y_0 - 15;
                    this.p[j][0] = this.p[j][0] + this.x_0 - 15;
                    canvas.getContext('2d').drawImage(image, this.p[j][0] -70, this.p[j][1]-70, 1, 1, 0, 0, 1, 1);
                    const temp = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
                    this.p[j][2]  = "#" + ("000000" + rgbToHexB(temp[0], temp[1], temp[2], this.saturation)).slice(-6);
                    this.colors.push(this.p[j][2]);
                }
                this.recColors = ucomplementary(this.recColor);
            }
            if (this.mode === 'square') {
                this.p = square(this.x-this.x_0+15, this.y-this.y_0+15);
                for (let j = 0; j < this.p.length; j++) {
                    this.p[j][1] = this.p[j][1] + this.y_0 - 15;
                    this.p[j][0] = this.p[j][0] + this.x_0 - 15;
                    canvas.getContext('2d').drawImage(image, this.p[j][0] -70, this.p[j][1]-70, 1, 1, 0, 0, 1, 1);
                    const temp = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
                    this.p[j][2]  = "#" + ("000000" + rgbToHexB(temp[0], temp[1], temp[2], this.saturation)).slice(-6);
                    this.colors.push(this.p[j][2]);
                }
                this.recColors = usquare(this.recColor);
            }
            if (this.mode === 'triadic') {
                this.p = triadic(this.x-this.x_0+15, this.y-this.y_0+15);
                for (let j = 0; j < this.p.length; j++) {
                    this.p[j][1] = this.p[j][1] + this.y_0 - 15;
                    this.p[j][0] = this.p[j][0] + this.x_0 - 15;
                    canvas.getContext('2d').drawImage(image, this.p[j][0] -70, this.p[j][1]-70, 1, 1, 0, 0, 1, 1);
                    const temp = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
                    this.p[j][2]  = "#" + ("000000" + rgbToHexB(temp[0], temp[1], temp[2], this.saturation)).slice(-6);
                    this.colors.push(this.p[j][2]);
                }
                this.recColors = utriadic(this.recColor);
            }
            if (this.mode === 'isosceles') {
                this.p = isosceles(this.x-this.x_0+15, this.y-this.y_0+15);
                for (let j = 0; j < this.p.length; j++) {
                    this.p[j][1] = this.p[j][1] + this.y_0 - 15;
                    this.p[j][0] = this.p[j][0] + this.x_0 - 15;
                    canvas.getContext('2d').drawImage(image, this.p[j][0] -70, this.p[j][1]-70, 1, 1, 0, 0, 1, 1);
                    const temp = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
                    this.p[j][2]  = "#" + ("000000" + rgbToHexB(temp[0], temp[1], temp[2], this.saturation)).slice(-6);
                    this.colors.push(this.p[j][2]);
                }
                this.recColors = uisosceles(this.recColor);
            }
            if (this.mode === 'tetradic') {
                this.p = tetradic(this.x-this.x_0+15, this.y-this.y_0+15);
                for (let j = 0; j < this.p.length; j++) {
                    this.p[j][1] = this.p[j][1] + this.y_0 - 15;
                    this.p[j][0] = this.p[j][0] + this.x_0 - 15;
                    canvas.getContext('2d').drawImage(image, this.p[j][0] -70, this.p[j][1]-70, 1, 1, 0, 0, 1, 1);
                    const temp = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
                    this.p[j][2]  = "#" + ("000000" + rgbToHexB(temp[0], temp[1], temp[2], this.saturation)).slice(-6);
                    this.colors.push(this.p[j][2]);
                }
                this.recColors = utetradic(this.recColor);
            }
            if (this.mode === 'analogous') {
                this.p = analagous(this.x-this.x_0+15, this.y-this.y_0+15);
                for (let j = 0; j < this.p.length; j++) {
                    this.p[j][1] = this.p[j][1] + this.y_0 - 15;
                    this.p[j][0] = this.p[j][0] + this.x_0 - 15;
                    canvas.getContext('2d').drawImage(image, this.p[j][0] -70, this.p[j][1]-70, 1, 1, 0, 0, 1, 1);
                    const temp = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
                    this.p[j][2]  = "#" + ("000000" + rgbToHexB(temp[0], temp[1], temp[2], this.saturation)).slice(-6);
                    this.colors.push(this.p[j][2]);
                }
                this.recColors = uanalagous(this.recColor);
            }
            if (this.mode === 'david star') {
                this.p = davidStar(this.x-this.x_0+15, this.y-this.y_0+15);
                for (let j = 0; j < this.p.length; j++) {
                    this.p[j][1] = this.p[j][1] + this.y_0 - 15;
                    this.p[j][0] = this.p[j][0] + this.x_0 - 15;
                    canvas.getContext('2d').drawImage(image, this.p[j][0] -70, this.p[j][1]-70, 1, 1, 0, 0, 1, 1);
                    const temp = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
                    this.p[j][2]  = "#" + ("000000" + rgbToHexB(temp[0], temp[1], temp[2], this.saturation)).slice(-6);
                    this.colors.push(this.p[j][2]);
                }
                this.recColors = udavidStar(this.recColor);
            }
            if (this.mode === 'monochram') {
                this.p = monochrome(this.x-this.x_0+15, this.y-this.y_0+15);
                for (let j = 0; j < this.p.length; j++) {
                    this.p[j][1] = this.p[j][1] + this.y_0 - 15;
                    this.p[j][0] = this.p[j][0] + this.x_0 - 15;
                    canvas.getContext('2d').drawImage(image, this.p[j][0] -70, this.p[j][1]-70, 1, 1, 0, 0, 1, 1);
                    const temp = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;
                    this.p[j][2]  = "#" + ("000000" + rgbToHexB(temp[0], temp[1], temp[2], this.saturation)).slice(-6);
                    this.colors.push(this.p[j][2]);
                }
                this.recColors = umonochrome(this.recColor);
            }
            this.changeAllColors(this.colors);
            this.changeRecColors(this.recColors);
        }
    },
    methods: {
        ...mapMutations({changeAllColors: 'colors/changeAllColors', changeRecColors: 'colors/changeRecColors'}),
    }
}
</script>

<style>
.ColorPicker { 
  z-index: 1;
  position: absolute;
  width: 41px;
  height: 41px;
  border-color: white;
  border-width: 2px;
  border-radius: 50%; 
  border-style: solid;
}
</style>