import React, { useEffect, useState } from "react";

const BreakingNews = function ({ news }) {
  console.log(news);
  const [currentSliderStep, setCurrentSliderStep] = useState(0);
  useEffect(
    function () {
      const timerId = setInterval(() => {
        if (currentSliderStep == 4) setCurrentSliderStep(0);
        else {
          setCurrentSliderStep((step) => step + 1);
        }
      }, 5000);
      return () => clearInterval(timerId);
    },
    [currentSliderStep]
  );
  return (
    <section className="breaking-news">
      <div
        className="slider"
        style={{ backgroundImage: `url(${news[currentSliderStep]?.image})` }}
      >
        <p className="title">{news[currentSliderStep]?.title}</p>
        <div>
          <span className="author">By {news[currentSliderStep]?.author}</span>
          <span className="publish-date">
            {news[currentSliderStep]?.publishedAt}
          </span>
        </div>
      </div>

      <div>
        <div>
          <p className="title">{news[5]?.title}</p>
          <p className="desc">{news[5]?.description}</p>
        </div>
        <img src={news[5]?.image} alt="" />
      </div>

      <div>
        <p className="desc">{news[7]?.description}</p>
        <div>
          <p className="title">{news[7]?.title}</p>
          <img src={news[7]?.image} alt="" />
        </div>
      </div>

      <div>
        <img src={news[8]?.image} alt="" />
        <div>
          <p className="title">{news[8]?.title}</p>
          <div>
            <span>By {news[8]?.author}</span>
            <span>{news[8]?.publishedAt}</span>
          </div>
          <hr style={{ margin: "10px 0" }} />
          <p className="desc">{news[8]?.description}</p>
        </div>
      </div>
    </section>
  );
};
export default BreakingNews;
