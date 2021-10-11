import React, { useState } from 'react';
import '../assets/placecards.css';
import AppCardView from '../../CardView/ui/CardViewui';
//import image1 from '../assets/room.jpg';
import { Col, Row, Button, Divider } from 'antd';
import { useHistory } from 'react-router-dom';
import { Spin, Alert } from 'antd';
import { callApi } from '../../../config/callApi';
//const { Meta } = Card;

const AppFeature = (props) => {
    const { post } = props;

    const history = useHistory();
    function cardview(post) {
        return <AppCardView post={post}/>
    }
    return (
      
        <div className="adnan">
            <div className="cont_photo">
                <div className="cont_img_back">
                    <img src={post.image} alt="" />
                </div>
                <div className="cont_mins">
                    <div className="sub_mins">
                        <h3>{post.fee}</h3>
                        <span>RS.</span>
                    </div>
                    <div className="cont_icon_right">
                        <Button onClick={() => cardview()} className="material-icons">View Details </Button>
                        {/* <a onClick={cardview}>  <i className="material-icons">View Details </i></a> */}
                    </div>
                </div>
                <div className="cont_servings">
                    <h3>{post.guests}</h3>
                    <span>SERVINGS</span>
                </div>
                <div className="cont_detalles">
                    <h3>{post.placeType}</h3>
                    <h4 className="h4tag">{post.address}</h4>
                </div>
            </div>
       </div>

    );
}
export default AppFeature;

/* <Card className="card"
                            hoverable
                            cover={<img className="image" alt="Test" src={image1} />}>
                            <Meta title="Clean and Elegant" />
                            <Button type="primary" shape="round" style={{ marginLeft: 60, marginTop: 20 }}>View Details</Button>
                        </Card><div className="cardShadow"></div>  */