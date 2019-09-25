import React from "react";
import "./Options.css";
import {
    Row, Col,
    Menu, Dropdown,
    Button, Icon,
    Input, InputNumber,
    Checkbox, Radio
} from 'antd';


const menu = (
    <Menu>
        <Menu.Item>
            1st menu item
        </Menu.Item>
        <Menu.Item>
            2nd menu item
        </Menu.Item>
        <Menu.Item>
            3rd menu item
        </Menu.Item>
    </Menu>
);

export default class Options extends React.Component {

    render() {
        return (
            <div className="Options">
                <Row type="flex" justify="center" align="top">

                    <Col span={6} className="box-new-only">
                        <Checkbox>New question only</Checkbox>
                    </Col>
                    <Col span={6} className="box-random">
                        <Checkbox>Random question</Checkbox>
                    </Col>

                </Row>
                <Row type="flex" justify="center" align="top">

                    <Col span={6} className="box-wrongs">
                        <Checkbox>include my last wrongs</Checkbox>
                    </Col>
                    <Col span={6} className="box-emptys">
                        <Checkbox>include my last emptys</Checkbox>
                    </Col>

                </Row>
                <Row type="flex" justify="center" align="top">

                    <Col span={6} className="text-answer-result">
                        when show result of questions :
                    </Col>
                    <Radio.Group >
                        <Col span={6} className="box-answer-result1">
                            <Radio> at the end </Radio>
                            <br></br>
                            <Radio> after answer</Radio>
                        </Col>
                    </Radio.Group>

                </Row>
                <Row type="flex" justify="center" align="top">

                    <Col span={8} className="input-length">
                        <label>how many quest you want to show ? &nbsp;&nbsp;&nbsp;</label>
                        <InputNumber size="large" min={5} max={100} defaultValue={15} />
                    </Col>
                    <Col span={6} className="dropdown-categories">
                        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
                            <Button>bottomCenter</Button>
                        </Dropdown>
                    </Col>
                    <Col span={6} className="inputs-categories">
                        <Input addonAfter={<Icon type="minus" />} defaultValue="mysite" />
                    </Col>

                </Row>
            </div>
        );
    }
}