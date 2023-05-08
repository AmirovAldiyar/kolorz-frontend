import React from 'react';
import withStyles from 'react-jss';
import m1 from './img/svg/square.svg';
import m2 from './img/svg/analogous.svg';
import m3 from './img/svg/complementary.svg';
import m4 from './img/svg/davidstar.svg';
import m5 from './img/svg/isosceles.svg';
import m6 from './img/svg/monochram.svg';
import m7 from './img/svg/tetradic.svg';
import m8 from './img/svg/triadic.svg';

const styles = {
    '@import': 'url(https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap)',
    ModeCard: {
        width: 230,
        height: 50,
        border: {
            width: 2,
            style: 'solid',
            color: '#F1F1F1',
            radius: 7,
        },
        alingItem: 'center',
        boxSizing: 'border-box',
        background: {
            color: 'white',
        },
        transition: 'ease-in 0.2s',
        display: 'flex',
        '&:hover': {
            background: {
                color: 'rgba(0,0,0,0.05)',
            },
        },
        '&:active': {
            background: {
                color: 'rgba(0,0,0,0.1)',
        }
        }
    },
    ModeIcon: {
        width: 40,
        height: 40,    
    },
    ModeName: {
        margin: {
            left: 20,
            top: 13,
        },
        textTransform: 'uppercase',
        font: {
            family: 'Ropa Sans',
            size: 15,
        },
        color: 'rgba(0, 0, 0, 0.8)',
    }
}


const UnstyledModeCard = ({classes, num, forModeChange, setMode, updateColorPickers}) => {

    const objects = [
        {
          name: 'square',
          icon: m1,
        },
        {
            name: 'analogous',
            icon: m2,
        },
        {
            name: 'complementary',
            icon: m3,
        },
        {
            name: 'davidstar',
            icon: m4,
        },
        {
            name: 'isosceles',
            icon: m5
        },
        {
            name: 'monochram',
            icon: m6
        },
        {
            name: 'tetradic',
            icon: m7
        },
        {
            name: 'triadic',
            icon: m8
        }
    ]

    const selectMode = () => {
        setMode(objects[num].name);
        forModeChange.mode = objects[num].name;
        updateColorPickers(forModeChange);


        let ColorPickerHistory = [];
        ColorPickerHistory = forModeChange.historyColors;
        ColorPickerHistory.push(forModeChange.colorPickerParameters[0]);
    };

    return (
    <>
        <button className={classes.ModeCard} onClick={selectMode} >
            <img className={classes.ModeIcon} src={ objects[num].icon } alt={ objects[num].name }/>
            <span className={classes.ModeName}> { objects[num].name } </span>
        </button>
    </>
    );
}

const ModeCard = withStyles(styles)(UnstyledModeCard);
export default ModeCard;