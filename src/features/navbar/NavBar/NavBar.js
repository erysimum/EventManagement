import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedInMenu from '../Menus/SignedInMenu';
import SignedOutMenu from '../Menus/SignedOutMenu';

class NavBar extends Component {
  state = {
    authenticated: true
  };

  handleSignIn = () => this.setState({ authenticated: true });

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  };
  render() {
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={NavLink} to='/' exact header>
            <img src='assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to='/events' exact name='Events' />
          <Menu.Item as={NavLink} to='/people' exact name='People' />
          <Menu.Item>
            <Button as={Link} to='/createEvent' floated='right' positive inverted content='Create Event' />
          </Menu.Item>
          {this.state.authenticated ? <SignedInMenu x1={this.handleSignOut} /> : <SignedOutMenu x2={this.handleSignIn} />}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
