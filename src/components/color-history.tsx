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


const UnstyledHistory = ({classes, forModeChange, setMode, updateColorPickers, setSaturation}) => {

    const clickHandler = function(n) {

        n = n - 1;
        forModeChange.setColorPickerParameters([{color: forModeChange.historyColors[n].color,
            x: forModeChange.historyColors[n].x, 
            y: forModeChange.historyColors[n].y,
            mode: forModeChange.historyColors[n].mode,
            sbv: forModeChange.historyColors[n].sbv}])
        console.log(forModeChange.historyColors[n]);
        (document.getElementById(forModeChange.baseColorPicker) as HTMLInputElement).style.left = forModeChange.historyColors[n].x;
        (document.getElementById(forModeChange.baseColorPicker) as HTMLInputElement).style.top  = forModeChange.historyColors[n].y;
        (document.getElementById(forModeChange.baseColorPicker) as HTMLInputElement).style.background = hexWithSaturation(forModeChange.historyColors[n].color, forModeChange.historyColors[n].sbv/255);
        
        forModeChange.saturation = forModeChange.historyColors[n].sbv;

        forModeChange.setSaturation(forModeChange.historyColors[n].sbv);

        const SaturationBar = (document.getElementById(forModeChange.sb) as HTMLInputElement);
        SaturationBar.value = forModeChange.historyColors[n].sbv;
        setMode(forModeChange.historyColors[n].mode)
        setSaturation(forModeChange.historyColors[n].sbv)

        forModeChange.mode = forModeChange.historyColors[n].mode;
        updateColorPickers(forModeChange);
    };

    const histories = []
    for (let i = 9; i > -1; i--) {
        histories.push(<div id={forModeChange.id+'history'+i.toString()} key={forModeChange.id+'history'+i.toString()}  className={classes.Color} onClick={() => clickHandler(i)} style={{background: '#ffffff'}}></div>)
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