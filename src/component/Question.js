import React from "react";
import "./Question.css";
import {
    Row, Col,
    Button, Icon,
    Checkbox, Radio
} from 'antd';


export default class Question extends React.Component {

    render() {
        return (
            <div className="Question">
                <Row type="flex" justify="center" align="top">
                    <Col span={8}><img src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.drdriving.ir%2Fimages%2Fazadrah.png&f=1&nofb=1"></img></Col>
                </Row>
                <Row type="flex" justify="center" align="top">
                    <Col span={12}>
                        Sample Question
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="top">
                    <Checkbox.Group style={{ width: '100%' }}>
                        <Col className="choices" span={6} offset={6}>
                            <Checkbox value="A">A</Checkbox>
                        </Col>
                        <Col className="choices" span={6} offset={6} pull={6}>
                            <Checkbox value="A">B</Checkbox>
                        </Col>
                        <Col className="choices" span={6} offset={6}>
                            <Checkbox value="A">C</Checkbox>
                        </Col>
                        <Col className="choices" span={6} offset={6} pull={6}>
                            <Checkbox value="A">D</Checkbox>
                        </Col>
                    </Checkbox.Group>
                </Row>
            </div>
        );
    }
}