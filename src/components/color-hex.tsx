import React from 'react';
import withStyles from 'react-jss'

const styles = {
    ColorInfo: {
        height: 40,
        width:  210,
        display: 'flex',
        justify: {
            content: 'row'
        },
        margin: {
            top: 20,
        }
    },
    ColorFormat: {
        width: 38,
        height: 21,
        font: {
            family: 'Ropa Sans' ||'Ropa Sans MT',
        },
        color: 'rgb(125, 125, 125)',
        margin: 10,
        border: {
            radius: 7,
        }
    },
    Color: {
        width: 15,
        height: 33,
        margin: {
            right: 10,
            top: 3,
        },
        border: {
            radius: 10,
            width: 0,
        },
    },
    ColorCode: {
        width: 106,
        height: 36,
        border: {
            radius: 10,
            color: '#F1F1F1',
            width: 2,
            style: 'solid',
        },
        color: '#828282',
        outline: 'none',
        padding: {
            left: 20,
        },
        font: {
            size: 15,
        }
    }
}

const UnstyledColorPicker = ({classes, color}) => {
    return (
    <div className={classes.ColorInfo}> 
        <p className={classes.ColorFormat}>HEX</p>
        <div className={classes.Color} style={{background: color}}></div>
        <input className={classes.ColorCode} value={color} disabled></input>
    </div>
    );
}

const ColorHex = withStyles(styles)(UnstyledColorPicker);
export default ColorHex;