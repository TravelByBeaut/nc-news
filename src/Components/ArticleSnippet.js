export default function ArticleSnippet({ article }) {
  const snippet = article.body.split(".").shift();
  return (
    <ul className="single-article">
      <li className="article-list-item" key={article.article_id}>
        <section>
          <h1 id="article-title">{article.title}</h1>
        </section>
        <section>
          <h2 id="article-author">{article.author}</h2>
        </section>
        <section>{`${snippet}...`}</section>
        <br />
        <section>{article.created_at}</section>
        <br />
        <section>Comment count: {article.comment_count}</section>
        <section>Votes: {article.votes}</section>
      </li>
    </ul>
  );
}
