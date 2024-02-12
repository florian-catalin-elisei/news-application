import getNews from "./config";

const getNewsByCategories = async (category) => {
  const newsByCategories = await getNews("/top-headlines", { country: "us", category });
  return newsByCategories;
};

export default getNewsByCategories;
