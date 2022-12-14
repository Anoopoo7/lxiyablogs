/* eslint-disable import/no-anonymous-default-export */
import { backendUrl } from "../next.config";
import axios from "axios";

const baseURL = backendUrl + "/api/v1/static/";

const getPageContentByPageType = async (type) => {
  const url = baseURL + "page/" + type;
  const response = await axios.get(url);
  if (response?.status && response?.data) return response.data;
  return null;
};

const getFeaturedItems = async () => {
  const url = baseURL + "featured";
  const response = await axios.get(url);
  if (response?.status && response?.data) return response.data;
  return null;
};

export { getPageContentByPageType, getFeaturedItems };
