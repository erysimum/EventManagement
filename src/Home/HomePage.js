import React from 'react';
import { Button, Container, Header, Icon, Image, Segment } from 'semantic-ui-react';

const HomePage = (props) => {
  return (
    <div>
      <Segment inverted textAlign='center' vertical className='masthead'>
        <Container text>
          <Header as='h1' inverted>
            <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
            Re-vents
          </Header>
          <Button onClick={() => props.history.push('/events')} size='huge' inverted>
            Get started
            <Icon name='right arrow' inverted />
          </Button>
        </Container>
      </Segment>
    </div>
  );
};

export default HomePage;
