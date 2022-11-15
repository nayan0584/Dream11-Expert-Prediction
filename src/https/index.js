import {URL} from '../Config';
import {Alert} from 'react-native';
import axios from 'axios';

const api = axios.create({
  baseURL: URL.api,
});

api.interceptors.request.use(
  async config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

api.interceptors.response.use(
  async response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default api;

export const getAppInfo = params => api.post('/get_app_info', params);
export const getCategories = params => api.post('/get_category_list', params);
export const getUpcomming = params =>
  api.post('/get_upcoming_match_list', params);
export const getLive = params => api.post('/get_live_match_list', params);
export const getComplete = params =>
  api.post('/get_complete_match_list', params);
