import getNews from "./config";

const getNewsBySources = async (source) => {
  const newsBySources = await getNews("/top-headlines", { sources: source });
  return newsBySources;
};

export default getNewsBySources;
