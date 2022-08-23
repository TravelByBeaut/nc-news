import axios from "axios";

export const fetchArticles = ({ topic }) => {
  return axios
    .get(`https://emily-news-app.herokuapp.com/api/articles`, {
      params: {
        topic,
        all_data: true,
      },
    })
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
