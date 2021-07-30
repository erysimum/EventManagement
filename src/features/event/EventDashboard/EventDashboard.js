import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import EventForm from '../EventForm/EventForm';
import EventList from '../EventList/EventList';
import cuid from 'cuid';

const eventsDB = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
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
    date: '2018-03-28',
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
    isOpen: false,
    selectEvent: null
  };

  // handleToggleForm = () => {
  //   this.setState((prevState) => ({
  //     isOpen: !prevState.isOpen
  //   }));
  // };
  handleFormCreate = () => {
    this.setState({
      isOpen: true,
      selectEvent: null
    });
  };

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    });
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

  handleSelectEvent = (selectedEventObj) => {
    this.setState({
      selectEvent: selectedEventObj,
      isOpen: true
    });
  };

  updateEventInForm = (eventObjFromForm) => {
    this.setState({
      events: this.state.events.map((evt) => {
        if (evt.id === eventObjFromForm.id) {
          return { ...eventObjFromForm };
        } else {
          return evt;
        }
      }),
      isOpen: false,
      selectEvent: null
    });
  };


  deleteEvent = (id) => {
    this.setState({
      events: this.state.events.filter(evt => evt.id !== id)
      
    })
    
  }

  render() {
    const { events, isOpen } = this.state;
    console.log('updatedll', events);
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList selectEvent={this.handleSelectEvent} events={events} deleteEvent={this.deleteEvent} />
        </Grid.Column>

        <Grid.Column width={6}>
          <Button onClick={this.handleFormCreate} positive content='Create an Event' />
          {isOpen && (
            <EventForm
              key={this.state.selectEvent ? this.state.selectEvent.id : 0}
              x={this.handleFormFromEventForm}
              selectedEvent={this.state.selectEvent}
              cancelForm={this.handleFormCancel}
              updateEvent={this.updateEventInForm}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
