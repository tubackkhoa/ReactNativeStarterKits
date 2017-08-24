import React from 'react';
import {
  Container,
  Content,
  View,
  Input,
  InputGroup,
  Header,
  Body,
  Title,
  Button,
  Form,
  Label
} from 'native-base';

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
          <Form>
            <InputGroup>
              <Label>Username</Label>
              <Input placeholder="Enter your username" />
            </InputGroup>
            <InputGroup>
              <Label>Password</Label>
              <Input placeholder="password" secureTextEntry />
            </InputGroup>
            <Button>UserProfile</Button>
            <Button>Forgot password</Button>
            <Button>Register</Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default UserProfile;
