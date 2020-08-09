import {Grid} from '@material-ui/core';
import React from 'react';
import './App.scss';
import Employees from './employee/employees';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';

class App extends React.Component
{
    render()
    {
        return (
            <div className="App">
                <Header/>
                <Grid id="content" className="content">
                    <Employees/>
                </Grid>
                <Footer/>
            </div>
        );
    }
}

export default App;
