import getNews from "./config";

const getNewsByTerms = async (term) => {
  const newsByTerms = await getNews("/everything", { q: term });
  return newsByTerms;
};

export default getNewsByTerms;
