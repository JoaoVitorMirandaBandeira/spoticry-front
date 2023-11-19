import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";
import Cookies from "js-cookie";

export const login = async (body, navigate) => {
  console.log(body);
  try{
    const response = await axios.post(`${BASE_URL}user/login`, body)
    Cookies.set("token", response.data.token,{expires: 1/24})
    goToFeed(navigate)
  }catch(err){
    console.log(err);      
    alert(err.response.data.error);
  }
};
