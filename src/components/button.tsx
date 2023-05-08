import React from 'react';
import withStyles from 'react-jss';

const styles = {
    '@import': 'url(https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap)',
    DonateButton: {
        width: 166,
        height: 54,
        margin: {
            top: 17,
        },
        box: {
            shadow: '-4px 4px 15px rgba(0, 0, 0, 0.25)',
        },
        border: {
            radius: 70,
            width: 0,
        },
        font: {
            family: 'Ropa Sans',
            size: 17,
        },
        cursor: 'pointer',
    },
}

const UnstyledButton = ({ classes, id, type, value, color, textColor, ButtonClick }) => {

    return (
        <>
            <button className={classes.DonateButton} id={id} type={type} style={{ backgroundColor: (color != '#FFF') ? color : '#000000', color: textColor }} onClick={ButtonClick}><slot />{value}</button>
        </>
    );
}

const Button = withStyles(styles)(UnstyledButton);
export default Button;