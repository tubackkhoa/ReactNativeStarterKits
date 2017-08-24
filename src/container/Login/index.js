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
  Label,
  Text
} from 'native-base';

class Login extends React.PureComponent {
  static defaultName = 'Login';

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Login</Title>
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
            <Button>
              <Text>Login</Text>
            </Button>
            <Button>
              <Text>Forgot password</Text>
            </Button>
            <Button>
              <Text>Register</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
