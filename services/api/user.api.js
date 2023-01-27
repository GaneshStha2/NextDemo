import axios from "axios";


export const registerUser = async (data) => {
  return await axios.post(BASEURL+"/",data);
};
