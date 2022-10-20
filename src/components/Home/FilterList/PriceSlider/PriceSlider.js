import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import './PriceSlider.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
      },
      thumb: {
        color: '#303030',
      },
      rail: {
        color: `303030`,
      },
      track: {
        color: '#303030',
      },
  });

const PriceSlider = ({ value, changePrice }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Slider
          value={value}
          onChange={changePrice}
          valueLabelDisplay='on'
          min={1000}
          max={10000}
          classes={{
            thumb: classes.thumb,
            rail: classes.rail,
            track: classes.track,
          }}
        />
      </div>
    )
}

export default PriceSlider;