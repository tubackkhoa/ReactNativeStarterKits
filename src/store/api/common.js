import { create } from 'apisauce';
import { API_TIMEOUT } from '~/constants/api';
import configs from '~/constants/configs';

const API = create({
  baseURL: configs.endPoint,
  timeout: API_TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

if (__DEV__) {
  API.addMonitor(response => {
    console.log('API MONITOR', response);
  });
}
export { API };
