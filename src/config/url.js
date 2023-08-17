export const baseUrl = 'https://app.vyasimmigration.com/api'

export const getApiUrl = endpoint => baseUrl + endpoint;



 //-------- Object containing API endpoints.

 const apiEndpoints = {
    SIGNUP: getApiUrl('/admin/signup'),
    LOGIN: getApiUrl('/admin/login'),
  };
  
  export default apiEndpoints;