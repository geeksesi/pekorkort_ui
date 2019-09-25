import React from "react";
import "./App.css";
import Options from "./Options";
import Question from "./Question";


export default class App extends React.Component {
    
    render() {
        return (
            <div className="App">
                {/* <Options></Options> */}
                <Question></Question>
            </div>
        );
    }
}