import React from "react";
import "./App.css";
import Options from "../container/OptionContainer";
import Question from "../container/QuestionContainer";
import Loading from "./Loading";
import { get_categoies } from '../api/Api';


function Option_check(props) {
    const is_done = props.is_done;
    if (is_done) {
        return <Options categories={props.categories}></Options>
    }
    return <Loading></Loading>
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            set: false
        }
        get_categoies(res => {
            console.log("i'm here")
            this.setState({
                categories: res.slice(),
                set: true
            });
        })
    }

    render() {

        return (
            <div className="App">
                <Option_check is_done={this.state.set} categories={this.state.categories} />
                {/* <Question></Question> */}
            </div>
        );
    }
}