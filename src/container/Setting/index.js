import React from 'react';
import { Container, Content, Text, Header, Body, Title } from 'native-base';

class Setting extends React.PureComponent {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Setting</Title>
          </Body>
        </Header>
        <Content>
          <Text>Setting</Text>
        </Content>
      </Container>
    );
  }
}

export default Setting;
