import React , {Component } from 'react';
import './style.css';
// import logo from "../Header/logo";

import { NavLink } from "react-router-dom";

export default class Header extends Component{
    state={

    }
    componentDidMount(){

    }
    render() {
        return (
            <>
            <div className="container-header">
                {/* <img className="logo" src={logo} alt=""/> */}
                <ul className="nav">
                    <li className="nav-bar">
                        <NavLink className="nav-link" to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-bar">
                        <NavLink className="nav-link" to='/all-students'>
                            All Students
                        </NavLink>
                    </li>
                </ul>
            </div>
            </>
        )
    }
}