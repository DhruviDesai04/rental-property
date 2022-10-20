import React from "react";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

import './FilterListToggle.css';

const useStyles = makeStyles({
    root: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },
    toggle: {
      fontFamily: `'Poppins', sans-serif`,
      fontSize: '12px',
      border: '1px solid #303030',
      borderRadius: '8px',
      color: '#303030',
      padding: '7px 15px',
      marginBottom: '10px',
      '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
        borderRadius: '8px',
      },
      '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
        borderRadius: '8px',
        border: '1px solid #303030',
      },
      '&.Mui-selected': {
        borderRadius: '8px',
        background: '#303030',
        color: '#fff',
      },
      '&.MuiToggleButton-root': {
        '&:hover': {
          background: '#303030',
          color: '#fff',
        },
      },
    },
  });

const FilterListToggle = ({ options, value, selectToggle }) => {
    const classes = useStyles();
    return (
        <div className="filter-list-toggle">
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={selectToggle}
                className={classes.root}
            >
                {options.map(({ label, id, value }) => (
                    <ToggleButton className={classes.toggle} key={id} value={value}>
                        {label}
                    </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>
    )
}

export default FilterListToggle;