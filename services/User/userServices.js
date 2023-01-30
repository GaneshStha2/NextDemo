import axios from "axios";
import {userUrl} from "./api/user.api"

export const registerUser = async (data) => {

  return await axios.post(userUrl.USER_REGISTRATION_URL,data);
};

export const userLoginPost= async (data) => {
  return await axios.post(userUrl.USER_LOGIN_URL,data);
};

