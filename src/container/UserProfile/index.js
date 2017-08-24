import React from 'react';
import { Container, Content, Text, Header, Body, Title } from 'native-base';

class UserProfile extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>UserProfile</Title>
          </Body>
        </Header>
        <Content>
          <Text>Profile</Text>
        </Content>
      </Container>
    );
  }
}

export default UserProfile;
