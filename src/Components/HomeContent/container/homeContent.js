import React from 'react';
import AppHero from '../ui/contentui';
// import AppFeature from '../../PlacesCards/ui/PlacesCards';
import AppWork from '../../HomeModal/container/homeModal';
import Appabout from '../../About/ui/aboutui';
import AppSearch from '../../Search/ui/Searchui';
import AppCards from '../../PlacesCards/container/card';
import AppGraph from '../../Graph/ui/graph';
// import AppTitleHolder from '../../TitleHolderForHome/titleHolder';

const AppHome = () => {
  return (
    <div className="main">
      <AppHero />
      {/* <AppSearch/> */}
      {/* <AppTitleHolder/> */}
      {/* <AppFeature /> */}
      <AppCards />
      <AppWork />
      <Appabout />
      <AppGraph />
    </div>
  );
}

export default AppHome;