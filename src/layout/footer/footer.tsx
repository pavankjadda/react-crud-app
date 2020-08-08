import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import "./footer.scss";


class Footer extends React.Component
{
    constructor(props: Readonly<{}>)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <AppBar position="static" className="appBar">
                    <Toolbar>
                        <Typography color="inherit">
                            Footer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


export default Footer;
