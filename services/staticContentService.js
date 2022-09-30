/* eslint-disable import/no-anonymous-default-export */
import { backendUrl } from "../next.config";
import axios from "axios";

const baseURL = backendUrl + "/static/api/v1/";

const getPageContentByPageType = async (type) => {
  const url = baseURL + "page/" + type;
  const response = await axios.get(url);
  if (response?.status && response?.data) return response.data;
  return null;
};

export { getPageContentByPageType };
