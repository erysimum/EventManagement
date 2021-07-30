//import logo from './logo.svg';
//import './App.css';
import { Fragment } from 'react';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './features/navbar/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import EventList from './features/event/EventList/EventList';
import { Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import EventDetailedPage from './features/event/EventDeatiled/EventDetailedPage';
import PeopleDashboard from './user/PeopleDashboard/PeopleDashboard';

import SettingsDashboard from './Settings/SettingsDashboard';
import EventForm from './features/event/EventForm/EventForm';
import UserDetailedPage from './UserDetailed/UserDetailedPage';

function App() {
  return (
    <Fragment>
      <Route path='/' exact component={HomePage} />
      <Route
        path='/(.+)'
        render={() => (
          <Fragment>
            <NavBar />
            <Container className='main'>
              <Route path='/' exact component={HomePage} />
              <Route path='/events' exact component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path='/people' component={PeopleDashboard} />
              <Route path='/people:/id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingsDashboard} />
              <Route path='/createEvent' component={EventForm} />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default App;
