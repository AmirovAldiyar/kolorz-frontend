import React, { useEffect, useState } from 'react';
import withStyles from 'react-jss'
import { useSelector } from 'react-redux';
import Button from './button';
import ColorHistory from './color-history';

const styles = ({
    '@import': 'url(https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap)',
    paletteContainer: {
        width: 480,
        height: 850,
        background: '#FFF',
        boxShadow: '4px 4px 30px rgba(0, 0, 0, 0.25)',
        borderRadius: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '40px 40px 55px 40px',
        margin: '0 30px'

    },
    paletteTitle: {
        width: 475,
        fontSize: 60,
        fontFamily: 'Ropa Sans',
        letterSpacing: '0.14em' 
    },
    paletteDivisionLine: {
        width: 475,
        height: 8,
    },
    paletteQuote: {
        fontSize: 15,
        letterSpacing: '10%',
        color: '#9B9797',
        paddingLeft: 10,
    },
    rightText: {
        display: 'grid',
        float: 'right',
        paddingRight: 40,
    },
    quoteAuthor: {
        fontSize: 15,
        lineHeight: 5,
        LetterSpacing: '10%',
        color: '#9B9797',
        paddingLeft: 10,
    },
    paletteCreationDate: {

    },
    paletteColors: {
        width: 470,
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    paletteColor: {
        width: 85,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    paletteSheet: {
        width: 85,
        height: 220,
        borderRadius: 50,
        boxShadow: '0 30px 42px -31px rgba(0, 0, 0, 0.6) inset',
    },
    paletteHex: {
        width: '100%',
        textAling: 200,
        fontSize: 18,
        lineHeight: 5,
        letterSpacing: '0.1em',
        color: '#828282',
    },
    palleteCircle: {
        width: 85,
        height: 85,
        borderRadius: '50%',
        boxShadow: '0 30px 42px -31px rgba(0, 0, 0, 0.6) inset',
    },
    ExportPallete: {
        display: 'flex',
        width: 450,
        justifyContent: 'center',
        flexDirection: 'row',

    },
    ExportButton: {
        display: 'flex',
        width: 450,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 60,

    },
    colorPalletes: {
        width: 1440,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 80,
        justifyContent: 'space-between',
    },
});


const UnstyledColorPallete = ({classes, id, primaryCP, pallet, setpallet, styles_app, isRec}) => {
    const colors = useSelector((state: any) => state.colors.colors)
    const recColors = useSelector((state: any) => state.colors.recColors)
    const [pallets, setPallets] = useState([])

    useEffect (() => {
        setpallet([]);
        
    }, []);
    useEffect(() => {
        let Object_rows = []
        let colorList = colors
        if (isRec) {
            colorList = recColors
        }

        for (let i = 0; i < colorList.length; i++) {
            if (colorList.length == 4) {
            Object_rows.push(
                <div className={classes.paletteColor} style={{ marginLeft: ((100/(colorList.length)).toString) +'%' }} key={colorList[i].color+(isRec ? "111" : "222")}> 
                    <div className={classes.paletteSheet} style={{background:  colorList[i].color}}></div>
                    <div className={classes.paletteHex}>{ colorList[i].color}</div>
                    <div className={classes.palleteCircle} style={{background: 'linear-gradient(45deg, '+ colorList[i].color+', ' + colorList[(i+1)%colorList.length].color + ')'}}></div>
                </div>
            );
            } else {
                Object_rows.push(
                    <div className={classes.paletteColor} style={{ marginLeft: ((100/(colorList.length)).toString) +'%' }} key={colorList[i].color+(isRec ? "111" : "222")}> 
                        <div className={classes.paletteSheet} style={{background:  colorList[i].color}}></div>
                        <div className={classes.paletteHex}>{ colorList[i].color}</div>
                    </div>
                );           
            }
        }
        
        if (colorList.length < 3 && colorList.length > 0) {
            Object_rows.push(
                <div className={classes.paletteColor} key={colorList[0].color+(isRec ? "1" : "2")}>
                    <div className={classes.paletteSheet} style={{background: 'linear-gradient(180deg, '+ colorList[0].color +', ' + colorList[1].color + ')'}}></div>
                    <div className={classes.paletteHex}>Gradient</div>
                </div>
            );
        }
        setPallets([])
        setPallets(Object_rows)
        
    }, [colors])

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function ExportColotPallete() {
        let cssastext = ''
        for (let i = 1; i<document.styleSheets['11'].cssRules.length; i++){
            cssastext = cssastext + document.styleSheets['11'].cssRules[i.toString()].cssText + ' ';
        }
        
        const json = {
                html: (document.getElementById(id) as HTMLDivElement).outerHTML,
                css: cssastext,
                }
        
        // Retrieve your api_id and api_key from the Dashboard. https://htmlcsstoimage.com/dashboard
        const username = "fb5204b5-5106-4f28-9913-3668e4199361"
        const password = "2f60972d-0826-41e4-a83d-e416e358dde1"
          
          const options = {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + btoa(username + ":" + password)
            }
          }
          
          fetch('https://hcti.io/v1/image', options)
            .then(res => {
              if (res.ok) {
                return res.json();
              } else {
                return Promise.reject(res.status);
              }
            })
            .then(data => {
              // Image URL is available here    
              document.location.href=data.url;
            })
            .catch(err => console.error(err));
        
    }

    return (
    <div id={id} className={classes.paletteContainer}>
        <div className={classes.paletteTitle}><b>Color Palette</b></div>
        <div style={{background: 'linear-gradient(90deg, '+primaryCP.color+', white )'}} className={classes.paletteDivisionLine}></div>
        <div className={classes.paletteQuote}>
            <div className={classes.quoteText}>IT’S OK TO SHOW ALL YOUR COLORS.</div>
            <div className={classes.rightText}>
                <div className={classes.quoteAuthor}>Luis Guzman </div>
                <div className={classes.paletteCreationDate}> Created: {months[new Date().getMonth()]  +' '+ new Date().getDate() +'/'+ new Date().getFullYear()}</div>
            </div>
        </div>
        <div style={{background: 'linear-gradient(90deg, '+primaryCP.color+', white )'}} className={classes.paletteDivisionLine}></div>
        <div className={classes.paletteColors}>
            {pallets}
        </div>
        <div className={classes.ExportPallete}>
                <Button id='ExportPallete' type="button" value='Export' color='black' textColor='white' ButtonClick={ExportColotPallete}></Button>
            </div>
        <div></div>
    </div> 
    );
}




const ColorPallete = withStyles(styles)(UnstyledColorPallete);
export default ColorPallete