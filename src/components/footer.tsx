import React from 'react';
import withStyles from 'react-jss';
import FooterLogo from './img/app-logo.png';
import spotify_icon from './img/icons/Spotify.png';
import google_icon from './img/icons/Google.png';
import pintrest_icon from './img/icons/Pintrest.png';
import git_icon from './img/icons/GitHub.png';
import figma_icon from './img/icons/Figma.png';
import { Link } from 'react-router-dom'

const styles = {
    '@import': 'url(https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap)',
    footer: {
        overflow: 'hidden',
        padding: '20px 10px',
        box: {
            sizing: 'border-box',
        },
        width: '1440px',
        height: 94,
        margin: 'auto', 
        marginTop: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',       
    },
    footerLink: {
        float: 'left',
        color: '#828282',
        textDecoration: 'none',
        margin: 'auto 75px auto 0',
        font: {
            family: 'Ropa Sans',
            style: 'normal',
            weight: 'normal',
            size: 17,
        },
        line: {
            height: 18,
        },
        letter: {
            spacing: '0.1em',
        '&:hover': {
            color: '#424242',
        },
        '&:active': {
            color: '#030303',
        }, 
        },
    },
    LogoContainer: {
        width: '30%',
    },
    footerLogo: {
        width: 120,
        height: 25,
        padding: '30px 0 0 60px',
        },
    footerButtons: {
        width: '30%',
        display: 'flex',
        flex: {
            direction: 'row'
        },
        height: '100%',
        },
}

const UnstyledFooter = ({classes, id}) => {
    return (
    <div className = {classes.footer} id={id}>
        <div className={classes.LogoContainer}>
        <Link className={classes.headerLink} to="/kolorz-art" ><img className = {classes.footerLogo} src = {FooterLogo}/> </Link>
             </div>
        <div className={classes.footerButtons}>
            <Link className={classes.footerLink} to="/kolorz-art" >Home </Link>
            <Link className={classes.footerLink} to="/about" >About </Link>
            <Link className={classes.footerLink} to="/suggestions" >Suggestion </Link>
            </div>
        <div className={classes.footerButtons}>
            <a className={classes.footerLink} href="https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn" target="_blank"> <img src={spotify_icon} alt='spotify icon' />   </a>
            <a className={classes.footerLink} href="#" target="_blank"> <img src={google_icon} alt='google icon' />     </a>
            <a className={classes.footerLink} href="https://www.pinterest.ru/arina031120000/kolorzartcom/" target="_blank"> <img src={pintrest_icon} alt='pintrest_icon' /> </a>
            <a className={classes.footerLink} href="https://bitbucket.org/ease-ln/kolorz.art/src/main/" target="_blank"> <img src={git_icon} alt='git icon' />           </a>
            <a className={classes.footerLink} href="https://www.figma.com/file/F7HSY4zsjMP1WgTpS4U3M8/KOLORZ?node-id=0%3A1" target="_blank"> <img src={figma_icon} alt='figma icon' />       </a>
        </div>
    </div>
    );
}

const footer = withStyles(styles)(UnstyledFooter);
export default footer;