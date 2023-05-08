import React from 'react';
import withStyles from 'react-jss';
import HeaderLogo from './img/app-logo.png';
import Button from './button';
import { Switch, Route, Link } from 'react-router-dom'
import Home from '../routes/main'
import Suggestions from '../routes/suggestions'
import About from '../routes/about'

const styles = {
    '@import': 'url(https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap)',
    header: {
        overflow: 'hidden',
        padding: '50px 50px',
        box: {
            sizing: 'border-box',
        },
        height: '94px',
        width: '1440px',
        margin: 'auto',    
    },
    headerLink: {
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
    headerLogo: {
        padding: '0 0 0 60px',
        },
    headerButtons: {
            float: 'right',
            display: 'flex',
            flex: {
                direction: 'row'
            },
            height: '100%',
        },
    
}

const UnstyledHeader = ({classes, id, DoneteButtonId, Ids}) => {

    const clickHandler = () => {
        console.log('Hi from header component :)');
    }

    return (
        <>
        <div className = {classes.header} id={id}>
            <Link className={classes.headerLink} to="/kolorz-art" ><img className = {classes.headerLogo} src = {HeaderLogo}/> </Link>

            <div className={classes.headerButtons}>
            <div>
                <Link className={classes.headerLink} to="/kolorz-art" >Home </Link>
                <Link className={classes.headerLink} to="/about" >About </Link>
                <Link className={classes.headerLink} to="/suggestions" ><Button id={DoneteButtonId} type="button" value="Suggestion" color="black" textColor='white' ButtonClick={clickHandler}></Button></Link>
            </div>
            </div>
        </div>
        <Switch>
            <Route exact path="/kolorz-art">
                <Home Ids={Ids}/>
            </Route>
            <Route path="/suggestions">
                <Suggestions />
            </Route>
            <Route>
                <About />
            </Route>
        </Switch>
        </>
    
    );
}

const Header = withStyles(styles)(UnstyledHeader);
export default Header;