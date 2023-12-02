import React, {Component} from "react";
import { ThemeContext } from "../context/ThemeContext";


class Navbar extends Component {

    //accessing the context in components
    static contextType = ThemeContext;

    state = {  } 
    render() { 
        console.log(this.context);

        //destructuring the context and store the values in variables
        const {isLightTheme, light, dark} = this.context;

        const theme = isLightTheme ? light : dark;



        return (
            <nav style={ { background:theme.ui, color: theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;