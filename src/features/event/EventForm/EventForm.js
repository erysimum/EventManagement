import React, { Component, Fragment } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

class EventForm extends Component {
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };

  handleOnchangeEvent = (e) => {
    // e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.x(this.state);
  };
  render() {
    return (
      <Fragment>
        <Segment>
          <Form onSubmit={this.formSubmit}>
            <Form.Field>
              <label>Event Title</label>
              <input name='title' value={this.state.title} onChange={this.handleOnchangeEvent} placeholder='First Title' />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input name='date' value={this.state.date} onChange={this.handleOnchangeEvent} type='date' placeholder='Event Date' />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input name='city' value={this.state.city} onChange={this.handleOnchangeEvent} placeholder='City event is taking place' />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input name='venue' value={this.state.venue} onChange={this.handleOnchangeEvent} placeholder='Enter the Venue of the event' />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                name='hostedBy'
                value={this.state.hostedBy}
                onChange={this.handleOnchangeEvent}
                placeholder='Enter the name of person hosting'
              />
            </Form.Field>
            <Button positive type='submit'>
              Submit
            </Button>
            <Button onClick={this.props.cancelForm} type='button'>
              Cancel
            </Button>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}
export default EventForm;
