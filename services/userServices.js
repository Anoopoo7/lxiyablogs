/* eslint-disable import/no-anonymous-default-export */
import { backendUrl } from "../next.config";
import axios from "axios";
import { saveUser, getUser } from "../utils/userManager";

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

const register = async (URL, body) => {
  const url = baseURL + URL;
  const response = await axios.post(url, body);
  if (response?.status && response?.data) {
    saveUser(response.data?.data);
    return response.data;
  }
  return null;
};

const getUserAddresses = async () => {
  const user = getUser();
  const url = baseURL + `/address?id=${user.id}`;
  const response = await axios.get(url);
  if (response?.status && response?.data) {
    return response.data;
  }
  return null;
};

const saveUserAddresses = async (body) => {
  const user = getUser();
  const url = baseURL + "/address";
  body.userId = user?.id;
  const response = await axios.post(url, body);
  if (response?.status && response?.data) {
    return response.data;
  }
  return null;
};

export { login, register, getUserAddresses, saveUserAddresses };
