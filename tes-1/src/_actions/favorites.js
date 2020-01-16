import { FAVORITES } from "../config/constants";
import axios from "axios";

export const getFavorites = () => {
  const token = localStorage.getItem("token");
  return {
    type: FAVORITES,
    payload: axios({
      method: "get",
      url: `http://localhost:7000/api/v1/user/favorites`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
