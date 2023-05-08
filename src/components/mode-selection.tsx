import React from 'react';
import withStyles from 'react-jss';
import ModeCard from './mode-card';

const styles = {
    SelectMode: {
        width: 475,
        height: 230,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
    },

}

const UnstyledSelectMode = ({classes, forModeChange, setMode, updateColorPickers}) => {

    var Object_rows = [];
    for (let i = 0; i < 8; i++) {
        Object_rows.push(<ModeCard num={i} key={i} forModeChange={forModeChange} setMode={setMode} updateColorPickers={updateColorPickers}></ModeCard>);
      }

    return (
    <>
        <div className={classes.SelectMode}>
            {Object_rows}
        </div>

    </>
    );
}

const ModeSelection = withStyles(styles)(UnstyledSelectMode);
export default ModeSelection;