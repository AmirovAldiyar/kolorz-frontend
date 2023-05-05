<template>
  <button v-on="$listeners" :class="`button-container-${type}`" :style="{background: color}">
      <slot/>
  </button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'AppButton',
    props: {
        type: {
            type: String,
            validator(value) {
                return ['colorful', 'black', 'text'].includes(value)
            },
            default: 'black'
        }
    },
    computed: {
        ...mapGetters({primaryColor: 'colors/primaryColor'}),
        color () {
            return this.type === 'black' ? 'black' : (this.type === 'text' ? 'white' : this.primaryColor)
        }
    }
}
</script>

<style scoped>
    .button-container-black {
        width: 166px;
        height: 54px;
        background: black;
        box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.25);
        border-radius: 70px;
        border: none;
        font-size: 20px;
        line-height: 21px;
        letter-spacing: 0.1em;  
        color: white;
        transition: ease-in 0.2s;
        cursor: pointer;
    }
    .button-container-black:hover {
        opacity: 0.85
    }
    .button-container-black:active {
        opacity: 1;
        transform: scale(0.98);
    }
    .button-container-colorful {
        width: 166px;
        height: 54px;
        background: pink;
        box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.25);
        border-radius: 70px;
        border: none;
        font-size: 20px;
        line-height: 21px;
        letter-spacing: 0.1em;  
        color: black;
        transition: ease-in 0.2s;
        cursor: pointer;
        opacity: 0.85
    }
    .button-container-colorful:hover {
        opacity: 1
    }
    .button-container-colorful:active {
        opacity: 1;
        transform: scale(0.99);
    }
</style>