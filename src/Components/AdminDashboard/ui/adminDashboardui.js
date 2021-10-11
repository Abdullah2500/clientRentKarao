import React, { useState } from 'react';
import {Layout, Menu, Row, Col } from 'antd';
import { DesktopOutlined, DatabaseOutlined, LogoutOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Divider } from 'antd';
import { useHistory } from 'react-router-dom';
import { ContextOne } from '../../context/contexts';
import '../assets/adminDash.css';
import { callApi } from '../../../config/callApi';
import ShowAllUserInDB from './showAllUser';
import ShowAllRegPlacesInDB from './showAllPlaces';
import ShowAllTourGuidesinDB from './showAllTourGuides';
import DelAllRegPlaces from './DelAllPlaces';
import DelAllTourGuide from './DelAllTourGuide';
import { Spin, Alert } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

let user1; //global variable 


const AppAdminDashboard = (props) => {
  const [post, setPost] = useState([]);
  const [check, setCheck] = useState([]);
  const ShowAllUser = async () => {
    try {
      let method = 'GET';
      let queryResult = await callApi('/users', method, null);
      user1 = queryResult.data;
      setPost(user1);
      setCheck('AllUser');
    } catch (e) {
      console.log(e);
    }

  }
  const ShowAllRegPlaces = async () => {
    try {
      let method = 'GET';
      let queryResult = await callApi('/becomeAProvider', method, null);
      user1 = queryResult.data;
      setPost(user1);
      setCheck('AllPlaces');
    } catch (e) {
      console.log(e);
    }

  }
  const ShowAllTourGuides = async () => {
    try {
      let method = 'GET';
      let queryResult = await callApi('/tourGuide', method, null);
      user1 = queryResult.data;
      setPost(user1);
      setCheck('AllTourGuides');
    } catch (e) {
      console.log(e);
    }
  }
  const DelAllPlaces = async () => {
    try {
      let method = 'DELETE';
      let queryResult = await callApi('/becomeAProvider', method, null);
      user1 = queryResult.data;
      setPost(user1);
      setCheck('DeleteAllPlace');
    } catch (e) {
      console.log(e);
    }
  }
  const DelAllTourGuides = async () => {
    try {
      let method = 'DELETE';
      let queryResult = await callApi('/tourGuide', method, null);
      user1 = queryResult.data;
      setPost(user1);
      setCheck('DeleteAllTourGuides');
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
    // <div className="adminDashboard">
    //   <Row>
    //     <Col span={18} push={6}>
    //       <div className='titleHolderadmin'><h2>Welcome Admin</h2></div>
    //       <div>{check === 'AllUser' ?
    //         <div>{post != null ?
    //           <div>{post.map((post) => {
    //             return <ShowAllUserInDB post={post} />
    //           })}</div>
    //           : <Spin tip="Loading..." size="large">
    //             <Alert
    //               message=""
    //               description=""
    //               type=""
    //             />
    //           </Spin>
    //          }
    //         </div>
    //         :''}
    //       </div>
    //       <div>{check === 'AllPlaces' ?
    //         <div>{post != null ?
    //           <div>{post.map((post) => {
    //             return <ShowAllRegPlacesInDB post={post} />
    //           })}</div>
    //           : <Spin tip="Loading..." size="large">
    //             <Alert
    //               message=""
    //               description=""
    //               type=""
    //             />
    //           </Spin>
    //          }
    //         </div>
    //         :''}
    //       </div>
         
    //       <div>{check === 'AllTourGuides' ?
    //         <div>{post != null ?
    //           <div>{post.map((post) => {
    //             return<ShowAllTourGuidesinDB post={post} />
    //           })}</div>
    //           : <Spin tip="Loading..." size="large">
    //             <Alert
    //               message=""
    //               description=""
    //               type=""
    //             />
    //           </Spin>
    //          }
    //         </div>
    //         :''}
    //       </div>

    //       <div>{check === 'DeleteAllPlace' ?
    //         <div>{post != null ?
    //           <div>
    //             <DelAllRegPlaces post={post} />
    //           </div>
    //           : <Spin tip="Loading..." size="large">
    //             <Alert
    //               message=""
    //               description=""
    //               type=""
    //             />
    //           </Spin>
    //          }
    //         </div>
    //         :''}
    //       </div>

    //       <div>{check === 'DeleteAllTourGuides' ?
    //         <div>{post != null ?
    //           <div>
    //             <DelAllTourGuide post={post}/>
    //           </div>
    //           : <Spin tip="Loading..." size="large">
    //             <Alert
    //               message=""
    //               description=""
    //               type=""
    //             />
    //           </Spin>
    //          }
    //         </div>
    //         :''}
    //       </div>
    //     </Col>
    //     <Col span={6} pull={18}>
    //       <Menu className="menuClass">
    //         <div style={{ padding: '10px', textAlign: 'center' }}>
    //           <Avatar className="avatar" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100, }} icon={<UserOutlined />}
    //             src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"

    //           /></div>
    //         <div><p style={{ textAlign: 'center', fontWeight: 'bold' }}>{state.userData.username}</p></div>
    //         <Divider></Divider>
    //         <Menu.Item key="1" onClick={() => ShowAllRegPlaces()} icon={<DesktopOutlined />} style={{ fontWeight: 'bold' }}>
    //           All Registered Places
    //         </Menu.Item>
    //         <Menu.Item key="2"  icon={<DesktopOutlined />} style={{ fontWeight: 'bold' }}>
    //           All Booked Places
    //         </Menu.Item>
    //         <Menu.Item key="3" onClick={() => ShowAllTourGuides()} icon={<DesktopOutlined />} style={{ fontWeight: 'bold' }}>
    //           All Registered Tour Guides
    //         </Menu.Item>
    //         <Menu.Item key="4" onClick={() => ShowAllUser()} icon={<DatabaseOutlined />} style={{ fontWeight: 'bold' }}>
    //           All Users in DB
    //         </Menu.Item>
    //         <Menu.Item key="5" onClick={() => DelAllPlaces()} icon={<DeleteOutlined />} style={{ fontWeight: 'bold' }}>
    //           Delete All Registered Place
    //         </Menu.Item>
    //         <Menu.Item key="6" onClick={() => DelAllTourGuides()} icon={<DeleteOutlined />} style={{ fontWeight: 'bold' }}>
    //           Delete All Registered Tour Guides
    //         </Menu.Item>
    //         <Menu.Item key="7" icon={<DeleteOutlined />} style={{ fontWeight: 'bold' }}>
    //           Delete All Booked Places
    //         </Menu.Item>
    //         <Menu.Item key="8" icon={<LogoutOutlined />} onClick={logout} style={{ fontWeight: 'bold' }}>
    //           Logout
    //         </Menu.Item>
    //       </Menu>
    //     </Col>
    //   </Row>
    // </div>
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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['8']}>
      <div style={{padding:'10px', textAlign:'center'}}>
           <Avatar className="avatar" size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100,}} icon={<UserOutlined/>}
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y"
          />
        </div>
         <div><p style={{textAlign:'center',fontWeight:'bold'}}>{state.userData.firstname} {state.userData.lastname}</p></div>
             <Menu.Item key="1" onClick={() => ShowAllRegPlaces()} icon={<DesktopOutlined />} style={{ fontWeight: 'bold' }}>
               All Reg. Places
             </Menu.Item>
             <Menu.Item key="2"  icon={<DesktopOutlined />} style={{ fontWeight: 'bold' }}>
               All Booked Places
             </Menu.Item>
             <Menu.Item key="3" onClick={() => ShowAllTourGuides()} icon={<DesktopOutlined />} style={{ fontWeight: 'bold' }}>
               All Reg. Tour Guides
             </Menu.Item>
             <Menu.Item key="4" onClick={() => ShowAllUser()} icon={<DatabaseOutlined />} style={{ fontWeight: 'bold' }}>
               All Users in DB
             </Menu.Item>
             <Menu.Item key="5" onClick={() => DelAllPlaces()} icon={<DeleteOutlined />} style={{ fontWeight: 'bold' }}>
               Delete All Reg. Place
             </Menu.Item>
             <Menu.Item key="6" onClick={() => DelAllTourGuides()} icon={<DeleteOutlined />} style={{ fontWeight: 'bold' }}>
               Del All Tour Guides
             </Menu.Item>
             <Menu.Item key="7" icon={<DeleteOutlined />} style={{ fontWeight: 'bold' }}>
                All Booked Places
             </Menu.Item>
             <Menu.Item key="8" icon={<LogoutOutlined />} onClick={logout} style={{ fontWeight: 'bold' }}>
               Logout
             </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360, backgroundColor: 'cadetblue' }}>
        <div className='titleHolderadmin'><h2>Welcome Admin</h2></div>
           <div>{check === 'AllUser' ?
            <div>{post != null ?
              <div>{post.map((post) => {
                return <ShowAllUserInDB post={post} />
              })}</div>
              : <Spin tip="Loading..." size="large">
                <Alert
                  message=""
                  description=""
                  type=""
                />
              </Spin>
             }
            </div>
            :''}
          </div>
          <div>{check === 'AllPlaces' ?
            <div>{post != null ?
              <div>{post.map((post) => {
                return <ShowAllRegPlacesInDB post={post} />
              })}</div>
              : <Spin tip="Loading..." size="large">
                <Alert
                  message=""
                  description=""
                  type=""
                />
              </Spin>
             }
            </div>
            :''}
          </div>
         
          <div>{check === 'AllTourGuides' ?
            <div>{post != null ?
              <div>{post.map((post) => {
                return<ShowAllTourGuidesinDB post={post} />
              })}</div>
              : <Spin tip="Loading..." size="large">
                <Alert
                  message=""
                  description=""
                  type=""
                />
              </Spin>
             }
            </div>
            :''}
          </div>

          <div>{check === 'DeleteAllPlace' ?
            <div>{post != null ?
              <div>
                <DelAllRegPlaces post={post} />
              </div>
              : <Spin tip="Loading..." size="large">
                <Alert
                  message=""
                  description=""
                  type=""
                />
              </Spin>
             }
            </div>
            :''}
          </div>

          <div>{check === 'DeleteAllTourGuides' ?
            <div>{post != null ?
              <div>
                <DelAllTourGuide post={post}/>
              </div>
              : <Spin tip="Loading..." size="large">
                <Alert
                  message=""
                  description=""
                  type=""
                />
              </Spin>
             }
            </div>
            :''}
          </div>
        </div>
      </Content>
    </Layout>
  </Layout>
  );
};
export default AppAdminDashboard;