import React, { useState } from 'react';
import { callApi } from '../../../config/callApi';
import { Layout, Menu, Row, Col } from 'antd';
import { PieChartOutlined, DesktopOutlined, ContainerOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider } from 'antd';
import { useHistory } from 'react-router-dom';
import { ContextOne } from '../../context/contexts';
import '../assets/UserDashboard.css';
const { Header, Content, Footer, Sider } = Layout;

let user1; //global variable

const AppDashboard = (props) => {
  const [post, setPost] = useState([]);
  const [check, setCheck] = useState([]);

  const EditProfile = async () => {
    try {
      let method = 'PUT';
      let queryResult = await callApi('/users', method, null);
      user1 = queryResult.data;
      setPost(user1);
      setCheck('AllUser');
    } catch (e) {
      console.log(e);
    }
  }

  let { state, dispatch } = React.useContext(ContextOne);
  const history = useHistory();
  function logout() {
    dispatch({ type: 'logout' });
    history.push('/login')
  }
  return (
  //   <div className="userDashboard">
  //     <Row>
  //   <Col span={18} push={6}>
  //     col-18 col-push-6
  //   </Col>
  //   <Col span={6} pull={18}>
  //   <Menu className="menuClass" mode="inline" defaultSelectedKeys={['4']}>
  //     <div style={{padding:'10px', textAlign:'center'}}>
  //         <Avatar className="avatar" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100,}} icon={<UserOutlined/>}
  //       src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
       
  //   /></div>
  //   <div><p style={{textAlign:'center',fontWeight:'bold'}}>{state.userData.username}</p></div>
  //           <Divider></Divider>
  //         <Menu.Item key="1" icon={<PieChartOutlined />} style={{fontWeight:'bold'}}>
  //           Registered Places
  //         </Menu.Item>
  //         <Menu.Item key="2" icon={<DesktopOutlined />} style={{fontWeight:'bold'}}>
  //           Booked Places
  //         </Menu.Item>
  //         <Menu.Item key="3" onClick={() => EditProfile()} icon={<ContainerOutlined />} style={{fontWeight:'bold'}}>
  //           Edit Profile
  //         </Menu.Item>
  //         <Menu.Item key="4" icon={<LogoutOutlined />} onClick={logout} style={{fontWeight:'bold'}}>
  //           Logout
  //         </Menu.Item>
  //   </Menu> 
  //   </Col>
  // </Row>


  //   </div>
    <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
      <div style={{padding:'10px', textAlign:'center'}}>
           <Avatar className="avatar" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100,}} icon={<UserOutlined/>}
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
          />
        </div>
         <div><p style={{textAlign:'center',fontWeight:'bold'}}>{state.userData.firstname} {state.userData.lastname}</p></div>
         <Menu.Item key="1" icon={<PieChartOutlined />} style={{fontWeight:'bold'}}>
            Registered Places
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />} style={{fontWeight:'bold'}}>
            Booked Places
          </Menu.Item>
          <Menu.Item key="3" onClick={() => EditProfile()} icon={<ContainerOutlined />} style={{fontWeight:'bold'}}>
            Edit Profile
          </Menu.Item>
          <Menu.Item key="4" icon={<LogoutOutlined />} onClick={logout} style={{fontWeight:'bold'}}>
            Logout
          </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
        </div>
      </Content>
    </Layout>
  </Layout>
  );
};
export default AppDashboard;