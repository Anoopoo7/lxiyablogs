/* eslint-disable import/no-anonymous-default-export */
import { backendUrl } from "../next.config";
import axios from "axios";
import { getUser } from "../utils/userManager";

const baseURL = backendUrl + "/api/v1/order";

const addItemToCart = async (body) => {
  const user = getUser();
  const url = baseURL + "/item";
  body.userId = user?.id;
  const response = await axios.post(url, body);
  if (response?.status && response?.data) {
    return response.data;
  }
  return null;
};

const getUserCart = async () => {
  const user = getUser();
  const url = baseURL + `/${user.id}`;
  const response = await axios.get(url);
  if (response?.status && response?.data) {
    return response.data;
  }
  return null;
};

export { addItemToCart, getUserCart };
