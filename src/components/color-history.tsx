import React from 'react';
import withStyles from 'react-jss';
import {hexWithSaturation } from './utils/pickersCoordinates.js';

const styles = {
    HistoryDiv: {
        width: 475,
        display: 'flex',
        justifyContent: 'row',
    },
    Color: {
        width: 33,
        height: 33,
        margin: {
            right: 10,
            top: 3,
        },
        border: {
            radius: 10,
            width: 1,
            style: 'solid',
        },
    },
}


const UnstyledHistory = ({classes, ColorWheelParameters, updateColorPickers}) => {

    const clickHandler = function(n) {
        const baseColorPicker = (document.getElementById(ColorWheelParameters.baseColorPicker) as HTMLInputElement)
        baseColorPicker.style.left = ColorWheelParameters.historyColors[n].x;
        baseColorPicker.style.top = ColorWheelParameters.historyColors[n].y;
        baseColorPicker.style.background = hexWithSaturation(ColorWheelParameters.historyColors[n].color, ColorWheelParameters.historyColors[n].sbv);
        ColorWheelParameters.setMode(ColorWheelParameters.historyColors[n].mode);
        ColorWheelParameters.setColorPickerParameters([ColorWheelParameters.historyColors[n]]);
        ColorWheelParameters.setSaturation(ColorWheelParameters.historyColors[n].sbv);
        const SaturationBar = (document.getElementById(ColorWheelParameters.sb) as HTMLInputElement);
        SaturationBar.value = ColorWheelParameters.historyColors[n].sbv;
        ColorWheelParameters.saturation = ColorWheelParameters.historyColors[n].sbv;
        updateColorPickers(ColorWheelParameters);
    };

    const histories = []
    for (let i = 9; i > -1; i--) {
        histories.push(<div id={ColorWheelParameters.id+'history'+i.toString()} key={ColorWheelParameters.id+'history'+i.toString()}  className={classes.Color} onClick={() => clickHandler(i)} style={{background: '#ffffff'}}></div>)
    }   

    return (
    <>
        <div className={classes.HistoryDiv}>
            {histories}
        </div>

    </>
    );

    
}

const ColorHistory = withStyles(styles)(UnstyledHistory);
export default ColorHistory;