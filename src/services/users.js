import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/Coordinator";
import Cookies from "js-cookie";

export const login = (body, navigate) => {
  console.log(body);
  axios
    .post(`${BASE_URL}user/login`, body)
    .then((res) => {
      Cookies.set("token", res.data.token)
      /*localStorage.setItem("token", res.data.token);*/
      goToFeed(navigate)
    })
    .catch((err) => {
      console.log(err);      
      alert(err.response.data.error);
    });
};
