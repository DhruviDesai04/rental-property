import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './Checkboxes.css';


const useStyles = makeStyles({
    root: {
        '&$checked': {
            color: '#303030',
        },
    },
    checked: {},
    wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 0,
        color: '#303030',
    },
    label: {
        fontSize: '14px',
        fontWeight: '500',
        fontFamily: `'Poppins', sans-serif`,
    },
});

const Checkboxes = ({ loc, changeChecked }) => {
    const classes = useStyles();
    const { checked, label, id } = loc;
    return (
        <div className="checkboxes" id="checkboxes">
            <FormControlLabel
                classes={{
                    label: classes.label,
                    root: classes.wrap,
                }}
                control={
                    <Checkbox
                        classes={{
                            checked: classes.checked,
                            root: classes.root,
                        }}
                        size='small'
                        checked={checked}
                        onChange={() => changeChecked(id)}
                        inputProps={{ 'aria-label': 'checkbox with small size' }}
                    />
                }
                label={label}
            />
        </div>
    )
}

export default Checkboxes;