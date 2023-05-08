import React, { useState, createContext, useReducer } from 'react';
import ColorWheel from '../components/color-wheel';
import withStyles from 'react-jss';
import ModeSelect from '../components/mode-selection';
import ColorHistory from '../components/color-history';
import ColorPalette from '../components/color-pallete';
import Button from '../components/button';
import { colorListForSelectedMode, 
         hexWithSaturation } from '../components/utils/pickersCoordinates.js';
import { setColors, setRecColors } from '../features/colors/colorsSlice'
import { useDispatch } from 'react-redux';

export const GlobalContext = createContext([])

const styles = {
    '@import': 'url(https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap)',
    container1: {
        width: '1440px',
        height: '100%', 
        margin: 'auto',
    },
    leftUpperBackground: {
        position: 'absolute',
        top: 0,
        width: 466,
        height: 517,
        opacity: 0.7,
        zIndex: -1,
    },
    header: {
        width: '100%',
    },
    main: {
        width: '100%',
        box: {
            sizing: 'border-box'
        },
        margin: {
            left: 45,
            right: 45
        },
        display: 'flex',
        flex: {
            direction: 'row',
        }, 
    },
    modeSelect: {
        margin: {
            top: 70,
            right: 150,
            left: 45,
        },
        display: 'flex',
        width: 530,
        height: 800,
        flex: {
            direction: 'column'
        },
      }, 
    creativation: {
        font: {
            family: 'Ropa Sans',
            size: 60,
        },
        line: {
            height: 64,
        },
        letter: {
            spacing: '0.14em'
        },
    },
    formula: {
        font: {
            family: 'Ropa Sans',
            size: 15,
        },
        line: {
            height: 16,
        },
        letter: {
            spacing: '0.1em'
        },
        color: '#9B9797',
    },
    modeSelectTitle: {
        width: '100%',
        font: {
            family: 'Ropa Sans',
            size: 20
        },
        marginLeft: 20,
        letter: {
            spacing: '0.1em'
        },
        margin: '80px 0 20px 22px',
    },
    historyTitle: {
        width: '100%',
        fontSize: 16,
        letter: {
            spacing: '0.1em'
        },
        margin: '100px 0 20px 22px',
    },
    colorChange: {
        display: 'flex',
        width: '100%',
        justify: {
            content: 'space-between'
        }
    },
    colorWheel: {
        width: 700,
        height: 700,
    },
    palleteContainer: {
        width: '100vw',
        position: 'relative',
        left: '0px',
        // margin: 'auto',
        MinHeight: 10,
        display: 'flex',
        justifyContent: 'center',
    }
}

const UnstyledApp = ({classes, Ids}) => {

    const [mode, setMode] = useState('complementary');
    const [saturation, setSaturation] = useState(255);
    const [colorPickerParameters, setColorPickerParameters] = useState([{color: '#FFFFFF', x: '340px', y: '330px', mode: mode, sbv: saturation}]);
    const [colorPickerElements, setColorPickerElements] = useState([]);
    const [historyColors, addHistoryColor] = useState([]);
    const [pallet, setpallet] = useState([]);
    const [recPallet, setrecPallet] = useState([]);
    const [offsetLeft, setoffsetLeft] = useState(0);
    const [offoffsetTop, setoffsetTop] = useState(0);
    const dispatch = useDispatch()

    const ColorWheelParameters = {
        id: Ids.colorWheel,
        height: 600,
        width: 600,
        offsetLeft: offsetLeft,
        setoffsetLeft: setoffsetLeft,
        offsetTop: offoffsetTop,
        setoffsetTop: setoffsetTop,
        colorPickerParameters: colorPickerParameters,
        setColorPickerParameters: setColorPickerParameters,
        colorPickerElements: colorPickerElements,
        setColorPickerElements: setColorPickerElements,
        mode: mode,
        setMode: setMode,
        saturation: saturation,
        setSaturation: setSaturation,
        baseColorPicker: Ids.colorWheel+'baseColorPicker',
        sb: Ids.colorWheel+'sb',
        colorWheelContainer: Ids.colorWheel +'Container',
        historyColors: historyColors,
    }

    function updateColorPickers(ColorWheelParameters) {
        let cpl = (document.getElementById(ColorWheelParameters.baseColorPicker) as HTMLInputElement);
        let canvas = (document.getElementById(ColorWheelParameters.id) as HTMLCanvasElement);
        let canvas_div = (document.getElementById(ColorWheelParameters.colorWheelContainer) as HTMLDivElement);
        let p = colorListForSelectedMode(ColorWheelParameters.mode, cpl.style.left.slice(0,-2), cpl.style.top.slice(0,-2), ColorWheelParameters.saturation/255, canvas, canvas_div);
        for (let i of ColorWheelParameters.colorPickerElements){
            (document.getElementById(i['props']['id']) as HTMLInputElement).style.visibility = 'hidden';
         }
        const length = p.length;
        for (let i = 0; i < length; i++){
            cpl = (document.getElementById(ColorWheelParameters.colorPickerElements[i]['props']['id']) as HTMLInputElement);
            cpl.style.visibility = 'visible';
            cpl.style.left = (p[i].x).toString() + 'px';
            cpl.style.top = (p[i].y).toString() + 'px';
            cpl.style.background = p[i].color;
        }
      }

    function PalleteCreator(ColorWheelParameters, primaryColorPicker, moded, forRec: boolean):void  {
        let p = [];
        let Object_rows = [];

        let canvas = (document.getElementById(ColorWheelParameters.id) as HTMLCanvasElement);
        const canvas_div = (document.getElementById(ColorWheelParameters.colorWheelContainer) as HTMLDivElement);

        let x = Number((primaryColorPicker.x).slice(0,-2));
        let y = Number((primaryColorPicker.y).slice(0,-2));

        if (x < canvas_div.offsetLeft || y < canvas_div.offsetTop) {
            x = Number(x + canvas_div.offsetLeft);
            y = Number(y + canvas_div.offsetTop);
        }

        p = colorListForSelectedMode(moded, x, y, primaryColorPicker.sbv/255, canvas, canvas_div);
        primaryColorPicker.color = (hexWithSaturation(primaryColorPicker.color, primaryColorPicker.sbv/255));
        let allColors = [primaryColorPicker, ...p]
        if (forRec) {
            dispatch(setRecColors(allColors))
        }
        else {
            dispatch(setColors(allColors))
        }
    }

    function ExportButtonClickHandler( ElementIDs, setPallet, primaryColorPicker, modex,
                                       RecElementIDs, setRecPallet, primaryRecColorPicker):void  
    {
        const colorPalleteContainer = (document.getElementById(Ids.colorPalleteContainer) as HTMLDListElement);
        colorPalleteContainer.style.display = 'flex';
        setPallet([]);
        setRecPallet([]);
        // Base pallete
        PalleteCreator(ElementIDs, primaryColorPicker, modex, false);
        // Recommended pallete
        PalleteCreator(RecElementIDs, primaryRecColorPicker, modex, true);
    }

    return (
        <>
        <div className={classes.container1}>
            <div id={Ids.leftBackground} className={classes.leftUpperBackground} style={{background: 'linear-gradient(180deg, '+colorPickerParameters[0].color+' 0%, rgba(196, 196, 196, 0) 100%)', filter: 'brightness('+colorPickerParameters[0].sbv/255+')'}}></div>            
            <div className={classes.main}>
                <ColorWheel colorWheel = {ColorWheelParameters} updateColorPickers={updateColorPickers} addHistoryColor={addHistoryColor}></ColorWheel>
                <div className={classes.modeSelect}>
                    <div className={classes.creativation}><b>CREATIVATION</b></div>
                    <div className={classes.formula}>Creativity + Inspiration</div>
                    <div className={classes.modeSelectTitle}>COLOR SCHEME</div>
                    <ModeSelect forModeChange = {ColorWheelParameters}
                                setMode={setMode}
                                updateColorPickers = {updateColorPickers}
                                ></ModeSelect>
                    <div className={classes.modeSelectTitle}>HISTORY</div>
                    <ColorHistory ColorWheelParameters={ColorWheelParameters}
                                  updateColorPickers={updateColorPickers}></ColorHistory>
                    <div className={classes.ExportButton}>
                        <Button id='ExportButton' type="button" value='Export' color='black' textColor='white' ButtonClick={ () => {ExportButtonClickHandler(
                                       ColorWheelParameters, setpallet, {color: ColorWheelParameters.colorPickerParameters[0].color, x: ColorWheelParameters.colorPickerParameters[0].x, y: ColorWheelParameters.colorPickerParameters[0].y, mode:ColorWheelParameters.mode , sbv: ColorWheelParameters.saturation}, ColorWheelParameters.mode,
                                       ColorWheelParameters, setrecPallet, {color: "#8177ff", x: (ColorWheelParameters.offsetLeft + 400).toString()+"px", y: (ColorWheelParameters.offsetTop + 550).toString()+"px", mode: colorPickerParameters[0].mode, sbv: colorPickerParameters[0].sbv}) }}></Button>
                    </div>

                </div>
            </div>
        </div>
        <div className={classes.palleteContainer} style= {{background: 'linear-gradient(180deg, white, ' + colorPickerParameters[0].color + '80 40%, white)'}}>
                <div className={classes.colorPalletes} id={Ids.colorPalleteContainer} style={{display: 'none'}}>
                        <ColorPalette id = {Ids.colorPallete}
                                    primaryCP={colorPickerParameters[0]}    
                                    pallet={pallet}   
                                    setpallet = {setpallet}
                                    styles_app={document.styleSheets} 
                                    isRec={false}
                                    ></ColorPalette>
                        <ColorPalette id = {Ids.recColorPallete}
                                    primaryCP={{color: "#8177ff", x: (ColorWheelParameters.offsetLeft + 600).toString()+"px", y: (ColorWheelParameters.offsetTop + 750).toString()+"px", mode: colorPickerParameters[0].mode, sbv: colorPickerParameters[0].sbv}}    
                                    pallet={recPallet}   
                                    setpallet = {setrecPallet} 
                                    styles_app={document.styleSheets}
                                    isRec = {true}
                                    ></ColorPalette>
                    </div>  
        </div>
        </>
    );
}

let App = withStyles(styles)(UnstyledApp);
export default App;

