import React, {Component} from "react";
import { ThemeContext } from "../context/ThemeContext";

class BookList extends Component {
    static contextType = ThemeContext;
    state = {  } 
    render() {
        const {isLightTheme,Light,dark} = this.context;
        const theme = isLightTheme ? Light : dark;
        return (
            <div className="book-list" style={{background:theme.bg, color: theme.syntax}}>
                <ul>
                    <list style={{background:theme.ui}}>The way of kings</list>
                    <list style={{background:theme.ui}}>The name of the wind</list>
                    <list style={{background:theme.ui}}>The final empire</list>
                </ul>
            </div>

        );
    }
}
 
export default BookList ;