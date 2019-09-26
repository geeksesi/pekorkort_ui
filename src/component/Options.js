import React from "react";
import "./Options.css";
import {
    Row, Col,
    Menu, Dropdown,
    Button, Icon,
    Input, InputNumber,
    Checkbox, Radio
} from 'antd';


export default class Options extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;

        console.log(props);
        this.state = props.options.Options;
        this.menu = (
            <Menu onClick={e => this.category_handle(e, this)}>
                <Menu.Item key={1}>
                    Category One
                    </Menu.Item>
                <Menu.Item key={2}>
                    Category twoo
                    </Menu.Item>
                <Menu.Item key={3}>
                    Category Three
                    </Menu.Item>
            </Menu>
        )

    }


    category_handle(item) {
        const tmp_cat = { category_id: item.key, category_name: item.item.props.children };

        let categories_tmp = this.state.categories;
        categories_tmp.push(tmp_cat);
        this.setState({ categories: categories_tmp });
        this.props.ADD_CATEGORY(item.key, item.item.props.children);
    }

    onChanged(e) {
        switch (e.target.name) {
            case 'new_only':
                this.setState({ new_only: e.target.checked });
                this.props.NEW_CHECK(e.target.checked);
                break;
            case 'random':
                this.setState({ random: e.target.checked });
                this.props.RANDOM_CHECK(e.target.checked);
                break;
            case 'wrongs':
                this.setState({ wrongs: e.target.checked });
                this.props.WRONGS_CHECK(e.target.checked);
                break;
            case 'emptys':
                this.setState({ emptys: e.target.checked });
                this.props.EMPTYS_CHECK(e.target.checked);
                break;
            case 'result':
                this.setState({ result: e.target.value });
                this.props.RESULT_VALUE(e.target.checked);
                break;
            case 'length':
                this.setState({ length: e.target.value });
                this.props.LENGTH_UPDATE(e.target.value);
                break;
            case 'category':
                console.log(e);
                let categories_tmp = this.state.categories;
                categories_tmp.splice(e.target.key, 1);
                this.setState({ categories: categories_tmp });
                this.props.REMOVE_CATEGORY(e.target.key);
                break;
        }
        console.log(`check : ${e.target.name}`);
    }

    render() {
        return (
            <div className="Options">
                <Row type="flex" justify="center" align="top">

                    <Col span={6} className="box-new-only">
                        <Checkbox checked={this.state.new_only} name="new_only" onChange={e => this.onChanged(e, this)}>New question only</Checkbox>
                    </Col>
                    <Col span={6} className="box-random">
                        <Checkbox checked={this.state.random} name="random" onChange={e => this.onChanged(e, this)}>Random question</Checkbox>
                    </Col>

                </Row>
                <Row type="flex" justify="center" align="top">

                    <Col span={6} className="box-wrongs">
                        <Checkbox checked={this.state.wrongs} name="wrongs" onChange={e => this.onChanged(e, this)}>include my last wrongs</Checkbox>
                    </Col>
                    <Col span={6} className="box-emptys">
                        <Checkbox checked={this.state.emptys} name="emptys" onChange={e => this.onChanged(e, this)}>include my last emptys</Checkbox>
                    </Col>

                </Row>
                <Row type="flex" justify="center" align="top">

                    <Col span={6} className="text-answer-result">
                        when show result of questions :
                    </Col>
                    <Radio.Group name="result" onChange={e => this.onChanged(e, this)} value={this.state.result}>
                        <Col span={6} className="box-answer-result1">
                            <Radio value={0}> at the end </Radio>
                            <br></br>
                            <Radio value={1}> after answer</Radio>
                        </Col>
                    </Radio.Group>

                </Row>
                <Row type="flex" justify="center" align="top">

                    <Col span={8} className="input-length">
                        <label>how many quest you want to show ? &nbsp;&nbsp;&nbsp;</label>
                        <InputNumber name="length" size="large" min={5} max={100} defaultValue={this.state.length} onChange={e => this.onChanged({ target: { name: "length", value: e } }, this)} />
                    </Col>
                    <Col span={6} className="dropdown-categories">
                        <Dropdown overlay={this.menu} placement="bottomCenter" trigger={['click']}>
                            <Button>Select category</Button>
                        </Dropdown>
                    </Col>
                    <Col span={6} className="inputs-categories">
                        {this.state.categories.map((element, key) => {
                            return <Input key={element.category_id} allowClear={true} value={element.category_name} disabled={false} onChange={e => this.onChanged({ target: { name: "category", key: key } }, this)} />;
                        })}
                    </Col>

                </Row>


                <Row type="flex" justify="center" align="top">
                    <Col span={8}><Button onClick={this.props.OPTION_SUBMITE}>Submite</Button></Col>
                </Row>
            </div>
        );
    }
}