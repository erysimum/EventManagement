import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';
import SettingsNav from './SettingsNav';

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Redirect exact from='/settings' to='/settings/basic' />
        <Route path='/settings/basic' component={BasicPage} />
        <Route path='/settings/about' component={AboutPage} />
        <Route path='/settings/photos' component={PhotosPage} />
        <Route path='/settings/account' component={AccountPage} />
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingsDashboard;
