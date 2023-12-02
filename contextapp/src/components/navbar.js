import React, {Component} from "react";
import { ThemeContext } from "../context/ThemeContext";


class Navbar extends Component {

    //accessing the context in components
    static contextType = ThemeContext;

    state = {  } 
    render() { 
        console.log(this.context);
        return (
            <nav>
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