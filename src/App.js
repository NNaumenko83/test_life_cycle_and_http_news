import { nanoid } from "nanoid";
import { Component } from "react";
import NewsItem from "./components/newsItem";

import SearchForm from "./components/SearchForm";
import fetchNews from "./services/newsApi";

class App extends Component {
  state = {
    query: "",
    category: "",
    page: 1,
    news: [],
  };

  addQuery = (data) => {
    const { name: query, category } = data;

    this.setState({ query, category });
  };

  // async componentDidUpdate(_, prevState) {
  //   if (
  //     prevState.query !== this.state.query ||
  //     prevState.page !== this.state.page
  //   ) {
  //     try {
  //       const news = await fetchNews(this.state.query, this.state.page);
  //       const newsArray = news.map(
  //         ({ title, url, urlToImage, description }) => ({
  //           title,
  //           url,
  //           urlToImage,
  //           description,
  //           id: nanoid(),
  //         })
  //       );
  //       console.log(newsArray);
  //       this.setState((state) => ({ news: [...state.news, ...newsArray] }));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }

  render() {
    const { news } = this.state;
    return (
      <>
        <SearchForm onSubmit={this.addQuery} />
        <ul>
          {news.map(({ title, url, urlToImage, description, id }) => (
            <NewsItem
              key={id}
              title={title}
              url={url}
              urlToImage={urlToImage}
              description={description}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default App;
