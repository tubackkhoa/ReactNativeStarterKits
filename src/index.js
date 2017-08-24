import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import Preload from './container/Preload';
import { configStore } from './store';
import { forwardTo } from './store/actions';
import { initRoute, authorizedRoute } from './constants/routes';

class Root extends React.PureComponent {
  componentWillMount() {
    configStore(store => {
      const firstRoute = store.getState().auth.loggedIn ? authorizedRoute : initRoute;
      store.dispatch(forwardTo(firstRoute, true));
      this.store = store;
      this.forceUpdate();
    });
  }

  store = null;

  render() {
    if (!this.store) {
      return <Preload />;
    }
    console.log('store', this.store);
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

// const Root = async () => {
//   const store = await configStore();
//   const firstRoute = store.getState().auth.loggedIn ? authorizedRoute : initRoute;
//   store.dispatch(forwardTo(firstRoute, true));
//   return (
//     <Provider store={this.store}>
//       <App />
//     </Provider>
//   );
// };

AppRegistry.registerComponent('ReactNativeStarterKits', () => Root);
