import React from 'react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import TextField from '@mui/material/TextField';

function DatePicker(props){

    return(
    <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
        label="Date"
        name="date"
        inputFormat="dd/MM/yyyy"
        value={props.selectedDate}
        onChange={date => props.setDate(date)}
        renderInput={(params) => <TextField {...params} />}
        />
    </LocalizationProvider>
    )
};
    export default DatePicker;