import { newsApi } from "../axios";
import NewsModel from "../models/NewsModel";

class NewsController {
  static getBreakingNews({ category = "general" } = {}) {
    return newsApi
      .get(`/everything?sortBy=publishedAt&page=1&pageSize=10&q=${category}`)
      .then((response) =>
        response.data.articles?.map(
          ({
            title,
            description,
            author,
            source,
            url,
            urlToImage,
            publishedAt,
          }) =>
            new NewsModel({
              title,
              description,
              url,
              image: urlToImage,
              publishedAt: new Date(publishedAt).toDateString(),
              author: author || source?.name,
            })
        )
      )
      .catch((error) => {
        throw new Error(error.response.data.message);
      });
  }
  static getHeadlines({ page = 1, category = "general" } = {}) {
    return newsApi
      .get(
        `/top-headlines?category=${category}&page=${page}&pageSize=10&country=us`
      )
      .then((response) =>
        response.data.articles?.map(
          ({
            title,
            description,
            author,
            source,
            url,
            urlToImage,
            publishedAt,
          }) =>
            new NewsModel({
              title,
              description,
              url,
              image: urlToImage,
              publishedAt: new Date(publishedAt).toDateString(),
              author: author || source?.name,
            })
        )
      )
      .catch((error) => {
        throw new Error(error.response.data.message);
      });
  }
  static getLatestNews({ page = 1, category = "general" } = {}) {
    return newsApi
      .get(
        `/everything?page=${page}&pageSize=10&q=${category}&sortBy=relevancy`
      )
      .then((response) =>
        response.data.articles?.map(
          ({
            title,
            description,
            author,
            source,
            url,
            urlToImage,
            publishedAt,
          }) =>
            new NewsModel({
              title,
              description,
              url,
              image: urlToImage,
              publishedAt: new Date(publishedAt).toDateString(),
              author: author || source?.name,
            })
        )
      )
      .catch((error) => {
        throw new Error(error.response.data.message);
      });
  }
}
export default NewsController;
