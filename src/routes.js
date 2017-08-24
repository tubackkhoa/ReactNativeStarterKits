import Login from './container/Login';
import Register from './container/Register';
import Home from './container/Home';
import Setting from './container/Setting';
import UserProfile from './container/UserProfile';

export default {
  home: {
    title: 'Home',
    Page: Home,
    headerType: 'home',
    footerType: 'none',
    cache: true
  },
  setting: {
    title: 'Setting',
    Page: Setting,
    headerType: 'back',
    footerType: 'none'
  },
  'user/profile': {
    title: 'User Profile',
    Page: UserProfile,
    headerType: 'none'
  },
  login: {
    title: 'Login',
    Page: Login,
    headerType: 'none',
    footerType: 'none'
  },
  register: {
    title: 'Register',
    Page: Register,
    headerType: 'none',
    footerType: 'none'
  }
};
