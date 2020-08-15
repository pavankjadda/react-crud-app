import {Grid} from '@material-ui/core';
import React from 'react';
import './App.scss';
import {EmployeeList} from './employee/employee-list';

class App extends React.Component
{
    render()
    {
        return (
            <div className="App">
                <Grid id="content" className="content">
                    <EmployeeList/>
                </Grid>
            </div>
        );
    }
}

export default App;
