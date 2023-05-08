import React from 'react';
import withStyles from 'react-jss';
import Input from '../components/input'
import Form from '../components/form'
import Button from '../components/button'
import Textarea from '../components/textarea'
import * as $ from "jquery";

const styles = {
    '@import': 'url(https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap)',
    container1: {
        width: '1440px',
        minHeight: '600px', 
        margin: 'auto',
    },
    leftUpperBackground: {
        position: 'absolute',
        top: 0,
        width: 466,
        height: 517,
        opacity: 0.7,
        zIndex: -1,
    },
    donateText: {
        width: '400px',
        height: '100px',
        marginLeft: '50px',
        marginTop: '-100px',
    },
    title: {
        font: {
            family: 'Ropa Sans',
            size: 60,
        },
        letter: {
            spacing: '0.14em'
        }
    },
    text: {
        color: '#9B9797',
        fontSize: '20px',
        lineHeight: '40px',
        verticalAlign: 'top',
        marginTop: '-30px',
    },
    donateBox: {
        width: '700px',
        height: '500px',
        background: '#FFF',
        boxShadow: '4px 4px 30px rgba(0, 0, 0, 0.25)',
        borderRadius: 30,
        marginLeft: '664px',
        padding: '80px 60px'
    },
    titleForm: {
        fontSize: 40,
        fontFamily: 'Ropa Sans',
        marginBottom: '5px', 
    }
}

const UnstyledDonate = ({classes}) => {

    const onSubmit = async ({ name, msg }) => {
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
              'key': 'mTWeTuOHtEDor_fWGhjQXg',
              'message': {
                'from_email': 'poiuyt171819@gmail.com',
                'to': [
                    {
                      'email': 'arina031120000@gmail.com',
                      'name': 'From Kolorz site',
                      'type': 'to'
                    }
                  ],
                'autotext': 'true',
                'subject': name+' has suggestion!',
                'html': msg,
              }
            }
           }).done(function(response) {
             console.log(response); // if you're into that sorta thing
             alert('Message send');
           });
    }

    return (
        <>
        <div className={classes.container1}>
            <div id='donateLeftUpperBackground' className={classes.leftUpperBackground} style={{background: 'linear-gradient(180deg, #ffa5ea 0%, rgba(196, 196, 196, 0) 100%)', filter: 'brightness(1)'}}></div>            
            <div className={classes.donateText}>
                <h1 className={classes.title}>Suggestions</h1>
                <p className={classes.text}>Support us and our production</p>
            </div>
            <div className={classes.donateBox}>
            <h2 className={classes.titleForm}>Suggestions form</h2>
                <Form onSubmit={onSubmit} defaultValues={{ name: '', msg: '' }}>
                    <Input name="name" label="Name" type="text" rules={{ required: { message: 'Name is required', value: true } }} />  <br/>
                    <Textarea name="msg" label="Message" rules={{ required: { message: 'Message is required', value: true } }}/> <br/>
                    <Button id="suggestionButton" type="submit" value="Send" color="black" textColor="white" ButtonClick={onSubmit} >Submit</Button>
                </Form>
            </div>
        </div>
        </>
    )
}
let Donate = withStyles(styles)(UnstyledDonate);
export default Donate;

