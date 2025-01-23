import axios from "axios";

export const newsApi = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "X-Api-Key": "539b4208eae94720a0ca95ffbd1d47f5",
  },
});
