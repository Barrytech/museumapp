import React, { Component } from 'react'
import { MenuItems } from "./MenuItems"
import './Navbar.css'

class Navbar extends Component {
    render() {
        return ( <
            nav className = "NavbarItems" >
            <
            h1 className = "navbar-logo" > Museum < /h1>  <
            div className = "menu-icon" >

            <
            /div>  <
            ul > {
                MenuItems.map((item, index) => {
                    return ( <
                        li key = { index } >
                        <
                        a className = { item.cName }
                        href = { item.url } > { item.titel } <
                        a >

                        <
                        /li > 
                    )
                })
            }

            <
            /ul> < /
            nav >
        )
    }
}

export default from Navbar