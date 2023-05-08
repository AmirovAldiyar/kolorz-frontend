import React from 'react';
import withStyles from 'react-jss'


const styles = {
    ColorPicker:{
        top: 'var(--x)' || 490,
        left: 'var(--y)' || 490,
        position: 'absolute',
        width: 40,
        height: 40,
        background: {
            color: 'white',
        },
        border: {
            width: 1,
            color: 'white',
            radius: 20,
            style: 'solid',
        },
        zIndex: 1,
        '&:hover': {
            width: 45,
            height: 45,
            border: {
                width: 1,
                color: 'white',
                radius: 25,
                style: 'solid',
            }
        },
    }
}

const UnstyledColorPicker = ({classes, id, clickHandler, style}) => {

    return (
    <>
        <input type='button' id={id} className={classes.ColorPicker} onClick={clickHandler} style={style} defaultValue=""></input>
    </>
    );
}

const ColorPicker = withStyles(styles)(UnstyledColorPicker);
export default ColorPicker;