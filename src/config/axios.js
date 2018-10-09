import axios from 'axios'
import { Indicator } from 'mint-ui'; 
import { Toast } from 'mint-ui'; 
// http request 拦截器 
axios.interceptors.request.use( 
  config => { 
    Indicator.open() 
    return config; 
  }, 
  err => { 
    Indicator.close() 
    return Promise.reject(err); 
  }); 
// http response 拦截器 
axios.interceptors.response.use( 
  response => { 
    Indicator.close() 
    return response; 
  }, 
  error => { 
    Indicator.close() 
  }); 
export default axios