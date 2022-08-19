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

export const userLogin = async (url, data) => {
  try {
    return await axios
      .post(baseurl + url, data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        swal(err.response.data);

        console.log(err.response.data);
      });
  } catch (error) {
    console.error();
  }
};

export const userLogout = async (url, data) => {
  try {
    return await axios
      .post(baseurl + url, {}, config)
      .then((res) => {
        localStorage.removeItem("user");

        return res.data;
      })
      .catch((err) => {
        swal(err.response.data);

        console.log(err.response.data);
      });
  } catch (error) {
    console.error();
  }
};

export const userRegister = async (url, data) => {
  await axios
    .post(baseurl + url, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
        swal(err.response.data);

        return err.response;
      }
    });
};
