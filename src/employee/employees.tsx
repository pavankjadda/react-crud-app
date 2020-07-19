import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

class Employees extends React.Component
{
    constructor(props: Readonly<{}>)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                Employees
            </div>
        );
    }
}

export default Employees;
