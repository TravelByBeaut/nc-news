import axios from "axios";

export const fetchArticles = ({ topic }) => {
  return axios
    .get(`https://emily-news-app.herokuapp.com/api/articles`, {
      params: {
        topic,
        all_data: true,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchTopics = () => {
  return axios
    .get(`https://emily-news-app.herokuapp.com/api/topics`)
    .then((res) => {
      return res;
    });
};

export const fetchArticleById = (article_id) => {
  return axios
    .get(`https://emily-news-app.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data;
    });
};
