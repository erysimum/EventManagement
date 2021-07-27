import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
class EventAttendee extends Component {
  render() {
    return (
      <List.Item>
        {/* <Image as='a' size='mini' circular src='https://randomuser.me/api/portraits/women/42.jpg' /> */}
        <Image as='a' size='mini' circular src={this.props.attendee.photoURL} />
      </List.Item>
    );
  }
}
export default EventAttendee;
