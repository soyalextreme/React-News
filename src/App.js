import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const uri = `https://newsapi.org/v2/top-headlines?country=mx&category=${category}&apiKey=eb83cb2307e644b2820bf093fece8c23`;

      const response = await fetch(uri);
      const data = await response.json();

      setNews(data.articles);

      // api key
    };
    fetchApi();
  }, [category]);

  return (
    <div>
      <Header>Buscador de Noticias</Header>
      <div className="container white">
        <Form setCategory={setCategory} />
        <List news={news} />
      </div>
    </div>
  );
}

export default App;
