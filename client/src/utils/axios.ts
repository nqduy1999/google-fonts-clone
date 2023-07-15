import axios, { AxiosError } from 'axios';
const API_ROOT = 'https://www.googleapis.com/webfonts/v1/webfonts?key=';

const axiosClient = axios.create({
  baseURL: API_ROOT,
});

axiosClient.interceptors.request.use();

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {},
);
