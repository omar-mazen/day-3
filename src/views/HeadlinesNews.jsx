import React from "react";

const HeadlinesNews = function ({ news }) {
  return (
    <aside className="headlines">
      <h2 className="section-header">Headlines News</h2>
      <div className="section-content">
        {news.map((news) => (
          <NewsCard news={news} />
        ))}
      </div>
    </aside>
  );
};
export default HeadlinesNews;

const NewsCard = function ({ news }) {
  return (
    <>
      <div className="news">
        <img src={news?.image} alt="" />
        <div>
          <p className="title">{news?.title}</p>
          <p className="desc">{news?.description}</p>
          <div>
            <span>By {news?.author}</span>
            <span>{news?.publishedAt}</span>
          </div>
        </div>
      </div>
      <hr style={{ margin: "10px 0" }} />
    </>
  );
};
