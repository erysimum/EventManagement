import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.events.map((event) => (
          <EventListItem selectEvent={this.props.selectEvent} key={event.id} events={event} deleteEvent={this.props.deleteEvent} />
        ))}
      </Fragment>
    );
  }
}
export default EventList;
