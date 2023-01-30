import axios from "axios";
import {registerUserUrl,userLoginUrl} from "../services/api/user.api"

export const registerUser = async (data) => {

  return await axios.post(registerUserUrl,data);
};

export const userLoginPost= async (data) => {
  return await axios.post(userLoginUrl,data);
};

