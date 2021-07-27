import React, { Component, Fragment } from 'react';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import EventAttendee from './EventAttendee';

class EventListItem extends Component {
  render() {
    return (
      <Fragment>
        <Segment.Group>
          <Segment>
            <Item.Group>
              <Item>
                {/* <Item.Image size='tiny' circular src='https://randomuser.me/api/portraits/women/42.jpg' /> */}
                <Item.Image size='tiny' circular src={this.props.events.hostPhotoURL} />
                <Item.Content>
                  <Item.Header as='a'>{this.props.events.title}</Item.Header>
                  <Item.Description>
                    Hosted by <a>{this.props.events.hostedBy}</a>
                  </Item.Description>
                </Item.Content>
              </Item>
            </Item.Group>
          </Segment>
          <Segment>
            <span>
              <Icon name='clock' /> {this.props.events.date} |
              <Icon name='marker' /> {this.props.events.venue}
            </span>
          </Segment>
          <Segment secondary>
            <List horizontal>
              {this.props.events.attendees &&
                this.props.events.attendees.map((attendee) => <EventAttendee key={attendee.id} attendee={attendee} />)}
            </List>
          </Segment>
          <Segment clearing>
            <span>{this.props.events.description}</span>
            <Button as='a' color='teal' floated='right' content='View' />
          </Segment>
        </Segment.Group>
      </Fragment>
    );
  }
}
export default EventListItem;
