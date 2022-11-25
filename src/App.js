import React, { useEffect, useState } from "react";
import Footer from "./layouts/Footer";
import Article from "./components/Article";
import axios from "axios";
import data from "./data/data.json";

function App() {
  const [articles] = useState(data.articles);

  //Druha varianta get data
  // const [articles, setArticles] = useState([]);
  // const fetchArticles = async () => {
  //   console.log("Fetching articles");

  //   const response = await axios.get("data.json");
  //   const articles = response.data.articles;

  //   console.log("fetchArticles: ", articles);

  //   setArticles(articles);
  //   return articles;
  // };

  // const fetchData = async () => {
  //   const articles = await fetchArticles();

  //   setArticles(articles);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <main className="container">
        {articles.map((article, index) => (
          <Article
            key={index}
            author={article.author}
            date={article.date}
            title={article.title}
            image={article.image}
            text={article.text}
            comments={article.comments}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
