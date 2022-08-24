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

export const updateVotes = (article_id, votes) => {
  return axios
    .patch(`https://emily-news-app.herokuapp.com/api/articles/${article_id}`, {
      inc_votes: votes,
    })
    .then(({ data }) => {
      return data;
    });
};

export const fetchCommentsById = (article_id) => {
  return axios
    .get(
      `https://emily-news-app.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data;
    });
};

export const sendComment = (article_id, username, body) => {
  console.log(username, body);

  return axios
    .post(
      `https://emily-news-app.herokuapp.com/api/articles/${article_id}/comments?order_by=asc`,
      {
        username,
        body,
      }
    )
    .then(({ data }) => {
      return data;
    });
};
