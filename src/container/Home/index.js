import React from 'react';
import { connect } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Content, Text } from 'native-base';
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
        <Content>          
          <MapView style={{
            width: '100%',
            height: 400,
          }} provider={PROVIDER_GOOGLE}/>
        </Content>
      </Container>
    );
  }
}

export default Home;
