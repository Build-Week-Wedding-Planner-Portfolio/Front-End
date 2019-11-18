import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    // baseUrl: "future end point",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth