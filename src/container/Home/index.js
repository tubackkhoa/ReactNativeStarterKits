import React from 'react';
import { connect } from 'react-redux';
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
          <Text>Hi there</Text>
        </Content>
      </Container>
    );
  }
}

export default Home;
