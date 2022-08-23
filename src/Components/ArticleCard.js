export default function ArticleCard({ article }) {
  return (
    <ul className="single-article">
      <li className="article-list-item" key={article.article_id}>
        <section>
          <h1 id="article-title">{article.title}</h1>
        </section>
        <section>
          <h2 id="article-author">{article.author}</h2>
        </section>
        <section>{article.body}</section>
        <br />
        <section>{article.created_at}</section>
      </li>
    </ul>
  );
}
