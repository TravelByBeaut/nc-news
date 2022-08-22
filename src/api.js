import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get(`https://emily-news-app.herokuapp.com/api/articles`)
    .then((res) => {
      return res;
    });
};

export const fetchTopics = () => {
  return axios
    .get(`https://emily-news-app.herokuapp.com/api/topics`)
    .then((res) => {
      return res;
    });
};

export const fetchArticlesByTopic = (topic) => {
  return axios
    .get(`https://emily-news-app.herokuapp.com/api/articles?topic=${topic}`)
    .then(({ data }) => {
      return data.article;
    });
};
