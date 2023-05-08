import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import store from './app/store'
import { Provider } from 'react-redux'

const Ids = {
  leftBackground: 'LeftBackground',
  donateButton: 'DonateButton',
  colorWheel: 'ColorWheel',
  selectMode: 'SelectMode',
  exportButton: 'ExportButton',
  colorPalleteContainer: 'colorPalleteContainer',
  colorPallete: 'ColorPallete',
  recColorPallete: 'recColorPallete',
}


function App() {
  return (
    <Provider store={store}>
      <div>
      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
      <BrowserRouter>
        <Header id="header" DoneteButtonId={Ids.donateButton} Ids={Ids}></Header>
        <Footer id="footer"> </Footer>
      </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
