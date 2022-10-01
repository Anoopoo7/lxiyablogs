/* eslint-disable import/no-anonymous-default-export */
import { backendUrl } from "../next.config";
import axios from "axios";

const baseURL = backendUrl + "/product/api/v1/";

const getProductByUrl = async (URL) => {
  const url = baseURL +"url"+ URL;
  const response = await axios.get(url);
  if (response?.status && response?.data) return response.data;
  return null;
};

export { getProductByUrl };
