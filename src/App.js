import React from 'react';
import { ContextOne } from '../src/Components/context/contexts';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbarui from './Components/navbar/ui/navbarui';
import ScrollToTop from './Components/ScrolltoTop/scrollToTop';
import AppHome from './Components/HomeContent/container/homeContent';
import AppFooter from './Components/Footer/ui/footerui';
import AppExperience from './Components/Experience/container/post';
import BecomeAHostContainer from './Components/BecomeAHost/container/becomeAHost';
import AppSignup from './Components/Signup/container/Signup';
import { Layout } from 'antd';
import TourGuideContainer from './Components/TourGuide/container/TourGuide';
import LoginContainer from './Components/Login/container/Login';
import AppDashboard from './Components/UserDashboard/ui/UserDashboardUI';
import AppCardView from './Components/CardView/ui/CardViewui';
import AppAdminDashboard from './Components/AdminDashboard/ui/adminDashboardui';
import AppSearch from './Components/Search/ui/Searchui';
import AppSearchTourGuide from './Components/Search Tour Guide/ui/Searchui';
// const { Header, Content, Footer } = Layout;
const { Footer } = Layout;

function App() {
  let { state, dispatch } = React.useContext(ContextOne);
  console.log('state.userData.admin = ', state.userData);
  return (
    <div>
      {/* {state.userData.admin === true ?(
      <Router>
          <Route path="/adminDashboard" component={AppAdminDashboard}></Route>
          <Route path="/login" component={LoginContainer}></Route>
        </Router>
    ):( */}

      <Router>
        <Navbarui />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={AppHome}></Route>
          <Route path="/experience" component={AppExperience}></Route>
          <Route path="/becomeAHost" component={BecomeAHostContainer}></Route>
          <Route path="/login" component={LoginContainer}></Route>
          <Route path="/signup" component={AppSignup}></Route>
          <Route path="/tourguide" component={TourGuideContainer}></Route>
          <Route path="/dashboard" component={AppDashboard}></Route>
          <Route path="/CardView" component={AppCardView}></Route>
          <Route path="/search" component={AppSearch}></Route>
          <Route path="/searchTourGuide" component={AppSearchTourGuide}></Route>
          <Route path="/adminDashboard" component={AppAdminDashboard}></Route>
        </Switch>
        <Footer>
          <AppFooter />
        </Footer>
      </Router>
    </div>
  );
}
export default App;