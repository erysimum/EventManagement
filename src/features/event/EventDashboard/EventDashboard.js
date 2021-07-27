import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import EventForm from '../EventForm/EventForm';
import EventList from '../EventList/EventList';
import cuid from 'cuid';

const eventsDB = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

class EventDashboard extends Component {
  state = {
    events: eventsDB,
    isOpen: false
  };

  handleToggleForm = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  handleFormFromEventForm = (eventFormObj) => {
    // const id = cuid();
    // eventFormObj = { ...eventFormObj, id };
    // console.log('id', eventFormObj.id);
    // console.log('eventFormObj', eventFormObj);
    // this.setState({
    //   events: [...this.state.events, eventFormObj]
    // });

    eventFormObj.id = cuid();
    eventFormObj.hostPhotoURL = ' https://randomuser.me/api/portraits/men/20.jpg';
    this.setState({
      events: [...this.state.events, eventFormObj],
      isOpen: false
    });
  };

  render() {
    console.log('events', this.state.events);
    const { events, isOpen } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button onClick={this.handleToggleForm} positive content='Create an Event' />
          {isOpen && <EventForm x={this.handleFormFromEventForm} cancelForm={this.handleToggleForm} />}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
