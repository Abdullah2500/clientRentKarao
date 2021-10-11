import React from 'react';
import Eachpost from './eachPost';
import { Spin, Alert } from 'antd';
//import { Line } from '@ant-design/charts';//

const AppExperience = (props) => {
  
  const {post} = props;  
  console.log('post in experience = ',post)
    return (
        <div>
          {post!=null?
          <div>{post.map((post) =>{
              return<Eachpost post={post}/>
          })}</div>
        :<Spin tip="Loading..." size="large">
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
export default AppExperience;



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