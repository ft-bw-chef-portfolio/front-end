import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://bw4-chef-api.herokuapp.com/api/",
    headers: {
      // "Access-Control-Allow-Headers": "*",
      token: token
    }
  });
};
