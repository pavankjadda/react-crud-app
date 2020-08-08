import {Grid} from '@material-ui/core';
import React from 'react';
import './App.scss';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';

function App()
{
    return (
        <div className="App">
            <Header/>
            <Grid id="content" className="content">

            </Grid>
            <Footer/>
        </div>
    );
}

export default App;
