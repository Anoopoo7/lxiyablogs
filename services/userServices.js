/* eslint-disable import/no-anonymous-default-export */
import { backendUrl } from "../next.config";
import axios from "axios";
import { saveUser } from "../utils/userManager";

const baseURL = backendUrl + "/users/api/v1";

const login = async (URL, body) => {
  const url = baseURL + URL;
  const response = await axios.post(url, body);
  if (response?.status && response?.data) {
    saveUser(response.data?.data);
    return response.data;
  }
  return null;
};

export { login };
