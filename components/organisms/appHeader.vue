<template>
  <div class = 'header' >
    <img class = 'header-logo' src = 'png/app-logo.png'> 
    <div class="header-buttons">
      <a class="header-link" href=""> Home</a>
      <a class="header-link" href=""> About</a>
      <a class="header-link" href=""> Contact</a>
      <app-button type='colorful'>Donate</app-button>

    </div>
  </div>
</template>

<script>
import { AppButton } from '../atoms/AppButton.vue'
export default {
  name:'AppHeader'
}
</script>

<style scoped>
.header{
    overflow: hidden;
    padding: 20px 60px;
    box-sizing: border-box;
    width: 100%;
    height: 94px;
    margin: auto;
}
.header-link{
    float: left;
    color: #828282;
    text-align: center;
    margin: auto 75px auto 0;
    text-decoration: none;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    letter-spacing: 0.1em;

}
.header a:hover{
    color: #424242;
}

.header a:active{
    color: #030303;
}
.header-logo{
  padding: 15px 0 0 0 ;
  }
.header-buttons{
    float: right;
    display: flex;
    flex-direction: row;
    height: 100%;
}
.header >>> .button-container-colorful {
  height: 40px;
  width: 120px;
  font-size: 14px;
  margin: auto 0 auto 0;
}
@media (max-width: 1439px) {
  .header-link {
    margin-right: 30px;
  }
  .header {
    padding: 20px 30px;
  }
}
</style>