import './nyheter.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Nyheter = () => {
  const [artikler, setArtikler] = useState([]);
  const apiKey = '5134871c421d40ce97ec1ef96c945711';

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => {
        // Filter out articles with a "Removed" title
        const filteredArticles = response.data.articles.filter(
          (article) => article.title !== '[Removed]'
        );
  
        setArtikler(filteredArticles);
      })
      .catch((error) => {
        console.error('Error med henting av nyhetsartikler:', error);
      });
  }, []);


  return (
    <div>
      <h1>Siste nyheter</h1>
      <button className="back-button">
        <Link href="/">Gå tilbake til forsiden</Link>
      </button>
      <ul>
        {artikler.map((artikkel, index) => (
          <li key={index}>
            {artikkel.urlToImage && (
              <img src={artikkel.urlToImage} alt={artikkel.title} />
            )}
            <a href={artikkel.url} target="_blank" rel="noopener noreferrer">
              {artikkel.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nyheter;