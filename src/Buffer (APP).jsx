import React from 'react';
import './App.css';
import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'ol/ol.css';
import 'antd/dist/antd.css';
import './component/MapBody/react-geo.css';

import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import {
    MapComponent
} from "@terrestris/react-geo";

const {Option} = Select;
const layer = new OlLayerTile({
    source: new OlSourceOsm()
});

const center = [788453.4890155146, 6573085.729161344];

const map = new OlMap({
    view: new OlView({
        center: center,
        zoom: 16,
    }),
    layers: [layer]
});

class App extends React.Component {
    state = {visible: false};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div className='app-wrapper'>
                <MapComponent
                    map={map}
                />
                {/*<>
                    <Button className='buttonPlus'
                            type="primary" onClick={this.showDrawer}>
                        New account
                    </Button>
                    <Drawer
                        title="Create a new account"
                        width={720}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        bodyStyle={{paddingBottom: 80}}
                        footer={
                            <div
                                style={{
                                    textAlign: 'right',
                                }}
                            >
                                <Button onClick={this.onClose} style={{marginRight: 8}}>
                                    Cancel
                                </Button>
                                <Button onClick={this.onClose} type="primary">
                                    Submit
                                </Button>
                            </div>
                        }
                    >
                        <Form layout="vertical" hideRequiredMark>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="name"
                                        label="Name"
                                        rules={[{required: true, message: 'Please enter user name'}]}
                                    >
                                        <Input placeholder="Please enter user name"/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="url"
                                        label="Url"
                                        rules={[{required: true, message: 'Please enter url'}]}
                                    >
                                        <Input
                                            style={{width: '100%'}}
                                            addonBefore="http://"
                                            addonAfter=".com"
                                            placeholder="Please enter url"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="owner"
                                        label="Owner"
                                        rules={[{required: true, message: 'Please select an owner'}]}
                                    >
                                        <Select placeholder="Please select an owner">
                                            <Option value="xiao">Xiaoxiao Fu</Option>
                                            <Option value="mao">Maomao Zhou</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="type"
                                        label="Type"
                                        rules={[{required: true, message: 'Please choose the type'}]}
                                    >
                                        <Select placeholder="Please choose the type">
                                            <Option value="private">Private</Option>
                                            <Option value="public">Public</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item
                                        name="approver"
                                        label="Approver"
                                        rules={[{required: true, message: 'Please choose the approver'}]}
                                    >
                                        <Select placeholder="Please choose the approver">
                                            <Option value="jack">Jack Ma</Option>
                                            <Option value="tom">Tom Liu</Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="dateTime"
                                        label="DateTime"
                                        rules={[{required: true, message: 'Please choose the dateTime'}]}
                                    >
                                        <DatePicker.RangePicker
                                            style={{width: '100%'}}
                                            getPopupContainer={trigger => trigger.parentNode}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={24}>
                                    <Form.Item
                                        name="description"
                                        label="Description"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'please enter url description',
                                            },
                                        ]}
                                    >
                                        <Input.TextArea rows={4} placeholder="please enter url description"/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Drawer>
                </>*/}
                <Button
                    type='primary'
                    style={{position: 'fixed', top: '30px', right: '30px'}}
                    onClick={this.showDrawer}
                    icon={<MenuOutlined />}>
                </Button>
                <Drawer
                    title="react-geo-application"
                    placement="right"
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                </Drawer>
            </div>
        );
    }
}

export default App;
