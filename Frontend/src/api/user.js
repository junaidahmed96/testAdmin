import axios from "axios";
import { baseurl } from "./baseurls";
import swal from "sweetalert";
const user = JSON.parse(localStorage.getItem("user"));

const config = {
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${user?.token}`,
  },
};

export const getUser = async (url, data) => {
  try {
    return await axios
      .get(baseurl + url, config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  } catch (error) {
    console.log(error);
  }
};
