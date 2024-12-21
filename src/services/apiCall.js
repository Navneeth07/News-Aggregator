import {
  newsOrgInstance,
  newsNYInstance,
  newsGuardianInstance,
} from "./apiConfig";
import { API_ENDPOINTS } from "../constants/apiConstants";

export const getNewsOrgData = async (qParams = {}) => {
  try {
    const response = await newsOrgInstance.get(
      API_ENDPOINTS.NEWS_ORG.getAllNews,
      {
        params: qParams,
      }
    );
    return response?.data;
  } catch (error) {
    console.log("getAllNews API call error", error);
    return error;
  }
};

export const getNYNewsData = async (qParams = {}) => {
  try {
    const response = await newsNYInstance.get(API_ENDPOINTS.NY_NEWS.news, {
      params: qParams,
    });
    return response?.data;
  } catch (error) {
    console.log("getAllNews API call error", error);
    return error;
  }
};

export const getTopHeadlines = async (qParams = {}) => {
  try {
    const response = await newsOrgInstance.get(
      API_ENDPOINTS.NEWS_ORG.topHeadlines,
      {
        params: qParams,
      }
    );
    return response?.data;
  } catch (error) {
    console.log("getAllNews API call error", error);
    return error;
  }
};

export const getGuardianData = async (qParams = {}) => {
  try {
    const response = await newsGuardianInstance.get("search", {
      params: qParams,
    });
    return response?.data;
  } catch (error) {
    console.log("getAllNews API call error", error);
    return error;
  }
};
