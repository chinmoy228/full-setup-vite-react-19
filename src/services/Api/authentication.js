import { get, post, patch, del,put } from "../Apiwrapper/apiwrapper";

//post api for login
export const createLoginAuthentication = async (loginData) => {
    const config = {
      data: loginData,
      Headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    return await post(`/employee/login`, config);
  };
  
  //get api for get user
  export const getUser = async (data) => {
    // const config = {
    //   data: data,
    // };
    return await get(`/employee/${data?.id}`,config);
  };
  
  //forgot password link
  export const forgotPassword = async (data) => {
    const config = {
      data: data,
    };
    return await post(`/employee/forgot-password`, config);
  };
  // POST API for logout
  export const createLogoutAuthentication = async () => {
    return await post(`/auth/logout`);
  };
  
  //reset password
  
  export const resetPassword = async (data) => {
    const config = {
      data: data,
    };
    return await put(`/employee/set-password`, config);
  };
  