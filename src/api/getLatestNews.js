import getNews from "./config";

const getLatestNews = async () => {
  const latestNews = await getNews("/top-headlines", { country: "us" });
  return latestNews;
};

export default getLatestNews;
