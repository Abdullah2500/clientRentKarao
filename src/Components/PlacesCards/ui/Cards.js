import React from 'react';
import AppFeature from './PlacesCards';
import { Spin, Alert } from 'antd';
import { Col, Row, Button, Divider } from 'antd';
import '../assets/placecards.css';

const AppCards = (props) => {
  const { post } = props;
  console.log('post in Cards = ', post)
  return (
    <div >
      {post != null ?
        <div className="block featureBlock bgGray">
          <div className="container-fluid">
              <div className="titleHolder">
                 <h2>Places to Visit</h2>
                  <p>lorem ipsum dollar set amit to enhance user experience</p>
              </div> 
              <div className="hamza">{post.map((post) => {  
            return <AppFeature post={post} />
          })}</div>
          </div>
      </div>   
          :
          <Spin tip="Loading..." size="large">
            <Alert
              message=""
              description=""
              type=""
            />
          </Spin>
        }
        </div>
    )
};
export default AppCards;



// import React, { useState, useEffect } from 'react';
// import { Line } from '@ant-design/charts';



// const AppExperience = () => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         asyncFetch();
//     }, []);
//     const asyncFetch = () => {
//         fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
//             .then((response) => response.json())
//             .then((json) => setData(json))
//             .catch((error) => {
//             console.log('fetch data failed', error);
//         });
//     };
//     const config = {
//         data,
//         padding: 'auto',
//         appendPadding: [10, 10, 5, 10],
//         theme: 'dark',
//         xField: 'Date',
//         yField: 'scales',
//         xAxis: {
//             tickCount: 5,
//         },
//     };
//     return <Line {...config}/>;
// };
// export default AppExperience;