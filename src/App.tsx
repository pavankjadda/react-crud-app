import {Grid} from '@material-ui/core';
import React from 'react';
import './App.scss';
import Employees from './employee/employees';

class App extends React.Component
{
    render()
    {
        return (
            <div className="App">
                <Grid id="content" className="content">
                    <Employees/>
                </Grid>
            </div>
        );
    }
}

export default App;
