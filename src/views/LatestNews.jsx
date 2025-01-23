import React from "react";

const LatestNews = function ({ news, onLoadMore }) {
  return (
    <section className="latest-news">
      <h2 className="section-header">Latest News</h2>
      <div className="section-content">
        {news.map((news, i) => (
          <NewsCard news={news} key={`latest-new-card-${i}`} />
        ))}
      </div>
      <button className="load-more" onClick={onLoadMore}>
        Load More
      </button>
    </section>
  );
};
export default LatestNews;

const NewsCard = function ({ news }) {
  if (!news?.description && news?.image)
    return (
      <div
        className="news-with-image"
        style={{ backgroundImage: `url(${news?.image})` }}
      >
        <p className="title">{news?.title}</p>
        <div>
          <span className="author">By {news?.author}</span>
          <span className="publish-date">{news?.publishedAt}</span>
        </div>
      </div>
    );
  else
    return (
      <div className="news-with-desc">
        <p className="title">{news?.title}</p>
        <div>
          <span>By {news?.author}</span>
          <span>{news?.publishedAt}</span>
        </div>
        {news?.description && (
          <>
            <hr style={{ margin: "10px 0" }} />
            <p className="desc">{news.description}</p>
          </>
        )}
      </div>
    );
};
