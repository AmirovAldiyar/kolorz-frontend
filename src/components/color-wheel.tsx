import React, { MouseEvent, useEffect, useState } from 'react';
import withStyles from 'react-jss'
import ColorPicker from './color-picker';
import ColorWheelImg from './img/colorWheel.png';
import SaturationBar from './saturation-bar';
import ColorHex from './color-hex';
import { takeColorFromWheel,
         hexWithSaturation } from './utils/pickersCoordinates.js';

const UnstyledColorWheel = ({ classes, colorWheel, updateColorPickers, addHistoryColor}) => {
    
    const [isDown, setIsDown] = useState(0);

    useEffect(() => {
        const canvas = document.getElementById(colorWheel.id);
        const ctx = (canvas as HTMLCanvasElement).getContext('2d');
        const image = new Image();
        image.src = ColorWheelImg;
        image.onload = () => {
            ctx.drawImage(image, 5, 5, image.width, image.height, -1, -1, 305, 155);
        };
        colorWheel.offsetLeft = canvas.offsetLeft;
        colorWheel.setoffsetLeft(canvas.offsetLeft);
        colorWheel.offsetTop = canvas.offsetTop;
        colorWheel.setoffsetTop(canvas.offsetTop);


        let ColorPickerElements = [];
        let ColorPickerParameters = [];
        let ColorPickerHistory = [];
    
        let baseColorPicker = (document.getElementById(colorWheel.baseColorPicker) as HTMLInputElement)
        baseColorPicker.style.left = (340 + colorWheel.offsetLeft).toString() + 'px';
        baseColorPicker.style.top  = (330 + colorWheel.offsetTop).toString() + 'px';
        ColorPickerParameters.push(colorWheel.colorPickerParameters[0])
        for (let i = 0; i < 7; i++) {
            ColorPickerParameters.push({color: '#FFFFFF', x: '350px', y: '350px', mode: 'complementary', sbv: 255});
            ColorPickerElements.push(<ColorPicker id={colorWheel.id+'ColorPicker'+i.toString()} key={colorWheel.id+'ColorPicker'+i.toString()} clickHandler={() => {console.log('minus warming')}} style={{visibility: 'hidden'}}></ColorPicker>);} 
        colorWheel.setColorPickerElements( ColorPickerElements );
        colorWheel.setColorPickerParameters( ColorPickerParameters );
        for (let i = 0; i < 11; i++) {
            ColorPickerHistory.push({color: '#FFFFFF', x: (colorWheel.offsetLeft+340-20).toString() + 'px', y: (colorWheel.offsetTop+330-20).toString() + 'px', mode: 'complementary', sbv: 255});
        }
        addHistoryColor(ColorPickerHistory);
    }, []);

    const moveHandler = (e: MouseEvent) => {
        if (isDown === 1) {
            const HALF_OF_COLOR_PICKER_SIZE = 20
            let x = e.pageX - HALF_OF_COLOR_PICKER_SIZE;
            let y = e.pageY - HALF_OF_COLOR_PICKER_SIZE;

            // BaseColorPicker position
            let colorPicker = (document.getElementById(colorWheel.baseColorPicker) as HTMLInputElement);
            let canvas = (document.getElementById(colorWheel.id) as HTMLCanvasElement);

            colorPicker.style.left = (x).toString() + 'px';
            colorPicker.style.top = (y).toString() + 'px';
            updateColorPickers(colorWheel);

            const hex = takeColorFromWheel(x, y, 1, canvas);
            colorPicker.style.background = hex;

            colorWheel.setColorPickerParameters([{color: hex, x:(x).toString() + 'px', y: (y).toString() + 'px', mode: colorWheel.mode, sbv: colorWheel.saturation}]);
        }
    }

    const clickHandler = (isDownState, setIsDownState) => {
        updateColorPickers(colorWheel);
        if (isDownState === 1) {
            setIsDownState(0);
            let ColorPickerHistory = [];
            ColorPickerHistory = colorWheel.historyColors;
            ColorPickerHistory.push(colorWheel.colorPickerParameters[0]);
            addHistoryColor(ColorPickerHistory.slice(ColorPickerHistory.length-11, ColorPickerHistory.length));
    
            for (let i=0; i < 10; i++){
                const hs = (document.getElementById(colorWheel.id+'history'+(9-i).toString()) as HTMLDivElement);
                hs.style.background = hexWithSaturation(colorWheel.historyColors[10-i].color, colorWheel.historyColors[10-i].sbv/255);
            }
        } else {
            setIsDownState(1);
        }
    }

    return (
        <>
            <div id={colorWheel.colorWheelContainer} className={classes.colorWheelContainter}>
                <canvas id={colorWheel.id} className={classes.ColorWheel} style={{filter: 'brightness('+colorWheel.saturation/255+')'}} onClick={() => clickHandler(isDown, setIsDown)} onMouseMoveCapture={moveHandler}> </canvas>
                <ColorPicker id={colorWheel.baseColorPicker} key={colorWheel.baseColorPicker} clickHandler={() => clickHandler(isDown, setIsDown)} style={{background: hexWithSaturation(colorWheel.colorPickerParameters[0].color, colorWheel.saturation/255)}}></ColorPicker>
                {colorWheel.colorPickerElements}
                <SaturationBar updateColorPickers={updateColorPickers} colorWheel={colorWheel}></SaturationBar>
                <ColorHex color={hexWithSaturation(colorWheel.colorPickerParameters[0].color, colorWheel.saturation/255)}></ColorHex>
            </div>
        </>
    );
}

const styles = {
    ColorWheel: {
        width: 680,
        height: 680,
        border: {
            radius: 340,
        },
        filter: 'var(--bright)',
        margin: {
            bottom: 60,
        }
    },
    colorWheelContainter: {
        width: 700,
        height: 820,
        display: 'flex',
        flex: {
            flow: 'column',
        },
        align: {
            items: 'center',
        }
    },
}

const ColorWheel = withStyles(styles)(UnstyledColorWheel);
export default ColorWheel;