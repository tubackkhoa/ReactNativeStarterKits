import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, ListItem, Left, View } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as authActions from '~/store/actions/auth';
import * as commonActions from '~/store/actions/common';
// import * as campaignActions from '~/store/actions/campaign';

// import * as accountSelectors from '~/store/selectors/account';
import * as authSelectors from '~/store/selectors/auth';

import options from './options';
import styles from './styles';
import images from '~/assets/images';
//import Icon from '~/ui/elements/Icon'

// import { API_BASE } from '~/store/constants/api';

@connect(
  state => ({
    socialType: authSelectors.getSocialType(state)
  }),
  { ...authActions, ...commonActions }
)
export default class extends Component {
  _handleSuccessLogout() {
    const { forwardTo, setToast, removeAllCampaign } = this.props;
    // OneSignal.deleteTag("user_id")
    removeAllCampaign();
    forwardTo('login');
    setToast('Logout successfully!!!');
  }

  _handleFailLogout(error) {
    const { forwardTo, setToast, removeAllCampaign } = this.props;
    // OneSignal.deleteTag("user_id")
    removeAllCampaign();
    forwardTo('login');
    setToast(error.msg, 'error');
  }

  navigateTo(route) {
    const { forwardTo, closeDrawer } = this.props;
    closeDrawer();
    forwardTo(route);
  }

  onFanProfilePress() {
    const { forwardTo, closeDrawer } = this.props;
    closeDrawer();
    forwardTo('fanProfile');
  }

  render() {
    return (
      <Content bounces={false} style={styles.container}>
        <ListItem onPress={this.onFanProfilePress.bind(this)} style={styles.drawerCover}>
          <Image
            source={images.avatar}
            placeholder={<Icon name="image" style={styles.drawerImage} />}
            style={styles.drawerImage}
          />

          <Text large style={styles.text}>
            Name in sidebar
          </Text>
          <Text small style={styles.text}>
            example@example.com
          </Text>
          {/*<View style={styles.editContainer}>
              <Text small style={styles.text}>{'LA'}, {'USA'}</Text>
              /!*<Icon onPress={e=>{/!*this.navigateTo('user/profile')*!/}} name="edit" style={styles.iconEdit} />*!/
            </View>*/}
        </ListItem>
        <View style={styles.listItemContainer}>
          {options.listItems.map((item, index) =>
            <ListItem noBorder key={index} button onPress={e => this.navigateTo(item.route)}>
              <Left>
                <Icon name={item.icon} style={styles.icon} />
                <Text style={styles.iconText}>
                  {item.name}
                </Text>
              </Left>
            </ListItem>
          )}
          <ListItem noBorder button onPress={() => this.props.logout()} style={{ marginTop: 20 }}>
            <Left>
              <Icon name={'sign-out'} style={styles.icon} />
              <Text style={styles.iconTextLast}>Log out</Text>
            </Left>
          </ListItem>
        </View>
      </Content>
    );
  }
}
