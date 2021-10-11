import React, { useState } from 'react';
import { Col, Row, Input } from 'antd';
import { AutoComplete } from 'antd';
import { Form, DatePicker, Select, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../assets/search.css';
import SearchApi from '../api/searchApi';
import AppCardViewTourGuide from '../../CardView copy/ui/CardViewui';
import axios from 'axios';
const { RangePicker } = DatePicker;

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}
// Range Picker 
// const rangeConfig = {
//     rules: [
//         {
//             type: 'array',
//             required: true,
//             message: 'Please select time!',
//         },
//     ],
// };

//
const AppSearchTourGuide = () => {
    const [city, setCity] = useState([]);
    const [experience, setExperience] = useState([]);
    const [fee, setFee] = useState([]);
    const [places, setPlaces] = useState([])

    const Search = async (data) => {
        //   SearchApi(data).then(result=>{
        //     if(result)
        //     {
        //         console.log('result = ',result)
        //         console.log('result.places = ',result.places)
        //     setPlaces(result);
        //     }
        //   })
        const res = await axios.post("http://localhost:8000/tourGuide/search",
            data
        );
        setPlaces(res?.data?.data);
        console.log(res?.data?.data);
    }

    function onChange(values) {
        console.log('onChange values = ', values)
        setExperience(values);
    }
    function onChange1(values) {
        console.log('onChange values = ', values)
        setFee(values);
    }
    // Range Picker Function are below 
    // const onFinish = (fieldsValue) => {
    //     // Should format date value before submit.
    //     const rangeValue = fieldsValue['range-picker'];
    //     const values = {
    //         ...fieldsValue,
    //         'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')]
    //     };
    //     console.log('Received values of form: ', values);
    // };

    //Select functions

    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    const data = {
        city: city,
        experience: experience,
        fee: fee
    }
    console.log(places.length, "lnth")
    console.log('data in searchui = ', data);
    return (<div>{places.length != 0 ?
        <div>{places.map((places) => {
            return <AppCardViewTourGuide places={places} />
        })}</div> :
        <div className="parentClass">

            {/* <div>{places != null ?
              <div>{places.map((places) => {
                return <AppCardView places={places} />
              })}</div>
              : ""
             }
            </div> */}

            <div className="block worksBlockTourGuide">
                <div className="container-fluid">
                    <div className="titleHolderof">
                        <h2>Search and Book A Tour Guide</h2>
                    </div>
                    <Row gutter={[48, 48]}>
                        {/* ///////////////////////  Location Search Form ////////////////////// */}

                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} >
                            <div className="titleHolderofSearch">
                                <h2>Location</h2>
                            </div>
                            <AutoComplete
                                dropdownMatchSelectWidth={252}
                            >
                                <Form.Item name="search">
                                    <Input onChange={(e) => setCity(e.target.value)} placeholder="Search by Location" />
                                </Form.Item>
                            </AutoComplete>

                        </Col>
                        {/* //////////////////////// Room Type Form //////////////////////////// */}
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} >
                            <div className="titleHolderofSearch">
                                <h2>Experience</h2>
                            </div>
                            <Form
                                layout="horizontal"
                                initialValues={{
                                    size: componentSize,
                                }}
                                onValuesChange={onFormLayoutChange}

                                size={componentSize}
                            ><Form.Item >
                                    <Select onChange={onChange} placeholder="Room Type" className="selectClass">
                                        <Select.Option value="1 Year" className="selectClass">1 Year</Select.Option>
                                        <Select.Option value="2 Years" className="selectClass">2 Years</Select.Option>
                                        <Select.Option value="3 Years" className="selectClass">3 Years</Select.Option>
                                        <Select.Option value="More than 3 Years" className="selectClass">More than 3 Years</Select.Option>
                                    </Select>
                                </Form.Item>
                            </Form>
                        </Col>
                        {/* /////////////////////  Price Range Form ////////////////////// */}
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} >
                            <div className="titleHolderofSearch">
                                <h2>Price Range</h2>
                            </div>
                            {/* <Form
                                layout="horizontal"
                                initialValues={{
                                    size: componentSize,
                                }}
                                onValuesChange={onFormLayoutChange}
                                
                                size={componentSize}> */}
                            <Form.Item>
                                <Select onChange={onChange1} placeholder="Price Range" className="selectClass">
                                    <Select.Option value="2000" className="selectClass">2000</Select.Option>
                                    <Select.Option value="3000" className="selectClass">3000</Select.Option>
                                    <Select.Option value="8000" className="selectClass">8000</Select.Option>
                                    <Select.Option value="9000" className="selectClass">above 9000</Select.Option>
                                </Select>
                            </Form.Item>
                            {/* </Form> */}
                        </Col>
                        {/* //////////////////////////////////////////////// */}
                        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }} >
                            <div className="titleHolderofSearch">
                                <h2>Search</h2>
                            </div>
                            <Button onClick={() => Search(data)} type="primary" icon={<SearchOutlined />}>
                                Search
                            </Button>
                        </Col>
                    </Row>
                </div>
                <>

                </>
            </div>
        </div>


    }</div>
    );
}
export default AppSearchTourGuide;