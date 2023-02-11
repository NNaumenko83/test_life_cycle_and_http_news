import axios from "axios";

const baseURL = "https://newsapi.org/v2/everything";
const apiKey = "65b7e1cdc460446cbb438b4053289b4f";

const apiNews = axios.create({
  baseURL,
});

const fetchNews = async (query, page) => {
  const params = { q: query, page, pageSize: 12, apiKey };
  const response = await apiNews("", { params });
  console.log(response);

  return response.data.articles;
};

export default fetchNews;
