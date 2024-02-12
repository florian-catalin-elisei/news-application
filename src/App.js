import { useState, useEffect } from "react";
import { getLatestNews, getNewsByCategories, getNewsByTerms, getNewsBySources } from "./api";
import { InfoCards, NewsCards } from "./components";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async (func, param = {}) => {
    const news = await func(param);
    const { articles } = news;
    setArticles(articles);
  };

  const fetchLatestNews = async () => await fetchNews(getLatestNews);
  const fetchNewsByCategories = async (category) => await fetchNews(getNewsByCategories, category);
  const fetchNewsByTerms = async (term) => await fetchNews(getNewsByTerms, term);
  const fetchNewsBySources = async (source) => await fetchNews(getNewsBySources, source);

  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_API_KEY,
      onCommand: (commandData) => {
        switch (commandData.command) {
          case "fetchLatestNews":
            fetchLatestNews();
            break;
          case "fetchNewsByCategories":
            fetchNewsByCategories(commandData.category);
            break;
          case "fetchNewsByTerms":
            fetchNewsByTerms(commandData.term);
            break;
          case "fetchNewsBySources":
            fetchNewsBySources(commandData.source);
            break;
          default:
            break;
        }
      },
    });
  });

  return (
    <div className="App">
      {!articles.length ? (
        <div className="AppContainer">
          <img
            src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg"
            alt="Alan AI Logo"
            className="logo"
          />
          <InfoCards />
        </div>
      ) : (
        <NewsCards articles={articles} />
      )}
    </div>
  );
};

export default App;
