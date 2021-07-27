//import logo from './logo.svg';
//import './App.css';
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import NavBar from './features/navbar/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
import EventList from './features/event/EventList/EventList';

function App() {
  return (
    <>
      <NavBar />
      <Container className='main'>
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
