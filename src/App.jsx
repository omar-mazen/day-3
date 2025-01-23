import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewsController from "./controllers/NewsController";
import BreakingNews from "./views/BreakingNews";
import HeadlinesNews from "./views/HeadlinesNews";
import LatestNews from "./views/LatestNews";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [breakingNews, setBreackingNews] = useState([]);
  const [headlinesNews, setheadlinesNews] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const [latestNewsPage, setLatestNewsPage] = useState(1);
  useEffect(function () {
    (async function () {
      setBreackingNews(await NewsController.getBreakingNews());
      setheadlinesNews(await NewsController.getHeadlines());
      setLatestNews(await NewsController.getLatestNews());
      setIsLoading(false);
    })();
  }, []);
  async function onLoadMore() {
    setLatestNewsPage((pageNumber) => pageNumber + 1);
    console.log(latestNewsPage);
    const newPage = await NewsController.getLatestNews({
      page: latestNewsPage,
    });
    setLatestNews((news) => [...news, ...newPage]);
  }
  // if (isLoading) return <div className="loading"> loading...</div>;
  return (
    <>
      <div className="container">
        <Header />
        <Nav />
        <BreakingNews news={breakingNews} />
        <div className="layout">
          <LatestNews news={latestNews} onLoadMore={onLoadMore} />
          <HeadlinesNews news={headlinesNews} />
        </div>
        <footer>
          <img src="./logo.png" alt="" />
          <ul>
            <li>Privacy</li>
            <li>Policy</li>
            <li>Terms of Service</li>
            <li>Copyright Policy</li>
            <li>Data Policy</li>
            <li>Accessibility</li>
            <li>Help</li>
          </ul>
          <ul>
            <li>Politics</li>
            <li>World</li>
            <li>Economy</li>
            <li>Science & Tech</li>
            <li>Business</li>
            <li>Travel</li>
            <li>Climate</li>
            <li>Lifestyle</li>
            <li>Food</li>
            <li>Sports</li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default App;
