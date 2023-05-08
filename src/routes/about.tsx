import React from 'react';
import withStyles from 'react-jss';
import Chart from 'src/components/chart';

const styles = {
    '@import': 'url(https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap)',
    container1: {
        width: '1440px',
        minHeight: '750px', 
        margin: 'auto',
    },
    aboutTitle: {
        font: {
            family: 'Ropa Sans',
            size: 60,
        },
        line: {
            height: 100,
        },
        letter: {
            spacing: '0.14em'
        },
        paddingLeft: '664px',
        paddingTop: '150px',
    },
    aboutText: {
        width: '800px',
        color: '#9B9797',
        fontSize: '20px',
        lineHeight: '40px',
        verticalAlign: 'top',
        letterSpacing: '20%',
        paddingLeft: '664px',
        paddingTop: '20px',

    },
    leftUpperBackground: {
        position: 'absolute',
        display: 'inline-block',
        top: 0,
        width: 466,
        height: 800,
        opacity: 0.7,
        zIndex: -1,
    },
}

const UnstyledAbout = ({classes}) => {
    return (
        <>
        <div className={classes.container1}>
            <div id='donateLeftUpperBackground' className={classes.leftUpperBackground} style={{background: 'linear-gradient(180deg, #ffa5ea 0%, rgba(196, 196, 196, 0) 100%)', filter: 'brightness(1)'}}></div>            
            <h1 className={classes.aboutTitle}>About  us</h1>
            <p className={classes.aboutText}>We are just three programmers who knows the struggling of picking a harmonic color pallette, so we prepared this incredible yet simple tool for you, whoever you are: an artist or designer, or if you just beginning to dive deep into color theory - this place is for you! Our tool is simple to use and intuitively understandable, and variation of color schemes gives a great deal of different balanced color pallettes to export. </p>
            <br/>
            <br/>
            <br/>
            <Chart></Chart>
        </div>
        </>
    )
}
let About = withStyles(styles)(UnstyledAbout);
export default About;

