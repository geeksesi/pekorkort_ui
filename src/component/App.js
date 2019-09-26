import React from "react";
import "./App.css";
import Options from "../container/OptionContainer";
import Question from "../container/QuestionContainer";

export default class App extends React.Component {
    
    render() {
        return (
            <div className="App">
                <Options></Options>
                {/* <Question></Question> */}
            </div>
        );
    }
}