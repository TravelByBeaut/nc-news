import axios from "axios";

export const fetchArticles = () => {
  return axios
    .get(`https://emily-news-app.herokuapp.com/api/articles`)
    .then((res) => {
      return res;
    });
};
