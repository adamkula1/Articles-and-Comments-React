import React, { useState } from "react";
import Footer from "./layouts/Footer";
import Article from "./components/Article";
import data from "./data/data.json";

function App() {
  const [articles] = useState(data.articles);
  const [value] = useState(0);

  const { author, date, title, image, text, comments } = articles[value];

  return (
    <>
      <main className="container">
        {articles.map((article, index) => (
          <Article
            key={index}
            author={author}
            date={date}
            title={title}
            image={image}
            text={text}
            comments={comments}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}

export default App;
