import axios from "axios";

export const fetchArticles = ({ topic, sort_by, order_by }) => {
  return axios
    .get(`https://emily-news-app.herokuapp.com/api/articles`, {
      params: {
        topic,
        sort_by,
        order_by,
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
  return axios
    .post(
      `https://emily-news-app.herokuapp.com/api/articles/${article_id}/comments`,
      {
        username,
        body,
      }
    )
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://emily-news-app.herokuapp.com/api/comments/${comment_id}`
  );
};
