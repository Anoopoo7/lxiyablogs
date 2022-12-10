/* eslint-disable import/no-anonymous-default-export */
import { backendUrl } from "../next.config";
import axios from "axios";

const baseURL = backendUrl + "/api/v1/product/";

const getProductByUrl = async (URL) => {
  const url = baseURL + "url" + URL;
  const response = await axios.get(url);
  if (response?.status && response?.data) return response.data;
  return null;
};

const getProductInventoryById = async (id) => {
  const url = baseURL + "id/" + id;
  const response = await axios.get(url);
  if (response?.status && response?.data) return response.data;
  return null;
};

export { getProductByUrl, getProductInventoryById };
