import React from 'react';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Text,
  Footer,
  FooterTab,
  Button
} from 'native-base';

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
          <Text>Home</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Home;
