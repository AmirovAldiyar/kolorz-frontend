import React, { useEffect } from 'react';
import withStyles from 'react-jss'

const LINEAR_GRADIENT = 'linear-gradient(90deg, black, white);'

const styles = {
    Slider: {
        '-webkit-appearance': 'none',
        width: 670,
        height: 8,
        background: LINEAR_GRADIENT,
        opacity: 1,
        cursor: 'pointer',
        transition: '0.2s',
        '&::-webkit-scrollbar-thumb': {
            '-webkit-appearance': 'none',
            width: 22,
            height: 22,
            stroke: 'white',
            border: {
                color: 'var(--rval)',
                width: 1,
                radius: 11,
            },
            cursor: 'pointer',
            background: 'var(--val)' || 'black',
            filter: 'drop-shadow(0 4px 20px rgb(0, 0, 0, 0.8)), drop-shadow(0 -4px 20px rgb(0, 0, 0, 0.8))',
        },
        '&::-moz-range-thumb': {
            width: 22,
            height: 22,
            stroke: 'white',
            border: {
                color: 'var(--rval)',
                width: 1,
                radius: 11,
            },
            cursor: 'pointer',
            background: {
                color: 'var(--val)' || 'black',
            },
            filter: 'drop-shadow(0 4px 20px rgb(0, 0, 0, 0.8)), drop-shadow(0 -4px 20px rgb(0, 0, 0, 0.8))',
        },
    },
}

const UnstyledSaturationBar = ({classes, updateColorPickers, colorWheel}) => {

    useEffect (() => {
        const saturationBar = (document.getElementById(colorWheel.sb) as HTMLInputElement);
        saturationBar.value = colorWheel.saturation;
        saturationBar.style.setProperty("--val", 'black');
        saturationBar.style.setProperty("--rval", 'black');        
    }, []);

    const changeHandler = () => {
        // saturation bar
        const saturationBar = (document.getElementById(colorWheel.sb) as HTMLInputElement);
        colorWheel.setSaturation(Number(saturationBar.value));
        colorWheel.saturation = Number(saturationBar.value);
        let temp = 255 - Number(saturationBar.value);
        let temps = ('rgb('+temp.toString()+', '+ temp.toString() +', '+ temp.toString() +')');
        temp = Number(saturationBar.value);
        let temps2 = ('rgb('+temp.toString()+', '+ temp.toString() +', '+ temp.toString() +')');
        saturationBar.style.setProperty("--val", temps);
        saturationBar.style.setProperty("--rval", temps2);
        updateColorPickers(colorWheel);
    }

    const clickHandler = () => {
        changeHandler();
    }

    return (
        <>
            <input id={colorWheel.sb} type="range" min="0" max="255" className={classes.Slider} onChange={changeHandler} onClick={clickHandler}/>
        </> 
    );
}

let SaturationBar = withStyles(styles)(UnstyledSaturationBar);
export default SaturationBar;