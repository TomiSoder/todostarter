import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabApp(props){


    return(
            <Tabs value ={props.value} onChange={props.handleNavChange} centered>
                <Tab value="one" label="Home" />
                <Tab value="two" label="Todos" />
            </Tabs>
    );
}

export default TabApp