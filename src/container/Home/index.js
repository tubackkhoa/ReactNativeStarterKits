import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Footer,
  FooterTab,
  Button,
  Text
} from 'native-base';
import MapView from 'react-native-maps';
import * as commonActions from '~/store/actions/common';
import * as authActions from '~/store/actions/auth';
import * as authSelectors from '~/store/selectors/auth';

@connect(
  state => ({
    ...authSelectors.getUser(state)
  }),
  {
    ...commonActions,
    ...authActions
  }
)
class Home extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content>
          <MapView
            provider="google"
            style={{
              width: null,
              height: 300,
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center'
            }}
            region={{
              latitude: 21.029466,
              longitude: 105.811703,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={() => this.props.logout()}>
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
