import React from 'react';
import {
  Container,
  Content,
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
import { requestLogin } from '~/store/actions/auth';

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
            <Button onPress={() => this.props.dispatch(requestLogin())}>
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
