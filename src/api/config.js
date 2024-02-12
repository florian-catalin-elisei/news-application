import axios from "axios";

const newsApi = "https://newsapi.org/v2";
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

const instance = axios.create({
  baseURL: newsApi,
  timeout: 5000,
  params: {
    apiKey: newsApiKey,
  },
});

const getNews = async (endpoint, params) => {
  try {
    const response = await instance.get(endpoint, { params });
    const { data } = response;

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch news data: ${error.message}`);
  }
};

export default getNews;
