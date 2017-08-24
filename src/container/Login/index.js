import React from 'react';
import { connect } from 'react-redux';
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
  Text,
  Left,
  Right
} from 'native-base';
import * as commonActions from '~/store/actions/common';
import * as commonSelectors from '~/store/selectors/common';

@connect(
  state => ({
    loginRequest: commonSelectors.getRequest(state)
  }),
  {
    ...commonActions
  }
)
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
            <Button onPress={() => this.props.resetTo('home')}>
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
