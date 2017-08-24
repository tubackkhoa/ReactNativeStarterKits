import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Text,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Icon
} from 'native-base';
import * as commonActions from '~/store/actions/common';

@connect(() => ({}), {
  ...commonActions
})
class Home extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content>
          <Text>Home</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={() => this.props.resetTo('login')}>
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
